export type BlogPost = {
  slug: string
  title: string
  date: string
  image: string
  excerpt: string
  tag: string
  color: string
}

export const posts: BlogPost[] = [
  {
    slug: 'crm-customer-loyalty',
    title: 'How CRM Software Boosts Customer Loyalty',
    date: 'Sep 10, 2025',
    image: 'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1600&q=60',
    excerpt:
      'Practical strategies to leverage CRM for retention, lifecycle marketing, and support excellence.',
    tag: 'CRM',
    color: '#0ea5e9',
  },
  {
    slug: 'erp-trends-2026',
    title: 'Top ERP Trends to Watch in 2026',
    date: 'Sep 1, 2025',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1600&q=60',
    excerpt:
      'From AI forecasting to composable architectures—what modern ERP means for operations.',
    tag: 'ERP',
    color: '#22c55e',
  },
  {
    slug: 'pos-hardware-guide',
    title: 'Choosing the Right POS Hardware for Your Store',
    date: 'Aug 22, 2025',
    image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=1600&q=60',
    excerpt:
      'Receipts, scanners, cash drawers, all-in-ones—make the right trade-offs for reliability.',
    tag: 'POS',
    color: '#f59e0b',
  },
]
