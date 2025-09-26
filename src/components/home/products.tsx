const FeaturedProducts = () => {
  const products = [
    { name: 'BUSINESS COMPUTERS', price: 'FROM 45,000 DA', details: 'Intel Core i5/i7 | 8GB+ RAM | SSD Storage | Warranty' },
    { name: 'THERMAL PRINTERS', price: 'FROM 15,000 DA', details: 'USB, Fast Printing, Auto-cutter, Easy Setup' },
    { name: 'POS HARDWARE BUNDLES', price: 'FROM 85,000 DA', details: 'Touch Screen, Cash Drawer, Scanner, Complete Set' }
  ]

  return (
    <section id="products" className="bg-white dark:bg-black py-24 sm:py-28 md:py-32 px-6 sm:px-8 text-black dark:text-white select-text">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20 md:space-y-24">
        {products.map(({ name, price, details }, i) => (
          <article 
            key={i} 
            className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8"
          >
            <h2 className="flex-1 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-center md:text-left">{name}</h2>
            <div className="flex-1 text-center md:text-right space-y-1 sm:space-y-2">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest">{price}</p>
              <p className="text-base sm:text-lg md:text-xl uppercase font-light opacity-60 dark:opacity-70 tracking-wide max-w-md md:ml-auto mx-auto">{details}</p>
            </div>
          </article>
        ))}

        <div className="text-center">
          <a 
            href="#store" 
            className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-widest uppercase border-2 sm:border-4 border-black dark:border-white px-8 sm:px-12 py-4 sm:py-5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
          >
            Visit Store
          </a>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light opacity-50 dark:opacity-60 uppercase tracking-wide">store.sys.capital</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
