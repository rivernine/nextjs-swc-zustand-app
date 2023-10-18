import StoreInitializer from '../components/StoreInitializer';
import ZustandCSRView from '../components/ZustandCSRView';
import ZustandSampleButton from '../components/ZustandSampleButton';
import ZustandSSRView from '../components/ZustandSSRView';
import { useStore } from '@/libs/stores/store';

async function Sample() {

  const data = {
    title: "sample",
    value: 100
  }

  useStore.setState({ title: data.title, value: data.value })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <StoreInitializer title="sample" value={100} />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ZustandSSRView />
        <ZustandCSRView />
        <ZustandSampleButton />
      </div>
    </main>
  )
}

export default Sample;