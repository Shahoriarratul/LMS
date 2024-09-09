import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface DataCardProps {
  value: number;
  label: string;
  shoulFormat?: boolean;
}

export const DataCard = ({ value, label, shoulFormat }: DataCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2Xl font-bold ">
          {shoulFormat ? formatPrice(value) : value}
        </div>
      </CardContent>
    </Card>
  );
};
