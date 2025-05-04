import { SignedOut, SignUpButton, SignInButton, SignedIn } from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"

const Auth = () => {
  return (
    <div>
      <SignedOut>
        <SignUpButton mode='modal'/>
        <SignInButton mode='modal'/>
      </SignedOut>
      <SignedIn>
        <Navigate to="/"/>
      </SignedIn>
    </div>
  )
}

export default Auth;