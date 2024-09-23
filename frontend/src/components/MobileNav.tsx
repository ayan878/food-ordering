import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <img
                src={user?.picture}
                alt={user?.name}
                className="w-8 rounded-full"
              />
              {user?.name}
            </span>
          ) : (
            <span>Welcome to tastyTrials</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLink />
          ) : (
            <Button
              className="flex-1 bg-orange-500 font-bold"
              onClick={async () => await loginWithRedirect()}
            >
              {isAuthenticated ? "Log Out" : "Log In"}
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
