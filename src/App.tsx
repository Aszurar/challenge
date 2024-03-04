import './global.css'

import { AniCard } from './components/AniCard'
import { SideBar } from './components/SideBar'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { WATCH_ANI_COLLECTION } from './storage/storageConfig'

export function App() {
  return (
    <ThemeProvider storageKey={WATCH_ANI_COLLECTION} defaultTheme="system">
      <div className="min-h-screen bg-background lg:grid lg:grid-cols-app antialiased">
        <SideBar />
        <main className="max-w-total px-4 pb-12 pt-24 lg:col-start-2 lg:py-8">
          <header className="flex flex-col gap-6">
            <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
              Top Anime
            </h1>
          </header>
          <section className="mt-8 pb-5 flex flex-wrap gap-6 items-center justify-center">
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
            <AniCard />
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}
