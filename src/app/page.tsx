import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/site/container";
import { FadeInUp } from "@/components/site/fade-in-up";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SITE } from "@/content/site";
import { ACTIVITIES } from "@/content/activities";
import { MediaSharing } from "@/components/site/media-sharing";
import diahPhoto from "@/assets/img_diah.png";
import diahPhoto2 from "@/assets/img_diah2.jpg";

export default function Home() {
  return (
    <div className="pb-10">
      <FadeInUp delayMs={0}>
        <section className="pt-14 sm:pt-16">
          <Container>
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-3xl bg-muted md:block" />
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
                    <div className="group relative aspect-[4/5] w-full">
                      <Image
                        src={diahPhoto}
                        alt="Portrait of Diah Rahmawati"
                        fill
                        priority
                        sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                        className="object-cover transition-opacity duration-700 group-hover:opacity-0"
                      />
                      <Image
                        src={diahPhoto2}
                        alt="Alternative Portrait of Diah Rahmawati"
                        fill
                        sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                        className="absolute inset-0 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <p className="text-xl font-medium tracking-wide text-[#cbb483]">
                  {SITE.tagline}
                </p>
                <h1 className="mt-4 text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-6xl">
                  {SITE.name}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {SITE.summary}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button variant="secondary" asChild>
                    <Link href="/kontak">Get in touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </FadeInUp>

      <FadeInUp delayMs={140}>
        <MediaSharing />
      </FadeInUp>

      <FadeInUp delayMs={120}>
        <section className="pt-14 sm:pt-16">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase opacity-70">
                  LIFE AT UNIS
                </p>
                <h2 className="mt-3 text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                  Activities
                </h2>
              </div>
              <div className="flex gap-2">
                {/* Carousel controls are inside the Carousel component but we can also use custom ones if needed */}
              </div>
            </div>

            <Separator className="mt-6" />

            <div className="mt-8">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {ACTIVITIES.map((activity, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="group relative overflow-hidden rounded-2xl border border-border bg-background">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={activity.image}
                            alt={activity.caption}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                        <div className="p-5">
                          <p className="text-sm font-medium leading-relaxed text-foreground transition-colors group-hover:text-accent">
                            {activity.caption}
                          </p>
                        </div>
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
          </Container>
        </section>
      </FadeInUp>

      <FadeInUp delayMs={160}>
        <section className="pt-14 sm:pt-16 pb-10">
          <Container>
            <div className="mt-12">
              <div className="rounded-3xl border border-border bg-background/50 p-6">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase opacity-70">
                  Location
                </p>
                <p className="mt-2 text-sm">{SITE.location}</p>
              </div>
            </div>
          </Container>
        </section>
      </FadeInUp>
    </div>
  );
}
