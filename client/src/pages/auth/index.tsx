import { SignedOut, SignUpButton, SignInButton, SignedIn, SignOutButton, UserButton } from "@clerk/clerk-react"

const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton mode='modal'/>
        <SignInButton mode='modal'/>
      </SignedOut>
      <SignedIn>
        <UserButton/>
        <SignOutButton/>
      </SignedIn>
    </div>
  )
}

export default Auth