import './globals.css'
import { Inter } from 'next/font/google'
import SideBar from "@/components/side-bar";
import {Provider} from "react-redux";
import store from "@/app/store";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
