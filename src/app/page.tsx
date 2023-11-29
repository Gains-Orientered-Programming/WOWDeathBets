"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative min-h-[3.75rem] p-[3.75rem] block">
        <div className="overflow-hidden h-[500px] absolute left-0 top-0 bottom-0 w-full ">
          <div className="w-full h-full relative block">
            <video
              className="object-cover object-center relative w-full h-full blur-md overflow-clip"
              src="/headerVideo.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
        </div>
        <div className="relative flex items-center justify-center max-w-[105rem] h-[55vh] min-h-[31.25rem] my-0 mx-auto">
          <div className="absolute left-0 top-0 bottom-0 w-full h-full block">
            <video
              className="object-cover object-center relative w-full h-full overflow-clip"
              src="/headerVideo.mp4"
              autoPlay
              muted
              loop
            ></video>
          </div>
          <div className="absolute inset-1 pointer-events-none mr-5">
            <canvas
              width={1193}
              height={523}
              style={{
                height: "523.047px",
                top: "-12.047px",
                left: "8px",
              }}
              className="absolute block border w-full overflow-hidden border-stone-700"
            />
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: "url(/lort.png)" }}
        className="-mt-[128px] h-[700px] relative py-[200px] px-[0px] -z-10"
      >
        <div className="w-full">
          <div className="flex flex-col w-full items-center gap-5">
            <h1 className="text-6xl font-bold">HIGHEST BOUNTIES</h1>
            <div className="w-1/2 flex mt-5 flex-row justify-between">
              <BountyPanel />
              <BountyPanel />
              <BountyPanel />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: "url(/habibi.jpg)",
        }}
        className="h-[850px] bg-cover bg-top bg-no-repeat w-full"
      >
        <div className="w-full flex pt-[135px] px-[60px] justify-end">
          <div className="text-center">
            <h1 className="text-6xl font-bold">READ ABOUT DEATHBETS</h1>
            <div className="flex flex-row gap-3 mt-5">
              <div className="w-[400px] h-[400px] bg-neutral-800">
                <h1>Rules</h1>
              </div>
              <div className="w-[400px] h-[400px] bg-neutral-800">
                <h1></h1>
              </div>
              <div className="w-[400px] h-[400px] bg-neutral-800">f</div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen">
        <div className="w-full flex justify-center mt-10">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-6xl font-bold">HOW TO USE DEATHBETS?</h1>
            <div className="w-[700px] h-[500px] bg-neutral-800 p-5 flex flex-col gap-5">
              <div className="flex flex-row gap-5">
                <div className="rounded-full bg-neutral-500 flex items-center justify-center h-10 w-10">
                  1
                </div>
                <div>
                  <h3 className="text-2xl">Create a Bounty</h3>
                  <span className="text-lg">
                    Create a bounty on a character of your choice on the
                    webside.
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="rounded-full bg-neutral-500 flex items-center justify-center w-10 h-10">
                  2
                </div>
                <div>
                  <h3 className="text-2xl">Send Gold</h3>
                  <div className="flex flex-col">
                    <span className="text-lg">
                      Send the amount of gold requested to requested
                      characterName.
                    </span>
                    {
                      "(sending the wrong amount will result in gold sendback and bet reverded)"
                    }
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="rounded-full bg-neutral-500 flex items-center justify-center w-10 h-10">
                  3
                </div>
                <div>
                  <h3 className="text-2xl">Transaction</h3>
                  <div className="flex flex-col">
                    <span className="text-lg">
                      When deathbets has received the gold, the bounty will be
                      placed and you will be able to see it on the website.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const BountyPanel = () => {
  return (
    <div className="w-[220px] h-[220px] bg-neutral-800 border border-neutral-900 flex flex-col p-2 rounded-t">
      <div>
        <Image
          src={"/races/race_human_female.jpeg"}
          className="rounded"
          alt="character image"
          width={50}
          height={50}
        />
        <hr className="mt-2" />
        <div className="flex flex-col">
          <h3>Petrice</h3>
          <span>Class: Warrior</span>
          <span>Lvl: 42</span>
          <span>Bounty: 10000</span>
          <span>Total Hunters: 20</span>
          <div className="flex flex-row items-center gap-1">
            <span>Status: Alive</span>
            <div className="rounded-full w-3 h-3 bg-green-400">
              <div className="rounded-full w-3 h-3 bg-green-400 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
