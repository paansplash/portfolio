"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Home,
    Info,
    ClipboardCheck,
    Book,
    Mail,
    GraduationCap,
} from "lucide-react"

interface NavigationsProps {
    activeIndex: number
    goToSection: (index: number) => void
}

const navLinkStyle =
    "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-1 text-xs rounded-full text-white px-0 w-8 h-8 xs:w-11 xs:h-11"

export default function Navigations({ activeIndex, goToSection }: NavigationsProps) {
    return (
        <>
            {/* Progress bar */}
            {/* <div className="fixed top-0 left-0 w-full z-40">
                <div
                    className="h-1 bg-primary transition-all duration-300"
                    style={{ width: `${((activeIndex + 1) / 6) * 100}%` }}
                />
            </div> */}

            {/* Navigation bar */}
            <nav className="w-screen flex justify-center fixed bottom-8 z-30">
                <div className="bg-white/10 bg-opacity-30 py-3 px-7 flex gap-3 rounded-full backdrop-blur-lg">
                    <NavigationMenu>
                        <NavigationMenuList className="flex items-center gap-1 sm:gap-3 md:gap-5">
                            <NavigationMenuItem>
                                <button
                                    onClick={() => goToSection(0)}
                                    className={navLinkStyle}
                                    aria-label="Home"
                                    title="Home"
                                >
                                    <Home className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <button
                                    onClick={() => goToSection(1)}
                                    className={navLinkStyle}
                                    aria-label="About"
                                    title="About"
                                >
                                    <Info className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <button
                                    onClick={() => goToSection(2)}
                                    className={navLinkStyle}
                                    aria-label="Skills"
                                    title="Skills"
                                >
                                    <GraduationCap className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem>

                            {/* <NavigationMenuItem>
                                <button
                                    onClick={() => goToSection(3)}
                                    className={navLinkStyle}
                                    aria-label="Skills"
                                    title="Skills"
                                >
                                    <Book className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem> */}
                            <NavigationMenuItem className="hidden md:flex">
                                <button
                                    onClick={() => goToSection(3)}
                                    className={navLinkStyle}
                                    aria-label="Projects"
                                    title="Projects"
                                >
                                    <ClipboardCheck className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <button
                                    onClick={() => goToSection(4)}
                                    className={`${navLinkStyle} bg-primary-foreground text-primary`}
                                    aria-label="Contact"
                                    title="Contact"
                                >
                                    <Mail className="w-5 h-5" />
                                </button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </nav>
        </>
    )
}
