export type ContentSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ContentPage = {
  slug: string;
  title: string;
  description: string;
  sections: ContentSection[];
};

export const PAGES: ContentPage[] = [
  {
    slug: "about",
    title: "About",
    description: "Profile, education, work experience, and additional duties.",
    sections: [
      {
        heading: "A Bit About Me",
        paragraphs: [
          "I'm Diah Rahmawati — a computer science educator, content creator, and lifelong learner based in Tangerang, Indonesia.",
          "I believe education has the power to change lives. My journey is rooted in perseverance and a deep commitment to building better opportunities through technology and learning.",
          "Today, I focus on empowering students and communities with practical, approachable resources in computer science and education.",
        ],
      },
      {
        heading: "Values I Lead With",
        bullets: [
          "Human-first: technology should serve people.",
          "Clarity: learning should be structured, practical, and easy to follow.",
          "Consistency: growth comes from small steps done repeatedly.",
        ],
      },
      {
        heading: "What You'll Find Here",
        bullets: [
          "Educational resources: lecture notes, coding exercises, and recommended readings.",
          "Creative content: writing, videos, and discussions around tech and education.",
          "Professional portfolio: academic work, projects, and contributions.",
          "Community engagement: collaborations, workshops, and learning spaces.",
        ],
      },
    ],
  },
  {
    slug: "dispatch",
    title: "Dispatch",
    description: "Publications and service to society activities.",
    sections: [
      {
        heading: "What I Share",
        bullets: [
          "Real-world lessons from teaching and learning computer science.",
          "Ideas for building better study systems and staying consistent.",
          "Reflections on education, technology, and creative work.",
        ],
      },
      {
        heading: "How to Use It",
        paragraphs: [
          "Start with the topics that match what you need today.",
          "Save what resonates, and come back whenever you need a reset or a new perspective.",
        ],
      },
    ],
  },
  {
    slug: "learning-resources",
    title: "Learning Resources",
    description: "Lecture notes, coding exercises, and recommended readings.",
    sections: [
      {
        heading: "Resources",
        bullets: [
          "Lecture notes and concise concept summaries.",
          "Coding exercises from beginner to intermediate.",
          "Recommended readings to deepen your understanding.",
        ],
      },
      {
        heading: "How to Use These Materials",
        paragraphs: [
          "Pick a topic, study the notes, and practice with small exercises.",
          "Build momentum with consistency, then increase complexity step by step.",
        ],
      },
    ],
  },
  {
    slug: "creative-content",
    title: "Creative Content",
    description: "Writing, videos, and conversations about tech and education.",
    sections: [
      {
        heading: "Formats",
        bullets: [
          "Blog posts and written notes.",
          "Short-form and long-form videos.",
          "Discussions, live sessions, and occasional podcasts.",
        ],
      },
      {
        heading: "Topics I Love",
        paragraphs: [
          "Practical programming lessons, learning systems, productivity, and career growth — especially where technology meets education.",
        ],
      },
    ],
  },
];

export function getPageBySlug(slug: string) {
  return PAGES.find((p) => p.slug === slug) ?? null;
}
