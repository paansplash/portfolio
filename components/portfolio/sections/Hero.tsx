"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        < section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4" >
            <div className="container mx-auto max-w-4xl">
                <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="text-center p-0">
                        <Avatar className="h-32 w-32 mx-auto mb-8 border-4 border-primary/20">
                            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Farhan Afandi" />
                            <AvatarFallback className="text-2xl">FA</AvatarFallback>
                        </Avatar>

                        <div className="space-y-4 mb-8">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                                <span className="text-primary">Farhan Afandi</span>
                            </h1>
                            <p className="text-xl text-muted-foreground">Web Developer</p>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-7">
                                Web developer with a strong grasp of business needs. Experienced in project planning,
                                requirement gathering, and database design.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" asChild>
                                <Link href="#projects">View My Work</Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section >
    )
}