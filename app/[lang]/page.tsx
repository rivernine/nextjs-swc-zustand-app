import StoreInitializer from '@/app/[lang]/components/StoreInitializer'
import { useStore } from '@/libs/stores/store'
import { getDictionary } from '@/i18n/get-dictionary'

export default async function Home({ params }: any) {
  const lang = await getDictionary(params.lang)
  const data = {
    title: "main",
    value: 200
  }

  useStore.setState({ title: data.title, value: data.value })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StoreInitializer title={data.title} value={data.value} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <a href={`${params.lang}/sample`}>{lang.routeButton.title}</a>
      </div>
    </main>
  )
}
