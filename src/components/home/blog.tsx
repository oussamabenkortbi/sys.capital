const posts = [
  { title: 'How CRM Software Boosts Customer Loyalty', date: 'Sep 10, 2025' },
  { title: 'Top ERP Trends to Watch in 2026', date: 'Sep 1, 2025' },
  { title: 'Choosing the Right POS Hardware for Your Store', date: 'Aug 22, 2025' }
]

const BlogHighlights = () => {
  return (
    <section className="bg-gray-50 dark:bg-black py-24 px-6 max-w-6xl mx-auto text-black dark:text-white select-text">
      <h2 className="text-7xl font-extrabold uppercase tracking-tight mb-20 text-center">
        FROM OUR BLOG
      </h2>
      <ul className="space-y-12 text-center">
        {posts.map(({ title, date }, i) => (
          <li key={i} className="group cursor-pointer">
            <p className="text-4xl font-black uppercase tracking-widest mb-2 group-hover:opacity-80 transition-opacity">{title}</p>
            <p className="font-light tracking-wide uppercase opacity-60 dark:opacity-70">{date}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogHighlights
