import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700'] })

export const metadata: Metadata = {
  title: "Fake landing for Club La Nacion",
  description: "For an interview challenge purposes.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
