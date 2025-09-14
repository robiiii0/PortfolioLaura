"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, cubicBezier, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const firstName = "Laura";
  const lastName = "Gaultier";
  const jobTitle = "Community Manager";
  const photoSrc = "/laura/image2.jpg";

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxLabel, setLightboxLabel] = useState<string | null>(null);

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc(null);
    setLightboxLabel(null);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const nameContainer: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.35,
      },
    },
  };

  const nameItem: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const jobTitleItem: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const posts = [
    {
      id: 1,
      title: "Taux de conversion multiplié par 2",
      href: "#",
      description:
        "Grâce à l'accompagnement de Laura, nous avons doublé notre taux de conversion en quelques mois. Sa stratégie et son suivi ont été déterminants pour notre croissance.",
      date: "16 mars 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-fondateur / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Visibilité accrue et ventes en hausse",
      href: "#",
      description:
        "Laura a su optimiser notre présence en ligne et générer plus d'engagement. Résultat : une augmentation significative de nos ventes et une communauté plus active.",
      date: "10 mars 2020",
      datetime: "2020-03-10",
      category: { title: "Ventes", href: "#" },
      author: {
        name: "Lindsay Walton",
        role: "Développeuse front-end",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Expérience client améliorée",
      href: "#",
      description:
        "L'approche humaine et personnalisée de Laura a transformé notre relation client. Nos membres sont plus engagés et satisfaits que jamais.",
      date: "12 février 2020",
      datetime: "2020-02-12",
      category: { title: "Business", href: "#" },
      author: {
        name: "Tom Cook",
        role: "Directeur produit",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const stats = [
    { id: 1, name: " de vues cumulées", value: "+ 5 Millions" },
    { id: 2, name: "Projets réalisés", value: "> 10 " },
    { id: 3, name: "de visibilité en moyenne sur un compte", value: "+ 250 %" },
  ];

  // Animated number component for stats

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 text-black antialiased relative overflow-hidden">
      {/* Global polygon background (hidden under hero) */}
      <div
        aria-hidden
        className="polygons-fixed bg-polygons pointer-events-none"
      ></div>

      {/* Hero Section - Full Screen */}
      <section className="h-screen flex items-start  lg:items-center pt-24 lg:pt-0 justify-center relative z-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center h-full ">
            {/* Left: Large centered photo */}
            <div className="w-full order-1 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative mx-auto aspect-[3/4] w-full max-w-[480px] sm:max-w-[560px] lg:max-w-none lg:h-[70vh] lg:aspect-auto overflow-hidden rounded-xl shadow-xl shadow-black/10 ring-1 ring-gray-200 bg-gray-100"
              >
                <Image
                  src={photoSrc}
                  alt={`Portrait of ${firstName} ${lastName}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>

            {/* Right: First and last name on separate lines */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
              <motion.h1
                initial="hidden"
                animate="show"
                variants={nameContainer}
                className="font-sans font-bold tracking-tight leading-none md:leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                <motion.span variants={nameItem} className="block text-black">
                  {firstName}
                </motion.span>
                <motion.span variants={nameItem} className="block text-black">
                  {lastName}
                </motion.span>
                <motion.span
                  variants={jobTitleItem}
                  className="block text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mt-3 lg:mt-2"
                >
                  {jobTitle}
                </motion.span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (clickable) */}
        <motion.div
          className="absolute bottom-8 left-1/2 animate-bounce transform -translate-x-1/2 text-gray-500 text-sm font-medium"
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link
            href="#about"
            className="flex flex-col items-center space-y-2 cursor-pointer group"
          >
            <span className="group-hover:text-gray-700 transition-colors">
              Scroll down
            </span>
            <motion.div
              className="w-5 h-5 border-b-2 border-r-2 border-gray-400 transform rotate-45 group-hover:border-gray-600"
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden scroll-mt-16"
      >
        {/* Background abstract shapes removed for pure white */}

        <div className="container mx-auto max-w-7xl px-6 relative z-10 space-y-20">
          {/* Row 1: Images Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image Grid */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-2 gap-6 relative"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                  className="col-span-2 aspect-[4/3] rounded-2xl shadow-xl overflow-hidden bg-gray-200"
                >
                  <video
                    src="/apropos/49ef3ac4dc8a4f1c80a466e876c86920.mov"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
                  className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-200 -mt-4 ml-8 relative z-10"
                >
                  <video
                    src="/apropos/video1.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6, ease: "easeInOut" }}
                  className="aspect-square rounded-2xl shadow-lg overflow-hidden bg-gray-200 -mt-4 mr-8 relative z-10"
                >
                  <video
                    src="/apropos/video3.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black"
              >
                À propos
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700 text-justify tracking-tight"
              >
                <p>
                  Passionnée par la création de communautés engagées et
                  authentiques, je mets mon expertise au service
                  d&apos;organisations qui souhaitent développer des relations
                  durables avec leurs membres.
                </p>
                <p>
                  Avec plus de 8 ans d&apos;expérience dans la gestion de
                  communautés en ligne et hors ligne, j&apos;ai accompagné des
                  startups, des entreprises établies et des organisations à but
                  non lucratif dans la construction de communautés florissantes.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Row 2: Text Left, Images Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-black"
              >
                Mon approche
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700 text-justify tracking-tight"
              >
                <p>
                  Mon approche combine stratégie, créativité et authenticité
                  pour créer des espaces où chaque membre se sent valorisé et
                  connecté.
                </p>
                <p>
                  Je crois en la puissance des relations humaines authentiques
                  et m&apos;efforce de créer des environnements où la
                  collaboration et l&apos;échange peuvent s&apos;épanouir
                  naturellement.
                </p>
              </motion.div>
            </div>

            {/* Right: Image Grid */}
            <div className="relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-full"
              >
                {/* Image - Full Width */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
                  className="w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden bg-gray-200"
                >
                  <Image
                    src="/monapproche/IMG_2895.jpeg"
                    alt="Laura with community members"
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Results: Four impact screens with stats */}
          <div className="mt-16 md:mt-24 space-y-12 md:space-y-14">
            <h2 className="text-center text-base/7 font-semibold text-indigo-600">
              Mais pourquoi moi ?
            </h2>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center"
            >
              Des résultats concrets
            </motion.h3>
            <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg tracking-tight text-gray-950 font-bold max-lg:text-center">
                      Professionnalisme
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      J&apos;accompagne chaque client avec rigueur et
                      transparence, en mettant l&apos;accent sur la qualité du
                      suivi et la clarté des échanges. Mon objectif : garantir
                      des résultats concrets et une expérience professionnelle
                      irréprochable.
                    </p>
                  </div>
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                      <video
                        src="resultats/video.mov"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
              </div>
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center">
                      Performance
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Chaque projet est optimisé pour maximiser
                      l&apos;engagement et la visibilité.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <Image
                      alt=""
                      width={320}
                      height={240}
                      sizes="20rem"
                      src="/resultats/performance.png"
                      className="w-full max-lg:max-w-xs rounded-4xl mt-2"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl" />
              </div>
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center">
                      Ambition
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Je vise toujours plus haut pour mes clients :
                      développement de nouveaux concepts, adaptation aux
                      tendances, et recherche constante d’innovation pour faire
                      grandir chaque communauté.
                    </p>
                  </div>
                  <div className="@container flex flex-1 items-center justify-center max-lg:py-6 lg:pb-2">
                    <div className="relative w-11/12 h-full min-h-[152px]">
                      <Image
                        src="/resultats/DSC02754.jpeg"
                        alt="Ambition"
                        fill
                        className="object-cover object-[0%_20%] rounded-t-2xl mt-4"
                        sizes="(min-width: 1024px) 40vw, 90vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
              </div>
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center">
                      Adaptabilité
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Mon approche flexible permet de répondre aux besoins
                      spécifiques de chaque client, même dans des environnements
                      en constante évolution.
                    </p>
                  </div>
                  <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden  rounded-tl-[12cqw] border-x-[3cqw] border-t-[3cqw] border-white bg-gray-900 shadow-2xl">
                      <video
                        src="resultats/IMG_9185.mov"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for results */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-[101] inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-black w-9 h-9 shadow"
            >
              ✕
            </button>

            <div className="relative w-full h-[75vh] md:h-[85vh] rounded-xl overflow-hidden">
              {lightboxSrc && (
                <>
                  {/* Blurred background to avoid black bars while preserving image integrity */}
                  <Image
                    src={lightboxSrc}
                    alt=""
                    fill
                    className="object-cover blur-2xl scale-110 opacity-60"
                    sizes="100vw"
                    aria-hidden
                  />
                  {/* Foreground image: keep full image visible */}
                  <Image
                    src={lightboxSrc}
                    alt={lightboxLabel ?? "Agrandissement"}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="100vw"
                  />
                </>
              )}
            </div>
            {lightboxLabel && (
              <div className="mt-3 text-center text-white/90 text-sm">
                {lightboxLabel}
              </div>
            )}
          </motion.div>
        </div>
      )}

      {/* Avant/Après - Section comparatif compte */}
      <section className="py-24 bg-gradient-to-bl from-blue-100 via-white to-blue-50 rounded-2xl relative overflow-hidden">
        {/* Removed floating gradient background shape for neutral wood look */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* AVANT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="rounded-3xl border-2 border-transparent  backdrop-blur-xl shadow-xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="text-lg md:text-4xl font-extrabold tracking-wide mb-6 text-gray-900">
                AVANT
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative w-full h-full min-h-[350px] md:min-h-[480px] aspect-[4/5] flex items-center justify-center overflow-hidden rounded-2xl group-hover:shadow-2xl transition-all duration-300 bg-gray-100"
                >
                  <Image
                    src="/avantapres/0shots_so.png"
                    alt="Compte avant"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </motion.div>
                <ul className="space-y-3 text-gray-800  text-base md:text-lg leading-relaxed self-center">
                  {[
                    "2.840 abonnés",
                    "pas d’engagement",
                    "pas de stratégie",
                    "pas de vente",
                    "Feed pas attractif",
                    "contenu pas authentique",
                    "aucune communauté",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* APRÈS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="rounded-3xl border-2 border-transparent bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-12 relative overflow-hidden group"
            >
              <div className="text-lg md:text-4xl font-extrabold tracking-wide mb-6 text-gray-900">
                APRÈS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="relative w-full h-full min-h-[350px] md:min-h-[480px] aspect-[4/5] flex items-center justify-center overflow-hidden rounded-2xl group-hover:shadow-2xl transition-all duration-300 bg-gray-100"
                >
                  <Image
                    src="/avantapres/810shots_so.png"
                    alt="Compte après"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl"
                    sizes="(min-width: 1024px) 40vw, 90vw"
                  />
                </motion.div>
                <ul className="space-y-3 text-gray-800 text-base md:text-lg leading-relaxed self-center">
                  {[
                    "3.500 abonnés",
                    "Création d’une communauté",
                    "Transformation du feed",
                    "humanisation",
                    "stratégie concrète",
                    "Visibilité +",
                    "cible définie",
                    "création de contenu varié",
                    "développement des partenariat",
                    "concept innovant",
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className=" font-bold"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats - Minimal grid */}
      <div className="">
        <section className="relative py-32 ">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Mais qu&apos;en disent les chiffres ?
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-3xl md:text-4xl lg:text-5xl mt-12 font-bold text-black text-center"
          >
            Mon historique
          </motion.h3>
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <div className=" py-8 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Des retours sur mon travail
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Découvrez quelques témoignages de clients satisfaits par mon
                travail.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {post.category.title}
                    </p>
                  </div>
                  <div className="group relative grow">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <p>
                        <span className="absolute inset-0" />
                        {post.title}
                      </p>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                    <Image
                      alt=""
                      src={post.author.imageUrl}
                      width={40}
                      height={40}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* CTA: Mon travail */}
        <section className="py-24 relative overflow-hidden ">
          <div className="container mx-auto max-w-5xl px-6 relative z-10">
            <div className="rounded-3xl border border-gray-200/70 bg-white/70 backdrop-blur-xl shadow-xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black">
                Découvrez mon travail
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                Vidéos, images et extraits de projets. Parcourez une sélection
                de contenus.
              </p>
              <div className="mt-8">
                <Link
                  href="/mon-travail"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-black hover:bg-gray-900 transition-colors shadow-lg shadow-black/10"
                >
                  Mon travail
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
