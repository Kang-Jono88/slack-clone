import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const App = () => {
  return (
    <header>
     <SignedOut>
      <SignInButton mode="modal"/>
      <SignedIn>
        <UserButton/>
     </SignedIn>
    </SignedOut>
    </header>
  )
}

export default App
