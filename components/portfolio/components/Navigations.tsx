"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Home,
    Info,
    Brain,
    ClipboardCheck,
    Book,
    GraduationCap,
    FolderGit2,
    Mail,
} from "lucide-react"
import Link from "next/link"

export default function Navigations() {
    const navLinkStyle =
        "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-1 text-xs rounded-full text-white px-0 w-8 h-8 xs:w-11 xs:h-11"

    return (
        <nav className="w-screen flex justify-center fixed bottom-8 z-30">
            <div className="bg-white/10 bg-opacity-30 py-3 px-7 flex gap-3 rounded-full backdrop-blur-lg">
                <NavigationMenu>
                    <NavigationMenuList className="flex items-center gap-1 sm:gap-3 md:gap-5">
                        <NavigationMenuItem>
                            <Link href="#home" className={navLinkStyle} aria-label="Home" title="Home">
                                <Home className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#about" className={navLinkStyle} aria-label="About" title="About">
                                <Info className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#experience" className={navLinkStyle} aria-label="Experience" title="Experience">
                                <Book className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="#expertise"
                                className={`${navLinkStyle} hidden md:flex`}
                                aria-label="Expertise"
                                title="Expertise"
                            >
                                <ClipboardCheck className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="#qualification"
                                className={navLinkStyle}
                                aria-label="Qualification"
                                title="Qualification"
                            >
                                <GraduationCap className="w-6 h-6" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="#portfolio"
                                className={navLinkStyle}
                                aria-label="Portfolio"
                                title="Portfolio"
                            >
                                <FolderGit2 className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link
                                href="#contact"
                                className={`${navLinkStyle} bg-primary-foreground text-primary`}
                                aria-label="Contact"
                                title="Contact"
                            >
                                <Mail className="w-5 h-5" />
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    )
}
