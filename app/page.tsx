import BootSequence from '@/components/BootSequence'
import Contact from '@/components/Contact'
import CrtOverlay from '@/components/CrtOverlay'
import Dossier from '@/components/Dossier'
import Hero from '@/components/Hero'
import RevealObserver from '@/components/RevealObserver'
import StatusBar from '@/components/StatusBar'
import TopBar from '@/components/TopBar'
import Work from '@/components/Work'

export default function Home() {
  return (
    <>
      <CrtOverlay />
      <TopBar />
      <main>
        <Hero />
        <Work />
        <Dossier />
        <Contact />
      </main>
      <StatusBar />
      <RevealObserver />
      <BootSequence />
    </>
  )
}
