import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <main className="relative py-0">
      <Hero />

      <div className="absolute hidden bottom-0 right-0 lg:flex gap-2 justify-center items-center text-muted-foreground p-2 rounded-tl-lg border-primary shadow-md border-t-2 border-l-2">
        <p className="text-white/60 text-sm">Check out the project on GitHub</p>
        <iframe
          className="bg-transparent dark:bg-transparent"
          width={80}
          height={20}
          title="Star Roommates on GitHub"
          frameBorder="0"
          src="https://ghbtns.com/github-btn.html?user=brodymacfarlane&repo=roommates-webapp&type=star&count=true&v=2"
        />
      </div>
    </main>
  )
}
