import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="absolute inset-0 bg-gray-900 text-gray-100">
      <Head>
        <title>Dinner Sandwich</title>
        <meta name="description" content="Dinner. Sandwich." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="relative min-h-full p-6 text-center">
        <div>
          <h1 className="text-6xl md:text-7xl lg:text-9xl mt-24">
            Dinner Sandwich
          </h1>
          <p className="mt-12 md:text-2xl uppercase">It is good sandwich.</p>
          <div className="max-w-md  mx-auto mt-12 text-2xl text-left">
            How to make order Dinner Sandwich:
            <ol className="list-decimal list-inside">
              <li>Say "1" for one sandwich</li>
              <li>Say "2" for two sandwich</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
