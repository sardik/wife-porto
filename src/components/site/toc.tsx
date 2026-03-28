"use client";

import * as React from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export type TocItem = {
  id: string;
  label: string;
};

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length === 0) return null;

  return (
    <div className="w-full">
      <div className="hidden md:block">
        <p className="text-xs font-medium tracking-wide text-muted-foreground">
          TABLE OF CONTENTS
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {items.map((it) => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className="text-sm text-muted-foreground hover:text-accent"
            >
              {it.label}
            </a>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <Accordion type="single" collapsible defaultValue="toc">
          <AccordionItem value="toc">
            <AccordionTrigger>Table of contents</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                {items.map((it) => (
                  <a
                    key={it.id}
                    href={`#${it.id}`}
                    className="text-sm hover:text-accent"
                  >
                    {it.label}
                  </a>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
