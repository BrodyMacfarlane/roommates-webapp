import { Metadata } from 'next'
import LogoutClientPage from '@/app/client-pages/Logout'

export const metadata: Metadata = {
  title: 'Roommates | Successfully Logged Out',
  description: 'Log out of your Roommates account.',
}

export default function LogOut() {
  return <LogoutClientPage />
}
