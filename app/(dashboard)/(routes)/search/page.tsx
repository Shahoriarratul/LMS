import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import { SearchInput } from "@/components/search-input";
import { getCourses } from "@/actions/get-courses";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseList } from "@/components/courses-list";
interface SearhPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearhPageProps) => {
  const { userId } = auth();
  if (!userId) {
    return redirect("/");
  }
  const catagories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const courses = await getCourses({
    userId,
    ...searchParams,
  });
  return (
    <>
      <div className="px-6 pt-6 md:hidden md:mb-0 block ">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={catagories} />
        <CourseList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
