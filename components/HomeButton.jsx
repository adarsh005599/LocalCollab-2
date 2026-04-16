'use client'
import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="fixed top-6 left-6 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow hover:scale-105 transition"
    >
      <ArrowLeft size={18} />
      <span className="text-sm font-semibold">Home</span>
    </Link>
  )
}