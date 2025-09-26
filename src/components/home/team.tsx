const teamMembers = [
  { name: 'Oussama K.', role: 'Founder & CEO' },
  { name: 'Alem B.', role: 'WEB Designer' },
]

const Team = () => {
  return (
    <section className="bg-white dark:bg-black py-24 px-6 max-w-5xl mx-auto text-black dark:text-white select-text">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight mb-14 sm:mb-16 md:mb-20 text-center">
        MEET THE TEAM
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-16 text-center text-lg sm:text-xl font-light tracking-wide">
        {teamMembers.map(({ name, role }, i) => (
          <div key={i} className="space-y-2">
            <p className="uppercase font-black tracking-widest text-2xl sm:text-3xl">{name}</p>
            <p className="uppercase text-sm sm:text-base opacity-60 dark:opacity-70 tracking-wide">{role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
