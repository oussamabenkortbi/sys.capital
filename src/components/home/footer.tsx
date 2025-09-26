const Footer = () => (
  <footer className="bg-black dark:bg-black text-white select-text py-20 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 text-center md:text-left uppercase font-bold tracking-wide">
      <div>
        <h3 className="text-3xl mb-4">sys.capital</h3>
        <p className="text-sm font-light tracking-normal opacity-80 dark:opacity-70">
          Empowering Algerian businesses <br /> with software & hardware solutions.
        </p>
        <p className="mt-6 text-xs font-extrabold tracking-widest opacity-40 dark:opacity-50">
          © 2025 sys.capital
        </p>
      </div>
      
      <div>
        <h4 className="mb-6 text-lg tracking-widest opacity-80">SOLUTIONS</h4>
        <ul className="space-y-3 font-extrabold text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">CRM System</li>
          <li className="hover:opacity-70 transition-opacity">ERP Platform</li>
          <li className="hover:opacity-70 transition-opacity">POS Solution</li>
          <li className="hover:opacity-70 transition-opacity">HR Management</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-6 text-lg tracking-widest opacity-80">SERVICES</h4>
        <ul className="space-y-3 font-extrabold text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">Web Development</li>
          <li className="hover:opacity-70 transition-opacity">Mobile Apps</li>
          <li className="hover:opacity-70 transition-opacity">Integration</li>
          <li className="hover:opacity-70 transition-opacity">Support</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-6 text-lg tracking-widest opacity-80">COMPANY</h4>
        <ul className="space-y-3 font-extrabold text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">About Us</li>
          <li className="hover:opacity-70 transition-opacity">Contact</li>
          <li className="hover:opacity-70 transition-opacity">Store</li>
          <li className="hover:opacity-70 transition-opacity">Support</li>
        </ul>
      </div>
    </div>

    <div className="mt-20 text-center text-xs font-light opacity-60 dark:opacity-50">
      Made with <span className="text-red-500">❤️</span> by sys.capital
    </div>
  </footer>
)

export default Footer
