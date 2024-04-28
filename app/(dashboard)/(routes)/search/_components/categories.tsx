"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcFilmReel,
  FcCommandLine,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from "react-icons/fc";

import { IconType } from "react-icons";
import { CategoryItem } from "./categoty-item";
import { cn } from "@/lib/utils";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Link from "next/link";

interface CategoriesProps {
  items: Category[];
}
const iconMap: Record<Category["name"], IconType> = {
  "Music": FcMusic,
  "Photography": FcOldTimeCamera,
  "Fitness": FcSportsMode,
  "Accounting": FcSalesPerformance,
  "Computer Sceince": FcCommandLine,
  "Filming": FcFilmReel,
  "Engineering": FcEngineering,
};
export const Categories = ({ items }: CategoriesProps) => {
  const searchParams = useSearchParams();
  const currentCategoryId = searchParams.get("categoryId");
  const isSelected = !currentCategoryId;

  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      <Link
        href={"/search"}
        className={cn(
          "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-sky-700 transition",
          isSelected && "border-sky-700 bg-sky-200/20 text-sky-800"
        )}
        type="button"
      >
        <div className="truncate">ALL</div>
      </Link>
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
