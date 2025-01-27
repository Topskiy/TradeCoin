import Link from "next/link";
import Image from "next/image";

const myLoader = ({ src, width }) => {
  return `https://www.interactivebrokers.com/images/web/${src}?w=${width}&q=${75}`;
};

export default function Index() {
  return (
    <div>
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-300 to-fuchsia-800">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-48">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">XRC-Swap</span>{" "}
                </h1>
                <p className="mt-3 text-base text-black sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  <strong>
                  XRC-Swap provides DeFi tools for token holders & businesses
                    to buy, trade, create, and secure crypto assets with
                    confidence.
                  </strong>
                </p>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/pool"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Pool
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/exchange"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Exchange
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          src="cryptocurrency-hero.jpg"
          alt=""
          width="600"
          height="600"
          loader={myLoader}
        />
      </div>
      <div className="isolate bg-gradient-to-tl">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-32  sm:pb-40">
              <div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    How does it{" "}
                    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 ">
                      Work?
                    </span>
                  </h1>

                  <p className="mt-6 text-lg leading-8 text-gray-900 sm:text-center">
                    <strong>
                    XRC-Swap provides DeFi tools for token holders &
                      businesses to buy, trade, create, and secure crypto assets
                      with confidence.
                    </strong>
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <Link
                      href="/exchange"
                      className="inline-block rounded-lg bg-indigo-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-500 hover:bg-indigo-700 hover:ring-indigo-700"
                    >
                      Exchange{" "}
                      <span className="text-indigo-200" aria-hidden="true">
                        &rarr;
                      </span>
                    </Link>
                    <a
                      href="https://youtu.be/4Ft4wfPhjNw"
                      className="inline-block bg-pink-500 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-pink-500 hover:bg-pink-700 hover:ring-pink-700"
                    >
                      Live demo video{" "}
                      <span className="text-gray-900" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="mt-1 relative overflow-hidden  flex items-center justify-center">
                  <Image
                    alt=""
                    src="/photo1.jpg"
                    width="340"
                    height="340"
                    className="justify-center flex items-center"
                  />
                </div>
                <div>
                  <div className="mt-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                      <strong>Pool</strong>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                      <strong>What Is an</strong>
                      <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                        {" "}
                        Automated Market Maker?
                      </span>
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-900 sm:text-center">
                      <strong>
                        Automated market makers incentivize users to become
                        liquidity providers in exchange for a share of
                        transaction fees and free tokens.
                      </strong>
                    </p>

                    <div className="mt-3 relative overflow-hidden  flex items-center justify-center">
                      <Image
                        alt=""
                        src="/photo5.jpg"
                        width="350"
                        height="350"
                        className="justify-center flex items-center"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-3 flex gap-x-4 sm:justify-center">
                      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                          <span className="text-gray-900 ">
                            <Link
                              href="/pool"
                              className="font-semibold  text-white"
                            >
                              View our pool
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                      Token Exchange
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                      <strong>Do you want to</strong>
                      <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                        {" "}
                        exchange cryptocurrency?
                      </span>
                    </p>

                    <div className="mt-4 relative overflow-hidden  flex items-center justify-center">
                      <Image
                        alt=""
                        src="/photo3.jpg"
                        width="340"
                        height="350"
                        className="justify-center flex items-center"
                      />
                    </div>
                    <div className="mt-3 flex gap-x-4 sm:justify-center">
                      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                          <span className="text-gray-900">
                            <Link
                              href="/exchange"
                              className="font-semibold text-white"
                            >
                              View our Exchange
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mt-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                      <strong>Application instruction</strong>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                      <strong>
                        Faced with the fact that you do not know how to
                      </strong>
                      <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                        {" "}
                        use the application?
                      </span>
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-900 sm:text-center">
                      <strong>
                        Then you can watch the video below. It clearly shows you
                        how to use it.
                      </strong>
                    </p>

                    <div className="mt-4 relative overflow-hidden  flex items-center justify-center">
                      <div className="flex justify-center">
                        <iframe
                          width="600"
                          height="350"
                          src="https://www.youtube.com/embed/OlRdaxTm9N0?autoplay=1&mute=1"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen"
                        />
                      </div>
                    </div>
                    <p className="mt-4 mb-9 text-lg leading-8 text-gray-900 sm:text-center">
                      <strong>
                        How to use XRC-Swap: Unlock liquidity with TradeCoin -
                        empowering decentralized finance
                      </strong>
                    </p>
                  </div>
                </div>

                <div>
                  <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Blog
                  </h1>
                  <p className="mt-4 text-lg leading-8 text-black sm:text-center">
                    <strong>Interested in reading about </strong>

                    <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                      automated market makers and XRC-Swap.
                    </span>
                  </p>
                  <div className="mt-3 relative overflow-hidden  flex items-center justify-center">
                    <Image
                      alt=""
                      src="/photo6.jpg"
                      width="350"
                      height="350"
                      className="justify-center flex items-center"
                    />
                  </div>

                  <div
                    className="mt-5
                     flex gap-x-4 sm:justify-center"
                  >
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-gray-900">
                          <Link
                            href="/blogs"
                            className="font-semibold text-white"
                          >
                            View our blog
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-5xl">
                    Contact us
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-black sm:text-center">
                    <strong>Do you want to</strong>
                    <span className="font-extrabold  text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 sm:text-center">
                      {" "}
                      contact us?
                    </span>
                  </p>
                  <p className="mt-3 text-lg leading-8 text-gray-900 sm:text-center">
                    <strong>
                      Go to the tab and write to us, we will be very happy
                    </strong>
                  </p>

                  <div className="mt-4 relative overflow-hidden  flex items-center justify-center">
                    <Image
                      alt=""
                      src="/photo4.jpg"
                      width="350"
                      height="350"
                      className="justify-center flex items-center"
                    />
                  </div>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                      <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 bg-gradient-to-br from-pink-400 to-red-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        <span className="text-gray-600">
                          {" "}
                          <Link
                            href="/contact"
                            className="font-semibold text-white"
                          >
                            Contact us
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
