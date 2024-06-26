import { db } from "@/lib/db";

export const getProgress = async (
  userId: string,
  courseId: string
): Promise<number> => {
  try {
    const publishedChapter = await db.chapter.findMany({
      where: {
        courseId: courseId,
        isPublished: true,
      },
      select: {
        id: true,
      },
    });
    const publishedChapterIds = publishedChapter.map((chapter) => chapter.id);
    const validCompleatedChapter = await db.userProgress.count({
      where: {
        userId: userId,
        chapterId: {
          in: publishedChapterIds,
        },
        isCompleted: true,
      },
    });
    const progressPercestage =
      (validCompleatedChapter / publishedChapterIds.length) * 100;

    return progressPercestage;
  } catch (error) {
    console.log("[GET_PROGRESS]", error);
    return 0;
  }
};
