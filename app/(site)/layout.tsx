import { Navigation } from '@/components/navigation'
import Footer from '@/components/footer'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      <Navigation />
      <main className="container mx-auto px-4 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
