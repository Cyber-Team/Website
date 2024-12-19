'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const posts = [
  {
    id: 1,
    title: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
    excerpt: "A bento grid is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
    image: "src/assets/cyberteam.png",
  },
  {
    id: 2,
    title: "Creating the best SaaS Template for AI Startups",
    excerpt: "In this article, I will walk you through our flagship AI SaaS Template where I talk about how I structured it from start to finish and what are some o...",
    image: "src/assets/cyberteam.png",
  },
  {
    id: 3,
    title: "Building Modern Web Applications",
    excerpt: "Learn about the latest techniques and best practices for building modern web applications with React and Next.js...",
    image: "src/assets/cyberteam.png",
  }
]

export default function BlogSlider() {
  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {posts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2">
                  <Card className="bg-zinc-900 border-zinc-800">
                    <CardContent className="p-0">
                      <div className="h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 h-48">
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 text-white">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious  className="bg-black"/>
            <CarouselNext  className="bg-black"/>
            
          </Carousel>
        </div>
      </div>
    </div>
  )
}