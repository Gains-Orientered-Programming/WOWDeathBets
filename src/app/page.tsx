import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getHighestBettings } from "src/api/betting-services";
import { getCharacterProfile } from "src/api/blizzard-service/characterProfile";
import { Betting } from "src/types/betting-service.t";
import { wowClassColors } from "src/utils/wowClassColors";

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
        <DeathBetsBountySection />
      </section>
      <section
        style={{
          backgroundImage: "url(/habibi.jpg)",
        }}
        className="h-[850px] bg-cover bg-top bg-no-repeat w-full"
      >
        <DeathBetesReadAboutSection />
      </section>
      <section className="h-screen mt-20">
        <DeathBetsToturialSection />
      </section>
    </div>
  );
}

const DeathBetsBountySection = async () => {
  const bettings = await getHighestBettings();

  return (
    <div className="w-full">
      <div className="flex flex-col w-full items-center gap-5">
        <h1 className="text-6xl font-bold">HIGHEST BOUNTIES</h1>
        <div className="w-2/3 flex mt-5 flex-row justify-between">
          {bettings.data.map((betting) => (
            <BountyPanel key={betting.userId} betting={betting} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BountyPanel = async ({ betting }: { betting: Betting }) => {
  const characterProfile = await getCharacterProfile({
    characterName: betting.characterName,
    realm: betting.realm,
    region: betting.region,
  });

  return (
    <div className="w-[320px] h-auto bg-neutral-800 border border-neutral-900 flex flex-col p-2 rounded">
      <Link
        href={`/characters/${betting.region}/${betting.realm}/${betting.characterName}`}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            src={`/races/race_${characterProfile.race.name}_${characterProfile.gender.name}.jpeg`}
            className="rounded"
            alt="character image"
            width={50}
            height={50}
          />
          <h3
            style={{
              color: wowClassColors(characterProfile.character_class.name),
            }}
            className="font-bold text-xl"
          >
            {betting.characterName}
          </h3>
        </div>
        <hr className="mt-2" />
        <div className="flex flex-col text-lg p-1 gap-2">
          <span>
            <span className="font-medium">Class:</span>{" "}
            {characterProfile.character_class.name}
          </span>
          <span>
            <span className="font-medium">Level:</span> {characterProfile.level}
          </span>
          <span>
            <span className="font-medium">Total Bounty:</span> {betting.amount}
          </span>
          <div className="flex flex-row items-center gap-1">
            <span>
              <span className="font-medium">Status:</span>{" "}
              {characterProfile.is_ghost ? "Dead" : "Alive"}
            </span>
            <div
              className={
                "rounded-full w-3 h-3 " +
                (characterProfile.is_ghost ? "bg-red-400" : "bg-green-400")
              }
            >
              <div
                className={
                  "rounded-full w-3 h-3 animate-ping " +
                  (characterProfile.is_ghost ? "bg-red-400" : "bg-green-400")
                }
              ></div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const DeathBetesReadAboutSection = () => {
  return (
    <div className="w-full flex pt-[135px] px-[60px] justify-end">
      <div className="text-center">
        <h1 className="text-6xl font-bold">READ ABOUT DEATHBETS</h1>
        <div className="flex flex-row gap-3 mt-5">
          <ReadAboutPanel title="Betting Rules">
            <div className="text-left p-2 leading-8">
              Discover the Betting Rules and Guidelines.
              <br />
              <span className="text-blue-200 underline"> Click here</span> to
              delve into the comprehensive rules guiding our Deathbets. Learn
              how to participate, understand the criteria for placing bets, and
              ensure fair play in our exciting World of Warcraft Hardcore Mode.
              Explore the specifics of our betting system and get ready to
              engage in this thrilling challenge!
            </div>
          </ReadAboutPanel>
          <ReadAboutPanel title="How does it work">
            <div className="text-left p-2 leading-8">
              Unveiling the Mechanics of Deathbets Curious about how our system
              operates?
              <br />
              <span className="text-blue-200 underline">Click here</span> to
              discover the inner workings of Deathbets. Learn the step-by-step
              process from placing bets to tracking progress, understanding the
              stakes, and what happens upon a character's demise. Get a
              comprehensive overview of the exhilarating journey and mechanics
              behind our World of Warcraft Hardcore Mode betting platform.
            </div>
          </ReadAboutPanel>
          <ReadAboutPanel title="Betting Cancellation">
            <div className="text-left p-2 leading-8">
              Understanding Betting Cancellation Policy Explore our guidelines
              on Betting Cancellation by
              <br />
              <span className="text-blue-200 underline">clicking here</span>.
              Learn about the circumstances under which bets can be canceled,
              the process involved, and how we ensure fairness and transparency
              in such instances. Familiarize yourself with our policies to
              better navigate your participation in Deathbets and make informed
              decisions.
            </div>
          </ReadAboutPanel>
        </div>
      </div>
    </div>
  );
};

const ReadAboutPanel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-[400px] h-[400px] bg-neutral-800 border border-neutral-900 rounded">
      <div className="py-4 border-b-2 border-neutral-900">
        <h1 className="font-medium text-3xl">{title}</h1>
      </div>
      {children}
    </div>
  );
};

const DeathBetsToturialSection = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-6xl font-bold">HOW TO USE DEATHBETS?</h1>
        <div className="w-[700px] h-auto bg-neutral-800 rounded border border-neutral-900 p-5 flex flex-col gap-5">
          <TutorialStep stepNumber={1} title="Create a bounty">
            <span className="text-lg">
              Create a bet by going to the make a bet page and fill out the
              form.
            </span>
          </TutorialStep>
          <TutorialStep stepNumber={2} title="Send gold">
            <span className="text-lg">
              Send the amount of gold requested to requested characterName.
            </span>
            <span className="text-sm">
              (sending the wrong amount will result in gold sendback and bet
              reverded)
            </span>
          </TutorialStep>
          <TutorialStep stepNumber={3} title="Transaction">
            <span className="text-lg">
              When deathbets has received the gold, the bounty will be placed
              and you will be able to see it on the website under your profile
              as active.
            </span>
          </TutorialStep>
          <TutorialStep stepNumber={4} title="Waiting game">
            <span className="text-lg">
              Now that your bet is active, we will wish you good luck with your
              bet. You can now follow the character you bet on and see if he
              dies. If he dies, you will receive the gold
            </span>
          </TutorialStep>
          <TutorialStep stepNumber={5} title="Withdrawal">
            <span className="text-lg">
              Do you ever wish to withdraw your gold, you can do so by going to
              the widrawal page and request a withdrawal.
            </span>
          </TutorialStep>
        </div>
      </div>
    </div>
  );
};

const TutorialStep = ({
  stepNumber,
  title,
  children,
}: {
  stepNumber: number;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row gap-5">
      <div>
        <div className="rounded-full bg-neutral-500 flex items-center justify-center w-10 h-10">
          {stepNumber}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex flex-col">{children}</div>
      </div>
    </div>
  );
};
