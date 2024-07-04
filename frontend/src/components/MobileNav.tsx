import { Menu } from "lucide-react";
import { Button } from "./button";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet"


export default function MobileNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
      <Menu className="text-orange-500"/>
      </SheetTrigger>
      <SheetContent className="space-y-3" >
        <SheetHeader>
          <span>Welcome to tastyTrails</span>
          <SheetTitle>
            <Separator/>
            <SheetDescription className="flex">
              <Button className="flex-1 bg-orange-500 font-bold">Log In</Button>
            </SheetDescription>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
