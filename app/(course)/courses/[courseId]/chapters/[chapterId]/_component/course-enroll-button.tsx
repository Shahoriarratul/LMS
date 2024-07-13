"use client";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";

interface CourseEnrollButtonProp {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProp) => {
  return (
    <Button size="sm" className="w-full md:w-auto ">
      Enroll For {formatPrice(price)}
    </Button>
  );
};
