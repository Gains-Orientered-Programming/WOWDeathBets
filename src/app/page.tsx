"use client";

import React from "react";

interface Props {
  region: string;
  realm: string;
  characterName: string;
}

export default function Home() {
  const [history, setHistory] = React.useState<Props[]>([]);

  React.useEffect(() => {
    if ("characters" in localStorage) {
      const items: Props[] = JSON.parse(
        localStorage.getItem("characters") ?? ""
      );
      setHistory(items);
    }
  }, []);

  return (
    <div className="w-full">
      <section>
        <div className="h-screen w-full overflow-hidden">
          <video
            className="object-cover object-center"
            src="/headerVideo.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </section>
      <section className="min-h-screen">
        {history.map((e, index) => (
          <p key={index}>
            {e.characterName} {e.realm} {e.region}
          </p>
        ))}
      </section>
    </div>
  );
}
