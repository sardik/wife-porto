"use client";

import { TikTokEmbed, YouTubeEmbed } from "react-social-media-embed";
import { CREATIVE_TIKTOKS, CREATIVE_YOUTUBES } from "@/content/creative-media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CreativeMedia() {
  return (
    <div className="space-y-16">
      {/* TikTok Categories */}
      {CREATIVE_TIKTOKS.map((category) => (
        <div key={category.category}>
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-xl font-medium tracking-tight">{category.category}</h3>
            <div className="flex gap-2">
              {/* Optional: Add counters or more info */}
            </div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {category.urls.map((url, i) => (
                <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="flex h-full justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 p-2">
                    <TikTokEmbed url={url} width="100%" height={445} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2 pr-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      ))}

      {/* YouTube Grid */}
      <div>
        <h3 className="mb-8 text-xl font-medium tracking-tight">YouTube</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CREATIVE_YOUTUBES.map((url, i) => (
            <div key={i} className="flex justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 p-2 lg:p-4">
              <YouTubeEmbed url={url} width="100%" height={315} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
