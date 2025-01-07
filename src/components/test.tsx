import * as React from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true, // Infinite scroll loop
        slidesToScroll: 1, // Move one slide at a time
        skipSnaps: false, // Enable smooth scrolling
      }}
      className="w-full max-w-full"
    >
      <CarouselContent className="flex space-x-4">
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client1.svg" // Image for client1
            alt="Client 1"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={107}
            height={25}
          />
        </CarouselItem>
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client2.svg" // Image for client2
            alt="Client 2"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={107}
            height={25}
          />
        </CarouselItem>
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client3.svg" // Image for client3
            alt="Client 3"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={107}
            height={25}
          />
        </CarouselItem>
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client4.png" // Image for client4 (PNG)
            alt="Client 4"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={80}
            height={15}
          />
        </CarouselItem>
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client5.svg" // Image for client5
            alt="Client 5"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={107}
            height={25}
          />
        </CarouselItem>
        <CarouselItem className="w-1/2 sm:w-1/3 md:w-1/6 flex-none">
          <Image
            src="/client6.svg" // Image for client6
            alt="Client 6"
            className="object-contain transition-transform duration-300 transform hover:scale-90"
            width={107}
            height={25}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
