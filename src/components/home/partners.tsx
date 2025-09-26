const partners = ['A-VENTURE', 'ALGERIE TELECOM', 'OOREDOO']

const Partners = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-6 max-w-7xl mx-auto text-black dark:text-white select-text text-center tracking-widest uppercase font-black text-3xl">
      <h2 className="mb-16 text-6xl">OUR PARTNERS</h2>
      <div className="flex justify-center flex-wrap gap-20 opacity-70 dark:opacity-80">
        {partners.map((partner) => (
          <span key={partner} className="hover:opacity-100 transition-opacity cursor-default">
            {partner}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Partners
