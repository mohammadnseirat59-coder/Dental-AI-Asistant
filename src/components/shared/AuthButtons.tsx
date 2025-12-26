import { LogIn, LogOutIcon, UserCheck } from "lucide-react";
import React, { useState } from "react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";

import ActionButton from "./ActionButton";

interface IAuthButtonsProps {
  showUserButton?: boolean;
}

const AuthButtons = ({ showUserButton }: IAuthButtonsProps) => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsLoading(false);
    }
  };

  //! if the user is Sigend In
  if (isSignedIn) {
    return (
      <div className="flex items-center gap-4">
        <ActionButton
          onClick={handleSignOut}
          Icon={LogOutIcon}
          loading={isLoading}
          btnClassName=" bg-red-600 border border-red-600 hover:bg-red-800 text-red-100 transition-all duration-500 overflow-hidden group"
          label="Sign Out"
        />

        {showUserButton && (
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "w-20 h-20 ring-2 ring-primary ring-offset-2",
              },
            }}
          />
        )}
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2">
      <SignInButton>
        <ActionButton
          Icon={LogIn}
          label="Sign In"
          btnClassName="bg-primary/10 border border-primary group transition-colors duration-300 hover:bg-primary/25"
          labelClassName="text-primary"
          iconClassName="text-primary"
        />
      </SignInButton>
      <SignUpButton>
        <ActionButton Icon={UserCheck} label="Sign Up" />
      </SignUpButton>
    </div>
  );
};

export default AuthButtons;
