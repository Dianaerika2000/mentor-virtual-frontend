import { Outlet } from 'react-router-dom'
import { Navbar } from '@/shared/components/Navbar'
import { MentorAvatar } from '@/features/mentor/components/MentorAvatar'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
       <main className="
        w-full
        max-w-sm mx-auto
        md:max-w-2xl
        lg:max-w-5xl
        px-4 py-6
      ">
        <Outlet />
      </main>
      <MentorAvatar/>
    </div>
  )
}