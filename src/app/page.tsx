import {
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <h1>Hello from the home page</h1>
      <SignedOut>
        <SignUpButton mode="modal">
          <Button>Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
    </>
  );
}
