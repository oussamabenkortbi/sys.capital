const FeaturedProducts = () => {
  const products = [
    { name: 'BUSINESS COMPUTERS', price: 'FROM 45,000 DA', details: 'Intel Core i5/i7 | 8GB+ RAM | SSD Storage | Warranty' },
    { name: 'THERMAL PRINTERS', price: 'FROM 15,000 DA', details: 'USB, Fast Printing, Auto-cutter, Easy Setup' },
    { name: 'POS HARDWARE BUNDLES', price: 'FROM 85,000 DA', details: 'Touch Screen, Cash Drawer, Scanner, Complete Set' }
  ]

  return (
    <section id="products" className="bg-white dark:bg-black py-32 px-6 text-black dark:text-white select-text">
      <div className="max-w-6xl mx-auto space-y-24">
        {products.map(({ name, price, details }, i) => (
          <article 
            key={i} 
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <h2 className="flex-1 text-7xl md:text-8xl font-extrabold tracking-tight leading-none">{name}</h2>
            <div className="flex-1 text-right space-y-2">
              <p className="text-4xl font-bold tracking-widest">{price}</p>
              <p className="text-xl uppercase font-light opacity-60 dark:opacity-70 tracking-wide max-w-md">{details}</p>
            </div>
          </article>
        ))}

        <div className="text-center">
          <a 
            href="#store" 
            className="inline-block text-3xl font-bold tracking-widest uppercase border-4 border-black dark:border-white px-12 py-5 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition"
          >
            Visit Store
          </a>
          <p className="mt-4 text-sm font-light opacity-50 dark:opacity-60 uppercase tracking-wide">store.sys.capital</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
