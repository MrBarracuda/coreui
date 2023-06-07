'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import {Provider} from "react-redux";
import store from "@/config/store";
import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
      </body>
    </html>
  )
}
