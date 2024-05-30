import { Header } from '@/components/header'

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1 flex-col p-8">{children}</div>
    </div>
  )
}

export default HomeLayout
