export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
};

export type DutyItem = {
  title: string;
  organization?: string;
  period: string;
};

export const ABOUT_HERO = {
  // eyebrow: "Welcome to My Profile,",
  paragraphs: [
    "My name is Diah Rahmawati, born on March 22, 1993, in Tangerang. I hold a Bachelor's degree in Computer Engineering from Universitas Islam Syekh-Yusuf and a Master's degree in Information Systems Management from Bina Nusantara University.",
    "Currently, I serve as a lecturer in the Computer Engineering program at Syekh Yusuf Islamic University. Driven by a desire to make a meaningful impact, I dedicate myself to creating educational content that empowers and enriches the lives of others. Through my work, I aim to contribute to the growth and development of individuals seeking knowledge and inspiration.",
  ],
} as const;

export const EDUCATION: TimelineItem[] = [
  {
    period: "2015 - 2017",
    title: "Master of Information Systems Management",
    organization: "Bina Nusantara University",
  },
  {
    period: "2011 - 2015",
    title: "Informatics Engineering",
    organization: "Universitas Islam Syekh-Yusuf",
  },
  {
    period: "2008 - 2011",
    title: "Multimedia",
    organization: "SMK Negeri 1 Kota Tangerang",
  },
  {
    period: "2005 - 2008",
    title: "Junior High School",
    organization: "SMP Negeri 5 Kota Tangerang",
  },
  {
    period: "2005 - 2008",
    title: "Elementary School",
    organization: "SD Negeri Daan Mogot 1 Tangerang",
  },
];

export const WORK_EXPERIENCE: TimelineItem[] = [
  {
    period: "2018 - Now",
    title: "Lecturer in Informatics Engineering Program",
    organization: "Universitas Islam Syekh-Yusuf",
  },
  {
    period: "2017 - 2019",
    title: "System Analyst",
    organization: "Freelancer",
  },
  {
    period: "2017 - 2018",
    title: "Lecturer in Information System Program",
    organization: "Global Institute of Technology & Business",
  },
  {
    period: "2016 - 2017",
    title: "System Analyst",
    organization: "PT. Archibus Solution Center Indonesia",
  },
  {
    period: "2015 - 2016",
    title: "HRD & GA",
    organization: "PT. Saricoco Tritunggal Mandiri",
  },
  {
    period: "2014 - 2015",
    title: "Operating System Support Staff",
    organization: "PT. Trans Retail Indonesia",
  },
  {
    period: "2012 - 2014",
    title: "HRD & GA",
    organization: "PT. Sato Sara Semesta",
  },
];

export const ADDITIONAL_DUTIES: DutyItem[] = [
  {
    title: "Head of IT/IS Laboratory",
    organization: "Faculty of Engineering",
    period: "2023 - Now",
  },
  {
    title: "UNISTEK Journal Administrator",
    period: "2021 - Now",
  },
  {
    title: "Final Project / Thesis Committee",
    organization: "Faculty of Engineering",
    period: "2021 - Now",
  },
  {
    title: "Faculty of Engineering Senate",
    organization: "UNIS",
    period: "2021 - 2023",
  },
];

export const ABOUT_CLOSING = [
  "I'm always eager to connect with fellow educators, learners, and creators. Whether you have a question, collaboration idea, or simply want to say hello, don't hesitate to reach out. You can connect with me via email at diah.smyth@gmail.com.",
  "Thank you for visiting, and I hope you find inspiration and knowledge within these virtual walls.",
  "Warm regards,",
  "Diah Rahmawati, S.Kom., M.MSI",
] as const;
