'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button"

// Blog post data
const posts = [
  {
    id: 1,
    title: "Bento Grid with Tailwind CSS Next.js and Framer Motion",
    excerpt: "A bento grid is a design trend that focuses on grids to showcase various features of your product or business. In this article, we are going to talk a...",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Manu Arora",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 2,
    title: "Creating the best SaaS Template for AI Startups",
    excerpt: "In this article, I will walk you through our flagship AI SaaS Template where I talk about how I structured it from start to finish and what are some o...",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Manu Arora",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 3,
    title: "Building Modern Web Applications",
    excerpt: "Learn about the latest techniques and best practices for building modern web applications with React and Next.js...",
    image: "/placeholder.svg?height=400&width=600",
    author: {
      name: "Manu Arora",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  }
]

export default function BlogSlider() {
  return (
    // <div className="w-full bg-black text-white py-16 px-4">
    //   <div className="max-w-6xl mx-auto">
    //     {/* Header Section */}
    //     <div className="text-center mb-16">
    //       <h1 className="text-5xl font-bold mb-4">Blog</h1>
    //       <p className="text-lg text-gray-400 max-w-2xl mx-auto">
    //         Tech tips, best practices and the latest front-end development trends explained by us in detail.
    //       </p>
    //     </div>

    //     {/* Blog Carousel */}
    //     <Carousel
    //       opts={{
    //         align: "start",
    //         loop: true,
    //       }}
    //       className="w-full"
    //     >
    //       <CarouselContent className="-ml-2 md:-ml-4">
    //         {posts.map((post) => (
    //           <CarouselItem key={post.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
    //             <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
    //               <CardContent className="p-0">
    //                 <div className="relative h-[200px] md:h-[300px]">
    //                   <Image
    //                     src={post.image}
    //                     alt={post.title}
    //                     fill
    //                     className="object-cover"
    //                   />
    //                 </div>
    //                 <div className="p-6">
    //                   <div className="flex items-center gap-3 mb-4">
    //                     <Avatar className="h-8 w-8">
    //                       <AvatarImage src={post.author.avatar} alt={post.author.name} />
    //                       <AvatarFallback>
    //                         {post.author.name.split(' ').map(n => n[0]).join('')}
    //                       </AvatarFallback>
    //                     </Avatar>
    //                     <span className="text-sm text-gray-400">{post.author.name}</span>
    //                   </div>
    //                   <h2 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">
    //                     {post.title}
    //                   </h2>
    //                   <p className="text-gray-400 line-clamp-2">
    //                     {post.excerpt}
    //                   </p>
    //                 </div>
    //               </CardContent>
    //             </Card>
    //           </CarouselItem>
    //         ))}
    //       </CarouselContent>
    //       <CarouselPrevious className="hidden md:flex" />
    //       <CarouselNext className="hidden md:flex" />
    //     </Carousel>
    //   </div>
    // </div>

    <Button>BUTTON</Button>
  )
}

