import type { StaticImageData } from "next/image";

import service1 from "@/assets/service/service1.jpg";
import service2 from "@/assets/service/service2.jpg";
import service3 from "@/assets/service/service3.png";
import service4 from "@/assets/service/service4.jpg";

export type PublicationItem = {
  year: string;
  title: string;
};

export type ServiceItem = {
  image: StaticImageData;
  description: string;
  year?: string;
};

export const PUBLICATIONS: PublicationItem[] = [
  {
    year: "2025",
    title:
      "Perancangan Sistem Informasi Poin Pelanggaran Siswa/i pada SMK Ki Hajar Dewantoro Berbasis Web",
  },
  {
    year: "2024",
    title:
      "Design of an Infusion Capacity Monitoring System for Patients Based on the Internet of Things in Hospitals",
  },
  {
    year: "2024",
    title: "Aplikasi Presensi Pegawai Dengan Geolokasi Dan Interval Waktu Berbasis Android",
  },
  {
    year: "2023",
    title:
      "Rancang Bangun Sistem Informasi E-Gudang Pada PT. XYZ Berbasis Website Dengan Framework Laravel",
  },
  {
    year: "2023",
    title:
      "Perancangan Sistem Pemilihan Ketua Osis Dan Ketua Kelas Di Smk Yuppentek 2 Kabupaten Tangerang Berbasis Web Menggunakan Unified Modelling Language (UML)",
  },
  {
    year: "2023",
    title:
      "Implementasi Metode SMART Pada Pemilihan Kegiatan Ekstrakurikeler Untuk Siswa SD (Studi Kasus: SDIT Cordova 2)",
  },
  {
    year: "2022",
    title:
      "Relevance Analysis of Systems Analysis and Design Courses With System Analyst Skill Needs",
  },
  {
    year: "2021",
    title:
      "Analisis Kepuasan Mahasiswa Terhadap Sistem Informasi Akademik (Sina) Universitas Islam Syekh Yusuf Tangerang Berdasarkan Instrumen End User Computing Satisfaction (EUCS)",
  },
  {
    year: "2020",
    title:
      "Perancangan Sistem E-Learning Berbasis Responsive Web Di Universitas Islam Syekh Yusuf Tangerang",
  },
];

export const SERVICE_TO_SOCIETY: ServiceItem[] = [
  {
    image: service1,
    description:
      "Penyuluhan Pembuatan Lubang Resapan Biopori Sebagai Upaya Pencegahan Banjir di Desa Laban Bulan",
    year: "2022",
  },
  {
    image: service2,
    description:
      "Sosialisasi: Teknologi di Masa Sekarang dan Dampaknya Bagi Remaja (SMK Kesehatan Mutiara Insani)",
    year: "2022",
  },
  {
    image: service3,
    description: "Workshop Management Tools berbasis AI di Pondok Pesantren Daarul Barkah",
  },
  {
    image: service4,
    description:
      "Sosialisasi dan Workshop: Teknik Monitoring Gadget untuk Keamanan Digital yang Ramah Anak",
  },
];

