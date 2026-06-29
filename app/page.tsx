import BootSequence from '@/components/BootSequence'
import Contact from '@/components/Contact'
import Dossier from '@/components/Dossier'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import RevealObserver from '@/components/RevealObserver'
import Stack from '@/components/Stack'
import TopBar from '@/components/TopBar'
import Work from '@/components/Work'

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Dossier />
        <Stack />
        <Contact />
      </main>
      <RevealObserver />
      <BootSequence />
    </>
  )
}
