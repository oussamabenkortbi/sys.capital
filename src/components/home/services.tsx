import Image from 'next/image'
import { Code2, Smartphone, Workflow, LifeBuoy } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'WEB DEVELOPMENT',
      sub: 'Custom apps & systems',
      description: 'React, Node.js, API Integration',
      color: '#0ea5e9', // sky-500
      Icon: Code2,
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=60',
    },
    {
      title: 'MOBILE DEVELOPMENT',
      sub: 'iOS & Android apps',
      description: 'React Native, Flutter, Deployment',
      color: '#22c55e', // green-500
      Icon: Smartphone,
      image:
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=60',
    },
    {
      title: 'SYSTEM INTEGRATION',
      sub: 'Connect & automate',
      description: 'API, Data Migration, Workflow',
      color: '#f59e0b', // amber-500
      Icon: Workflow,
      image:
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=1600&q=60',
    },
    {
      title: 'SUPPORT & MAINTENANCE',
      sub: '24/7 expert help',
      description: 'Priority response, updates, training',
      color: '#a855f7', // purple-500
      Icon: LifeBuoy,
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=60',
    },
  ] as const

  return (
    <section id="services" className="bg-white dark:bg-black py-24 sm:py-28 md:py-32 px-6 sm:px-8 text-black dark:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
        {services.map(({ title, sub, description, color, Icon, image }, i) => (
          <article
            key={i}
            className="group relative isolate overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-white dark:focus-within:ring-offset-black"
          >
            <Image
              src={image}
              alt=""
              width={1200}
              height={800}
              className="absolute inset-0 size-full object-cover object-center opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/40 dark:from-black/90 dark:via-black/70 dark:to-black/40" />

            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex size-10 items-center justify-center rounded-full shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="size-5 text-white" aria-hidden="true" />
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">{title}</h2>
              </div>
              <h3 className="mt-3 text-sm sm:text-base md:text-lg font-semibold uppercase tracking-widest text-black/70 dark:text-white/70">{sub}</h3>
              <p className="mt-3 text-base sm:text-lg md:text-xl font-light tracking-wide text-black/70 dark:text-white/70">{description}</p>

              <div
                className="mt-6 h-1 w-16 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
