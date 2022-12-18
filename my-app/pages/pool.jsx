import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { useAccount, useSigner, useNetwork } from "wagmi";
import { ethers } from "ethers";

import { getContractInfo, getERC20, getPair } from "../utils/contracts";
import { queryContract } from "../utils/queryContract";

function expandTo18Decimals(n) {
  return ethers.BigNumber.from(n).mul(ethers.BigNumber.from(10).pow(18));
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ pools }) {
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  const { address } = useAccount();

  const [tokenA, setTokenA] = useState("");
  const [tokenB, setTokenB] = useState("");

  const [tokenAQuantity, setTokenAQuantity] = useState("");
  const [tokenBQuantity, setTokenBQuantity] = useState("");

  const [withdrawalQuantity, setWithdrawalQuantity] = useState("");

  async function startUpload() {
    const { addressFactory, abiFactory } = getContractInfo(chain.id);
    const contract = new ethers.Contract(addressFactory, abiFactory, signer);
    await contract.createPair(tokenA, tokenB);
  }

  async function addLiquidity(address0, address1, pairAddress) {
    const { abiERC20 } = getERC20();
    const { abiPair } = getPair();

    const token0 = new ethers.Contract(address0, abiERC20, signer);
    const token1 = new ethers.Contract(address1, abiERC20, signer);
    const pair = new ethers.Contract(pairAddress, abiPair, signer);

    await token0.transfer(pairAddress, expandTo18Decimals(tokenAQuantity), {
      gasLimit: 100000,
    });

    await token1.transfer(pairAddress, expandTo18Decimals(tokenBQuantity), {
      gasLimit: 100000,
    });

    await pair.mint(address, {
      gasLimit: 200000,
    });
  }

  async function removeLiquidity(pairAddress) {
    const { abiPair } = getPair();
    const pair = new ethers.Contract(pairAddress, abiPair, signer);

    await pair.transfer(pair.address, expandTo18Decimals(withdrawalQuantity), {
      gasLimit: 60000,
    });

    await pair.burn(address, {
      gasLimit: 200000,
    });
  }

  return (
    <div className="overflow-hidden bg-orange-400 py-16 px-4 sm:px-6 lg:px-8 lg:py-5 h-screen">
      <div className="relative mx-auto max-w-4xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={1104}
          fill="none"
          viewBox="0 0 404 804"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-black-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={1104}
          fill="none"
          viewBox="0 0 404 1104"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={1104}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black-900 sm:text-4xl">
            Pools
          </h2>
        </div>
        <div className="mx-auto flex justify-center py-2 px-4 sm:px-6">
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <Disclosure as="div" key="Add new pair">
                {({ open }) => (
                  <>
                    <h3>
                      <Disclosure.Button className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-10 py-2 text-base font-medium text-white hover:bg-indigo-700">
                        <span
                          className={classNames(
                            open ? "text-indigo-200" : "text-white",
                            "text-sm font-medium"
                          )}
                        >
                          Add new pair
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon
                              className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusIcon
                              className="block h-6 w-6 text-gray-900 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="number"
                          className="block text-center font-medium text-black-900"
                        >
                          Cryptocurrency
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                              Cryptocurrency
                            </label>
                          </div>
                          <input
                            type="text"
                            name="number"
                            id="number"
                            onChange={(event) => setTokenA(event.target.value)}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 pl-25 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="0x..."
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="number"
                          className="block text-center font-medium text-black-900"
                        >
                          Cryptocurrency
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                              Cryptocurrency
                            </label>
                          </div>
                          <input
                            type="text"
                            name="number"
                            id="number"
                            onChange={(event) => setTokenB(event.target.value)}
                            className="block w-full rounded-md border-gray-300 py-3 px-4 pl-25 focus:border-indigo-500 focus:ring-indigo-500"
                            placeholder="0x..."
                          />
                        </div>
                      </div>
                      <div className="mt-9 flex lg:mt-2 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                          <a
                            onClick={() => startUpload()}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
                          >
                            Add
                          </a>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-gray-200 shadow xl:p-6">
          <ul
            role="list"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2"
          >
            {pools &&
              pools.map((pool) => (
                <li
                  key={pool.pairAddress}
                  className="col-span-1 rounded-lg bg-white shadow"
                >
                  <div className="flex w-full items-center justify-between space-x-6 p-5 ">
                    <div className="flex-1 ">
                      <h3 className="flex items-center space-x-3  text-sm font-medium  text-gray-900">
                        {pool.token0Name}
                      </h3>
                      <h3 className="block items-center space-x-3  text-sm font-medium text-gray-500">
                        {pool.token0Address}
                      </h3>
                      <h3 className=" flex items-center space-x-3  text-sm font-medium text-gray-900">
                        {pool.token1Name}
                      </h3>
                      <h3 className="block items-center space-x-3  text-sm font-medium text-gray-500">
                        {pool.token1Address}
                      </h3>
                      <h3 className="block items-center space-x-3  text-sm font-medium text-gray-900">
                        Total Supply: {pool.totalSupply}
                      </h3>
                    </div>
                  </div>

                  <div className="-mt-px flex divide-x divide-gray-300">
                    <div className="flex w-0 flex-1">
                      <Disclosure as="div" key="Add new pair">
                        {({ open }) => (
                          <>
                            <h3>
                              <Disclosure.Button className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600  px-1 py-2 text-base font-medium text-white hover:bg-green-700 sm:ml-14">
                                <span
                                  className={classNames(
                                    open ? "text-green-200" : "text-white",
                                    "text-sm font-bold"
                                  )}
                                >
                                  Add
                                </span>
                                <span className="ml-5 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="block h-6 w-6 text-gray-900 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel
                              as="div"
                              className="prose prose-sm pb-6"
                            >
                              <div className="relative mt-1 ml-1 mr-1 rounded-md shadow-sm sm:col-span-2">
                                <input
                                  type="text"
                                  name="number"
                                  id="number"
                                  onChange={(event) =>
                                    setTokenAQuantity(event.target.value)
                                  }
                                  className="block w-full rounded-md border-gray-300 py-3 px-4 pl-25 focus:border-indigo-500 focus:ring-indigo-500"
                                  placeholder="1"
                                />

                                <input
                                  type="text"
                                  name="number"
                                  id="number"
                                  onChange={(event) =>
                                    setTokenBQuantity(event.target.value)
                                  }
                                  className="block w-full rounded-md border-gray-300 py-3 px-4 pl-25 focus:border-indigo-500 focus:ring-indigo-500"
                                  placeholder="1"
                                />
                              </div>

                              <div className="ml-2 mt-2 inline-flex justify-center rounded-md shadow lg:flex-shrink-0">
                                <a
                                  onClick={() =>
                                    addLiquidity(
                                      pool.token0Address,
                                      pool.token1Address,
                                      pool.pairAddress
                                    )
                                  }
                                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                  Add
                                </a>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <Disclosure as="div">
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-1 py-2 text-base font-medium text-white hover:bg-indigo-700 sm:ml-14">
                              <span
                                className={classNames(
                                  open ? "text-indigo-200" : "text-white",
                                  "text-sm font-bold"
                                )}
                              >
                                Remove
                              </span>
                              <span className="ml-0 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="block h-6 w-6 text-gray-900 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>

                            <Disclosure.Panel
                              as="div"
                              className="prose prose-sm pb-6"
                            >
                              <div className="relative mt-1 ml-1 mr-1 rounded-md shadow-sm sm:col-span-2">
                                <input
                                  type="text"
                                  name="number"
                                  id="number"
                                  onChange={(event) =>
                                    setWithdrawalQuantity(event.target.value)
                                  }
                                  className="block w-full rounded-md border-gray-300 py-3 px-4 pl-25 focus:border-indigo-500 focus:ring-indigo-500"
                                  placeholder="1"
                                />
                              </div>
                              <div className="ml-2 mt-2 lg:flex-shrink-0 inline-flex rounded-md shadow">
                                <a
                                  onClick={() =>
                                    removeLiquidity(pool.pairAddress)
                                  }
                                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
                                >
                                  Add
                                </a>
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //const res = await fetch("https://xrc-swap.vercel.app/api/maticmum/");
  const pools = await queryContract();
  //const pools = await res.json();

  return {
    props: {
      pools,
    },
    revalidate: 10,
  };
}
