import Image from 'next/image'
import { Boxes, CreditCard, Users, BriefcaseBusiness } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      name: 'CRM',
      tagline: 'Customer Relationship Management',
      url: 'crm.sys.capital',
      color: '#0ea5e9', // sky-500
      Icon: Users,
      image:
        'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'ERP',
      tagline: 'Enterprise Resource Planning',
      url: 'erp.sys.capital',
      color: '#22c55e', // green-500
      Icon: Boxes,
      image:
        'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'POS',
      tagline: 'Point of Sale Systems',
      url: 'pos.sys.capital',
      color: '#f59e0b', // amber-500
      Icon: CreditCard,
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=60',
    },
    {
      name: 'HR',
      tagline: 'Human Resources Management',
      url: 'hr.sys.capital',
      color: '#a855f7', // purple-500
      Icon: BriefcaseBusiness,
      image:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=60',
    },
  ] as const

  return (
    <section
      id="software"
      className="bg-white dark:bg-black min-h-screen px-6 sm:px-8 py-24 sm:py-28 md:py-32 text-black dark:text-white select-text"
    >
      <div className="max-w-6xl mx-auto text-center space-y-16 sm:space-y-24 md:space-y-32">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight leading-[1.05]">
          OUR <br /> SOFTWARE <br /> SOLUTIONS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {solutions.map(({ name, tagline, url, color, Icon, image }) => (
            <a
              key={name}
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${name} solution page`}
              className="group relative isolate overflow-hidden rounded-2xl ring-1 ring-gray-200 dark:ring-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
              style={{
                // provide a slight tinted ring on hover via CSS var
                // fallback ring handled by classes above
              }}
            >
              <Image
                src={image}
                alt={`${name} illustrative background`}
                width={800}
                height={600}
                priority={false}
                className="absolute inset-0 size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="relative flex flex-col justify-end h-64 sm:h-72 md:h-80 p-5 sm:p-6 text-left">
                <div
                  className="mb-4 inline-flex size-10 items-center justify-center rounded-full shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="size-5 text-white" aria-hidden="true" />
                </div>

                <div className="uppercase font-black tracking-widest text-white text-2xl sm:text-3xl">
                  {name}
                </div>
                <div className="text-white/80 text-sm sm:text-base font-light tracking-normal">
                  {tagline}
                </div>
                <div className="mt-3 text-[11px] sm:text-xs font-medium tracking-wide text-white/80 lowercase">
                  {url}
                </div>

                <div
                  className="mt-5 h-1 w-16 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
