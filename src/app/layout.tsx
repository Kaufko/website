import type { Metadata } from 'next'
import { Menu } from '@headlessui/react'
import Link from "next/link";

import './globals.css'

export const metadata: Metadata = {
    title: 'Filip - Programmer and avid hobbyist',
    description: 'Self-taught programmer motivated by creating cool personal projects. Master at googling and stackoverflow.',

}

export default function RootLayout({ children, }:
    {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en">
            <body>
                <Menu>
                    <header className="relative w-full z-50 top-0">
                        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                            <h1 className="text-2xl font-bold">Filip H.</h1>
                            <nav>
                                <ul className="flex sm:space-x-6">
                                    <li className="route-header-li">
                                        <Link href="/" className="route-header-link">Home</Link>
                                    </li>
                                    <li className="route-header-li">
                                        <Link href="/projects" className="route-header-link">Projects</Link>
                                    </li>
                                    <li className="route-header-li">
                                        <Link href="/about" className="route-header-link">About</Link>
                                    </li>

                                </ul>
                            </nav>
                            <ul>
                                <li className="route-header-li">
                                    <Link href="/contact" className="route-header-link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                </Menu>
                {children}
            </body>
        </html>
    )
}