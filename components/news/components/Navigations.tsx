"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Navigations() {
    return (

        <nav className="sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        {/* <Avatar className="h-8 w-8">
                            <AvatarImage src="/myAvatar.svg" alt="Farhan Afandi" />
                            <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                        <span className="text-xl font-bold">Farhan Afandi</span> */}
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    >
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/news"
                                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                    >
                                        News
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ModeToggle />
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Navigation */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <nav className="flex flex-col space-y-4">
                                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                                    Home
                                </Link>
                                <Link href="/news" className="text-lg font-medium hover:text-primary transition-colors">
                                    News
                                </Link>
                            </nav>
                            <div className="pt-2">
                                <ModeToggle />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
