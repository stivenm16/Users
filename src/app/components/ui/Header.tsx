'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '.'

const Header: React.FC = () => {
  const session = useSession()

  return (
    <div className=" md:block bg-indigo-700 rounded-full text-center py-1 mx-auto my-3 w-3/4 md:w-fit px-5 shadow-xl">
      <div className="container mx-auto py-2">
        <div className="flex md:items-center md:justify-center">
          <nav className="flex justify-between md:space-x-6 text-gray-300 w-full">
            <Link
              href={'/'}
              className="text-sm font-medium hover:text-white flex items-center"
            >
              Home
            </Link>

            {session.data?.user?.email && (
              <>
                <Link
                  href={'/auth/posts'}
                  className="text-sm font-medium hover:text-white flex items-center"
                >
                  Posts
                </Link>
                <Button
                  label="Logout"
                  className="text-sm font-medium hover:text-white flex items-center"
                  onClick={() => signOut({ callbackUrl: '/' })}
                />
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
