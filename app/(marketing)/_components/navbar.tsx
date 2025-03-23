"use client"

import { useScrollTop } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils';
import React from 'react'
import Logo from './logo';
import { ModeToggle } from '@/components/mode-toggle';
import { useConvexAuth } from 'convex/react';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { Spinner } from '@/components/spinner';

const Navbar = () => {
  const scrolled = useScrollTop();
  const {isAuthenticated, isLoading} = useConvexAuth();
  return (
    <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] sticky top-0 flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
        <Logo />
        <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
            {isLoading && (
              <Spinner />
            )}
            {!isAuthenticated && !isLoading && (
              <>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm">
                    Log In
                  </Button>
                </SignInButton>
                <SignInButton mode="modal">
                  <Button size="sm">
                    Get Notive free
                  </Button>
                </SignInButton>
              </>
            )}
            <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar   