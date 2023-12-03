import Image from "next/image";
import React from "react";
import { getAllBettings, getHighestBettings } from "src/api/betting-services";
import { getCharacterProfile } from "src/api/blizzard-service/characterProfile";
import { Betting } from "src/types/betting-service.t";

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
        <div className="w-1/2 flex mt-5 flex-row justify-between">
          {bettings.map((betting) => (
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
    <div className="w-[220px] h-[220px] bg-neutral-800 border border-neutral-900 flex flex-col p-2 rounded-t">
      <div>
        <Image
          src={`/races/race_${characterProfile.race.name}_${characterProfile.gender.name}.jpeg`}
          className="rounded"
          alt="character image"
          width={50}
          height={50}
        />
        <hr className="mt-2" />
        <div className="flex flex-col">
          <h3>{betting.characterName}</h3>
          <span>Class: {characterProfile.character_class.name}</span>
          <span>Lvl: {characterProfile.level}</span>
          <span>Total Bounty: {betting.amount}</span>
          <div className="flex flex-row items-center gap-1">
            <span>Status: {characterProfile.is_ghost ? "Dead" : "Alive"}</span>
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
      </div>
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
            Read here about the betting rules
          </ReadAboutPanel>
          <ReadAboutPanel title="How does it work">
            Read here about using the website
          </ReadAboutPanel>
          <ReadAboutPanel title="Betting Cancellation">
            Read here about cancellation of a betting
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
    <div className="w-[400px] h-[400px] bg-neutral-800 rounded">
      <div className="py-4 border-b-2">
        <h1 className="font-medium text-3xl">{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

const DeathBetsToturialSection = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-6xl font-bold">HOW TO USE DEATHBETS?</h1>
        <div className="w-[700px] h-auto bg-neutral-800 p-5 flex flex-col gap-5">
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
