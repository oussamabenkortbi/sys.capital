import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { src: '/vercel.svg', alt: 'Vercel', href: 'https://vercel.com' },
  { src: '/next.svg', alt: 'Next.js', href: 'https://nextjs.org' },
  { src: '/globe.svg', alt: 'Globe', href: '#' },
  { src: '/file.svg', alt: 'Files', href: '#' },
] as const

const Partners = () => {
  return (
    <section className="relative py-20 px-6 sm:px-8 max-w-7xl mx-auto text-black dark:text-white select-text text-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=60"
        alt="Partners background"
        width={2000}
        height={1200}
        className="absolute inset-0 size-full object-cover object-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/90 dark:from-black/90 dark:via-black/80 dark:to-black/90" />

      <div className="relative tracking-widest uppercase font-black text-2xl sm:text-3xl">
        <h2 className="mb-10 sm:mb-14 md:mb-16 text-5xl sm:text-6xl md:text-7xl">OUR PARTNERS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 items-center">
          {partners.map(({ src, alt, href }) => (
            <Link
              key={alt}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block"
              aria-label={`${alt} website`}
            >
              <div className="mx-auto w-40 h-16 sm:w-48 sm:h-20 md:w-56 md:h-24 relative grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all">
                <Image src={src} alt={alt} fill className="object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
