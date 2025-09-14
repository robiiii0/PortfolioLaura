"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function MediaCard({ item }: { item: MediaItem }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={`relative w-full ${item.aspect ?? "aspect-[4/3]"} overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200 bg-gray-100`}
    >
      {item.type === "video" ? (
        inView ? (
          <video
            src={item.src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            preload="none"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse" />
        )
      ) : (
        <Image
          src={item.src}
          alt={item.alt ?? "Media"}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          loading="lazy"
        />
      )}
    </div>
  );
}
type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  aspect?: string; // e.g., "aspect-[4/3]" or "aspect-square"
};

const mediaItems: MediaItem[] = [
  // Videos from /public/apropos
  {
    type: "video",
    src: "/apropos/49ef3ac4dc8a4f1c80a466e876c86920.mov",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/apropos/video1.mp4", aspect: "aspect-square" },
  { type: "video", src: "/apropos/video2.mp4", aspect: "aspect-[4/3]" },
  {
    type: "image",
    src: "/laura/image.jpg",
    alt: "Laura portrait",
    aspect: "aspect-[3/4]",
  },
  // Images from /public/monapproche
  {
    type: "image",
    src: "/monapproche/IMG_2895.jpeg",
    alt: "Mon approche 2895",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/monapproche/IMG_1657.jpeg",
    alt: "Mon approche 1657",
    aspect: "aspect-square",
  },
  { type: "video", src: "/montravail/video8.mp4", aspect: "aspect-square" },

  // Images from /public/laura
  {
    type: "image",
    src: "/laura/image2.jpg",
    alt: "Laura 8657",
    aspect: "aspect-[3/4]",
  },
  {
    type: "image",
    src: "/montravail/img1.jpeg",
    alt: "Mon travail 1",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/montravail/video2.mov", aspect: "aspect-square" },

  {
    type: "image",
    src: "/montravail/img2.jpeg",
    alt: "Mon travail 2",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "/montravail/img3.jpeg",
    alt: "Mon travail 3",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/montravail/img4.jpeg",
    alt: "Mon travail 4",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/montravail/video9.mp4", aspect: "aspect-[4/3]" },
  { type: "video", src: "/montravail/video10.mov", aspect: "aspect-[4/3]" },
  {
    type: "image",
    src: "/montravail/img5.jpeg",
    alt: "Mon travail 5",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "/montravail/img6.jpeg",
    alt: "Mon travail 6",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/montravail/img7.jpeg",
    alt: "Mon travail 7",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/montravail/video5.mp4", aspect: "aspect-square" },

  {
    type: "image",
    src: "/montravail/img8.jpeg",
    alt: "Mon travail 8",
    aspect: "aspect-square",
  },
  {
    type: "video",
    src: "/montravail/0423(1)_vid.mp4",
    aspect: "aspect-square",
  },

  {
    type: "image",
    src: "/montravail/img9.jpeg",
    alt: "Mon travail 9",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/montravail/img10.jpeg",
    alt: "Mon travail 10",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/montravail/video3.mp4", aspect: "aspect-[4/3]" },
  {
    type: "image",
    src: "/montravail/img11.jpeg",
    alt: "Mon travail 11",
    aspect: "aspect-square",
  },
  { type: "video", src: "/montravail/video4.mov", aspect: "aspect-[4/3]" },

  {
    type: "image",
    src: "/montravail/img12.jpeg",
    alt: "Mon travail 12",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/montravail/img13.jpeg",
    alt: "Mon travail 13",
    aspect: "aspect-[4/3]",
  },
  { type: "video", src: "/montravail/video6.mp4", aspect: "aspect-[4/3]" },
  { type: "video", src: "/montravail/video7.mp4", aspect: "aspect-[4/3]" },
  {
    type: "image",
    src: "/montravail/img14.jpeg",
    alt: "Mon travail 14",
    aspect: "aspect-square",
  },
  {
    type: "image",
    src: "/montravail/img15.jpeg",
    alt: "Mon travail 15",
    aspect: "aspect-[4/3]",
  },
  {
    type: "image",
    src: "/montravail/img16.jpeg",
    alt: "Mon travail 16",
    aspect: "aspect-[4/3]",
  },
  // Videos from /public/montravail
  { type: "video", src: "/montravail/video1.mov", aspect: "aspect-[4/3]" },
  { type: "video", src: "/montravail/hometour.mp4", aspect: "aspect-square" },
  {
    type: "video",
    src: "/montravail/laser_VF_vid.mp4",
    aspect: "aspect-square",
  },
];

export default function MonTravailPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#ffffff] via-[#f7f7f7] to-[#ececec] text-black antialiased relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/3 w-[520px] h-[520px] rounded-full blur-3xl bg-gradient-to-br from-gray-900/10 via-gray-700/8 to-transparent"></div>
        <div className="absolute bottom-1/6 right-1/4 w-[420px] h-[420px] rounded-full blur-3xl bg-gradient-to-tr from-gray-800/10 via-gray-600/8 to-transparent"></div>
      </div>

      <section className="relative z-10 py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              Mon travail
            </h1>
            <Link
              href="/"
              className="text-sm md:text-base font-medium text-gray-700 hover:text-black underline underline-offset-4"
            >
              Retour
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-gray-700 text-base md:text-lg">
            Une sélection de vidéos et d&apos;images récentes. Faites défiler
            pour découvrir.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mediaItems.map((item, index) => (
              <MediaCard key={`${item.src}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
