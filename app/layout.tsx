'use client'

import '@/styles/dist.css'
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>TODO sample</title>
      </head>
      <body className="min-h-screen overflow-y-scroll bg-zinc-200">
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  )
}
