"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface CourseSidebarItemPorps {
  label: string;
  id: string;
  isCompleated: boolean;
  courseId: string;
  isLocked: boolean;
}
export const CourseSidebarItem = ({
  label,
  id,
  isCompleated,
  courseId,
  isLocked,
}: CourseSidebarItemPorps) => {
  const pathname = usePathname();
  const router = useRouter();
  // prettier-ignore
  const Icon = isLocked ? Lock : (isCompleated ? CheckCircle : PlayCircle);
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`);

    console.log(isLocked);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20 ",
        isActive &&
          " text-salte-700 bg-slate-300/30 hover:bg-slate-200/20 hover:text-slate-700",
        isCompleated && "text-emerald-700 hover:text-emerald-700",
        isCompleated && isActive && "bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500",
            isActive && "text-slate-700",
            isCompleated && "text-emerald-700"
          )}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100",
          isCompleated && "border-emerald-700"
        )}
      ></div>
    </button>
  );
};
