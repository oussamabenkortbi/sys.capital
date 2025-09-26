const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-black py-32 px-6 text-black dark:text-white max-w-4xl mx-auto select-text">
      <h2 className="text-6xl font-extrabold uppercase tracking-tight text-center mb-16">
        GET IN TOUCH
      </h2>
      
      <p className="text-center font-light tracking-wide uppercase opacity-70 dark:opacity-60 mb-24">
        Reach out to us to explore custom software solutions and premium business equipment.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 text-lg leading-relaxed">
        <div className="space-y-8">
          <div>
            <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-2 text-sm">Email</p>
            <p className="font-medium">contact@sys.capital</p>
          </div>
          <div>
            <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-2 text-sm">Phone</p>
            <p className="font-medium">+213 550 89 43 48</p>
          </div>
          <div>
            <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-2 text-sm">Address</p>
            <p className="font-medium">Mohammadia Algiers, Algeria</p>
          </div>
          <div>
            <p className="uppercase tracking-widest opacity-60 dark:opacity-50 mb-2 text-sm">Business Hours</p>
            <p className="font-medium">24/7 Support Available</p>
          </div>
        </div>

        <form className="space-y-8 font-light tracking-wide">
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
            required 
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
            required
          />
          <input 
            type="text" 
            placeholder="Company" 
            className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
          />
          <div className="relative">
            <select 
              className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 bg-transparent appearance-none focus:outline-none focus:ring-0 cursor-pointer pr-8"
              required
              defaultValue="intrest"
            >
              <option value="intrest" disabled hidden>Interest</option>
              <option value="crm">CRM Software</option>
              <option value="erp">ERP System</option>
              <option value="pos">POS Solution</option>
              <option value="hr">HR Management</option>
              <option value="hardware">Hardware & Equipment</option>
              <option value="custom">Custom Development</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <textarea 
            rows={4} 
            placeholder="Your Message" 
            className="w-full border-b-2 border-black dark:border-white/30 text-xl uppercase py-2 resize-none focus:outline-none focus:ring-0 placeholder-black/30 dark:placeholder-white/30 bg-transparent transition-colors"
            required
          ></textarea>

          <button 
            type="submit" 
            className="w-full text-black dark:text-white text-xl font-extrabold uppercase tracking-widest border-4 border-black dark:border-white py-4 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
