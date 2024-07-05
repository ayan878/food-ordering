import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNavbar() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          {isAuthenticated ? (
            <span className=" flex items-center font-bold gap-2">
              <img
                src={user?.picture}
                alt="user-profile"
                className="rounded-full w-10 h-10 border"
              />
              <span>{user?.name}</span>
            </span>
          ) : (
            <span>Welcome to tastyTrails</span>
          )}
          <SheetTitle>
            <Separator />
            <SheetDescription className="flex flex-col gap-4">
              {isAuthenticated ? (
                <MobileNavLinks />
              ) : (
                <Button className="flex-1 items-center hover:bg-gray-500 bg-orange-500 font-bold" onClick={async()=>await loginWithRedirect()}>
                  Log In
                </Button>
              )}
            </SheetDescription>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
