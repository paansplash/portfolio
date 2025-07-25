"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function Footer() {
    return (
        <footer className="py-8 px-4">
            <div className="container mx-auto max-w-4xl">
                <Card className="border-0 shadow-none bg-transparent">
                    <CardContent className="text-center p-0">
                        <p className="text-sm text-muted-foreground">
                            © 2024 Farhan Afandi. Built with Next.js, shadcn/ui, and Tailwind CSS.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </footer>

    )
}
