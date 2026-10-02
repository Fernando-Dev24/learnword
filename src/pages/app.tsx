import { Header } from '#/components/header'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-[90%] md:max-w-5xl container mx-auto my-20 space-y-10">
      <Header />
      {children}
    </main>
  )
}
