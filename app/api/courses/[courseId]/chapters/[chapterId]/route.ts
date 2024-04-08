import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();
    if (!userId) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });
    if (!ownCourse) {
      return new NextResponse("unauthorized", { status: 401 });
    }
    const chapter = await db.chapter.update({
      where: { id: params.chapterId, courseId: params.courseId },
      data: {
        ...values,
      },
    });

    /// handle video uplaod
    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSE_CHAPTER_ID", error);
    return new NextResponse("Interanal Error", { status: 500 });
  }
}
