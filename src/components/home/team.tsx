import Image from 'next/image'
import { UserRound } from 'lucide-react'

const teamMembers = [
  { name: 'Oussama K.', role: 'Founder & CEO' },
  { name: 'Alem B.', role: 'WEB Designer' },
]

const Team = () => {
  return (
    <section className="relative py-24 px-6 sm:px-8 max-w-5xl mx-auto text-black dark:text-white select-text overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/90 dark:from-black dark:via-black/70 dark:to-black/80" />
      <div className="relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-14 sm:mb-16 md:mb-20 text-center">
          MEET THE TEAM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16 text-center text-lg sm:text-xl font-light tracking-wide">
          {teamMembers.map(({ name, role }, i) => {
            const photos = [
              'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1548449112-96a38ad2e6b6?auto=format&fit=crop&w=800&q=60',
              'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=60',
            ] as const
            const photo = photos[i % photos.length]
            return (
              <div key={i} className="space-y-3">
                <div className="relative mx-auto size-28 sm:size-32 rounded-full overflow-hidden ring-2 ring-white/60 dark:ring-black/60">
                  <Image src={photo} alt={name} width={256} height={256} className="size-full object-cover" />
                </div>
                <p className="uppercase font-black tracking-widest text-2xl sm:text-3xl inline-flex items-center justify-center gap-2">
                  <UserRound className="size-5 text-sky-500" aria-hidden="true" /> {name}
                </p>
                <p className="uppercase text-sm sm:text-base opacity-70 tracking-wide">{role}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team

