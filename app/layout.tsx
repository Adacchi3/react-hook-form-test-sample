import '@/styles/dist.css'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="min-h-screen overflow-y-scroll bg-zinc-200">
        {children}
      </body>
    </html>
  )
}
