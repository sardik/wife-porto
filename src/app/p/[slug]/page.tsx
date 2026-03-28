import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Container } from "@/components/site/container";
import { FadeInUp } from "@/components/site/fade-in-up";
import { Toc, type TocItem } from "@/components/site/toc";
import { Separator } from "@/components/ui/separator";
import {
  ABOUT_CLOSING,
  ABOUT_HERO,
  ADDITIONAL_DUTIES,
  EDUCATION,
  WORK_EXPERIENCE,
} from "@/content/about";
import { PUBLICATIONS, SERVICE_TO_SOCIETY } from "@/content/dispatch";
import { getPageBySlug, PAGES } from "@/content/pages";
import { CreativeMedia } from "@/components/site/creative-media";
import { slugify } from "@/lib/slug";
import diahPhoto2 from "@/assets/img_diah2.jpg";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
    },
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);
  if (!page) notFound();

  if (slug === "about") {
    return (
      <div className="pt-12 sm:pt-16">
        <Container>
          <FadeInUp delayMs={0}>
            <div className="grid gap-10 md:grid-cols-12 md:items-center">
              <div className="md:col-span-5">
                <div className="relative">
                  <div className="absolute -left-6 -top-6 hidden h-full w-full rounded-3xl bg-muted md:block" />
                  <div className="relative overflow-hidden rounded-3xl border border-border bg-background">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={diahPhoto2}
                        alt="Portrait of Diah Rahmawati"
                        fill
                        priority
                        sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="mt-4 max-w-2xl space-y-4 sm:mt-0">
                  {ABOUT_HERO.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="text-base leading-7 text-muted-foreground sm:text-lg"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delayMs={120}>
            <Separator className="mt-14" />
          </FadeInUp>

          <FadeInUp delayMs={200}>
            <div className="mt-12 grid gap-10 md:grid-cols-12">
              <section className="md:col-span-6" aria-label="Education">
                <h2 className="mt-3 text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                  Education
                </h2>
                <Separator className="mt-6" />
                <div className="mt-6 space-y-6">
                  {EDUCATION.map((item, index) => (
                    <FadeInUp
                      key={`${item.period}-${item.title}`}
                      delayMs={260 + index * 80}
                    >
                      <div className="grid gap-1">
                        <p className="text-xs font-medium tracking-wide text-muted-foreground">
                          {item.period}
                        </p>
                        <p className="text-base font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.organization}
                        </p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </section>

              <section className="md:col-span-6" aria-label="Work experience">
                <h2 className="mt-3 text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                  Work Experience
                </h2>
                <Separator className="mt-6" />
                <div className="mt-6 space-y-6">
                  {WORK_EXPERIENCE.map((item, index) => (
                    <FadeInUp
                      key={`${item.period}-${item.title}`}
                      delayMs={260 + index * 80}
                    >
                      <div className="grid gap-1">
                        <p className="text-xs font-medium tracking-wide text-muted-foreground">
                          {item.period}
                        </p>
                        <p className="text-base font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.organization}
                        </p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              </section>
            </div>
          </FadeInUp>

          <FadeInUp delayMs={320}>
            <Separator className="mt-14" />
          </FadeInUp>

          <FadeInUp delayMs={400}>
            <section className="mt-12" aria-label="Additional duties">
              <h2 className="mt-3 text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                Additional Duties
              </h2>
              <Separator className="mt-6" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {ADDITIONAL_DUTIES.map((duty, index) => (
                  <FadeInUp
                    key={`${duty.period}-${duty.title}`}
                    delayMs={460 + index * 90}
                  >
                    <div className="rounded-3xl border border-border bg-background/50 p-6">
                      <p className="text-xs font-medium tracking-wide text-muted-foreground">
                        {duty.period}
                      </p>
                      <p className="mt-2 text-base font-medium">{duty.title}</p>
                      {duty.organization ? (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {duty.organization}
                        </p>
                      ) : null}
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delayMs={520}>
            <Separator className="mt-14" />
          </FadeInUp>

          <FadeInUp delayMs={600}>
            <section className="mt-12 pb-4" aria-label="Closing">
              <h2 className="mt-3 text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                Let’s Connect
              </h2>
              <Separator className="mt-6" />
              <div className="mt-6 max-w-3xl space-y-4">
                {ABOUT_CLOSING.slice(0, 2).map((p) => (
                  <p key={p} className="text-base leading-7 text-foreground/90">
                    {p}
                  </p>
                ))}
                <p className="text-base leading-7 text-foreground/90">
                  Email:{" "}
                  <a
                    href="mailto:diah.smyth@gmail.com"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    diah.smyth@gmail.com
                  </a>
                </p>
                {ABOUT_CLOSING.slice(2).map((p) => (
                  <p key={p} className="text-base leading-7 text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-10">
                <p className="text-xs font-medium tracking-wide text-muted-foreground">
                  Keep reading
                </p>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {PAGES.filter((p) => p.slug !== page.slug)
                    .slice(0, 4)
                    .map((p) => (
                      <Link
                        key={p.slug}
                        href={`/p/${p.slug}`}
                        className="text-sm underline underline-offset-4 hover:text-accent"
                      >
                        {p.title}
                      </Link>
                    ))}
                </div>
              </div>
            </section>
          </FadeInUp>
        </Container>
      </div>
    );
  }

  if (slug === "creative-content" && page) {
    const toc: TocItem[] = [
      ...page.sections
        .map((s) => ({
          id: slugify(s.heading),
          label: s.heading,
        }))
        .filter((it) => it.id.length > 0),
      { id: "social-media", label: "Social Media" },
    ];

    return (
      <div className="pt-12 sm:pt-16">
        <Container>
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <FadeInUp delayMs={0}>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase opacity-70">
                  PAGE
                </p>
                <h1 className="mt-4 text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-5xl">
                  {page.title}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {page.description}
                </p>
              </FadeInUp>
              <FadeInUp delayMs={120}>
                <Separator className="mt-10" />
              </FadeInUp>

              <div className="mt-10 space-y-12">
                {page.sections.map((section, index) => {
                  const id = slugify(section.heading);
                  return (
                    <FadeInUp key={section.heading} delayMs={200 + index * 120}>
                      <section aria-label={section.heading}>
                        <h2
                          id={id}
                          className="text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl scroll-mt-24"
                        >
                          {section.heading}
                        </h2>
                        {section.paragraphs?.length ? (
                          <div className="mt-4 space-y-4">
                            {section.paragraphs.map((p) => (
                              <p
                                key={p}
                                className="text-base leading-7 text-foreground/90"
                              >
                                {p}
                              </p>
                            ))}
                          </div>
                        ) : null}
                        {section.bullets?.length ? (
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90">
                            {section.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    </FadeInUp>
                  );
                })}

                <FadeInUp delayMs={400}>
                  <section aria-labelledby="social-media">
                    <h2
                      id="social-media"
                      className="text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl scroll-mt-24"
                    >
                      Social Media
                    </h2>
                    <Separator className="mt-6 mb-10" />
                    <CreativeMedia />
                  </section>
                </FadeInUp>
              </div>
            </div>

            <aside className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <FadeInUp delayMs={220}>
                  <Toc items={toc} />
                </FadeInUp>
                <FadeInUp delayMs={340}>
                  <div className="mt-8 rounded-3xl border border-border bg-background/50 p-6">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground">
                      Keep reading
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      {PAGES.filter((p) => p.slug !== page.slug)
                        .slice(0, 3)
                        .map((p) => (
                          <Link
                            key={p.slug}
                            href={`/p/${p.slug}`}
                            className="text-sm underline underline-offset-4 hover:text-accent"
                          >
                            {p.title}
                          </Link>
                        ))}
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </aside>
          </div>
        </Container>
      </div>
    );
  }

  if (slug === "dispatch") {
    return (
      <div className="pt-12 sm:pt-16">
        <Container>
          <FadeInUp delayMs={0}>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                {page.description}
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delayMs={120}>
            <Separator className="mt-12" />
          </FadeInUp>

          <FadeInUp delayMs={200}>
            <section className="mt-12" aria-label="Publications">
              <h2 className="text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                Publication
              </h2>
              <Separator className="mt-6" />
              <div className="mt-6 space-y-6">
                {PUBLICATIONS.map((item, index) => (
                  <FadeInUp
                    key={`${item.year}-${item.title}`}
                    delayMs={240 + index * 70}
                  >
                    <div className="grid gap-2 md:grid-cols-12 md:gap-6">
                      <p className="text-xs font-medium tracking-wide text-muted-foreground md:col-span-2">
                        {item.year}
                      </p>
                      <p className="text-base leading-7 text-foreground/90 md:col-span-10">
                        {item.title}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </section>
          </FadeInUp>

          <FadeInUp delayMs={320}>
            <Separator className="mt-14" />
          </FadeInUp>

          <FadeInUp delayMs={400}>
            <section className="mt-12 pb-4" aria-label="Service to society">
              <h2 className="text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl">
                Service to Society
              </h2>
              <Separator className="mt-6" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {SERVICE_TO_SOCIETY.map((item, index) => (
                  <FadeInUp key={item.description} delayMs={420 + index * 90}>
                    <div className="overflow-hidden rounded-3xl border border-border bg-background/50">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={item.image}
                          alt="Service activity photo"
                          fill
                          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        {item.year ? (
                          <p className="text-xs font-medium tracking-wide text-muted-foreground">
                            {item.year}
                          </p>
                        ) : null}
                        <p className="mt-2 text-sm leading-6 text-foreground/90">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </section>
          </FadeInUp>
        </Container>
      </div>
    );
  }

  const toc: TocItem[] = page.sections
    .map((s) => ({
      id: slugify(s.heading),
      label: s.heading,
    }))
    .filter((it) => it.id.length > 0);

  return (
    <div className="pt-12 sm:pt-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <FadeInUp delayMs={0}>
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase opacity-70">
                PAGE
              </p>
              <h1 className="mt-4 text-4xl font-[var(--font-display)] leading-[1.05] tracking-tight sm:text-5xl">
                {page.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {page.description}
              </p>
            </FadeInUp>
            <FadeInUp delayMs={120}>
              <Separator className="mt-10" />
            </FadeInUp>

            <div className="mt-10 space-y-12">
              {page.sections.map((section, index) => {
                const id = slugify(section.heading);
                return (
                  <FadeInUp key={section.heading} delayMs={200 + index * 120}>
                    <section aria-label={section.heading}>
                      <h2
                        id={id}
                        className="text-2xl font-[var(--font-display)] tracking-tight sm:text-3xl scroll-mt-24"
                      >
                        {section.heading}
                      </h2>
                      {section.paragraphs?.length ? (
                        <div className="mt-4 space-y-4">
                          {section.paragraphs.map((p) => (
                            <p
                              key={p}
                              className="text-base leading-7 text-foreground/90"
                            >
                              {p}
                            </p>
                          ))}
                        </div>
                      ) : null}
                      {section.bullets?.length ? (
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-foreground/90">
                          {section.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  </FadeInUp>
                );
              })}
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <FadeInUp delayMs={220}>
                <Toc items={toc} />
              </FadeInUp>
              <FadeInUp delayMs={340}>
                <div className="mt-8 rounded-3xl border border-border bg-background/50 p-6">
                  <p className="text-xs font-medium tracking-wide text-muted-foreground">
                    Keep reading
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    {PAGES.filter((p) => p.slug !== page.slug)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/p/${p.slug}`}
                          className="text-sm underline underline-offset-4 hover:text-accent"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
}
