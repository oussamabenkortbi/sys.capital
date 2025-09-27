import { Boxes, Workflow, Building2 } from 'lucide-react'
import { GradientText } from '@/components/typography/gradient-text'

const Footer = () => (
  <footer className="relative bg-black text-white select-text py-16 sm:py-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-14 md:gap-16 text-center md:text-left uppercase font-bold tracking-wide">
      <div>
        <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4">
          <GradientText className="font-extrabold">sys.capital</GradientText>
        </h3>
        <p className="text-xs sm:text-sm font-light tracking-normal opacity-80 dark:opacity-70">
          Empowering Algerian businesses <br /> with software & hardware solutions.
        </p>
        <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-extrabold tracking-widest opacity-40 dark:opacity-50">
          © 2025 sys.capital
        </p>
      </div>
      
      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Boxes className="size-4 text-[hsl(var(--secondary))]" aria-hidden="true" /> SOLUTIONS
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">CRM System</li>
          <li className="hover:opacity-70 transition-opacity">ERP Platform</li>
          <li className="hover:opacity-70 transition-opacity">POS Solution</li>
          <li className="hover:opacity-70 transition-opacity">HR Management</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Workflow className="size-4 text-[hsl(var(--secondary))]" aria-hidden="true" /> SERVICES
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">Web Development</li>
          <li className="hover:opacity-70 transition-opacity">Mobile Apps</li>
          <li className="hover:opacity-70 transition-opacity">Integration</li>
          <li className="hover:opacity-70 transition-opacity">Support</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-4 sm:mb-6 text-base sm:text-lg tracking-widest opacity-80 inline-flex items-center gap-2">
          <Building2 className="size-4 text-[hsl(var(--accent))]" aria-hidden="true" /> COMPANY
        </h4>
        <ul className="space-y-2 sm:space-y-3 font-extrabold text-xs sm:text-sm cursor-pointer">
          <li className="hover:opacity-70 transition-opacity">About Us</li>
          <li className="hover:opacity-70 transition-opacity">Contact</li>
          <li className="hover:opacity-70 transition-opacity">Store</li>
          <li className="hover:opacity-70 transition-opacity">Support</li>
        </ul>
      </div>
    </div>

    <div className="mt-14 sm:mt-16 md:mt-20 text-center text-[10px] sm:text-xs font-light opacity-60 dark:opacity-50">
      Made with <span className="text-red-500">❤️</span> by sys.capital
    </div>
  </footer>
)

export default Footer

