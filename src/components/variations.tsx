import { CircleDollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Variation() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">Ultimas Variações</CardTitle>
          <CircleDollarSign className="ml-auto h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
}
