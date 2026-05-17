import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HomeworkClock – Track Real Homework Time vs Estimates',
  description: 'Students log actual time spent on assignments vs teacher estimates to identify workload issues. Built for parents and students aged 13-18.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3aad10b9-f0f7-49d7-996b-7c04e6a13e0e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
