"use client";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <section
        style={{
          backgroundImage: "url('/lort.png')",
        }}
        className="relative min-h-[31.25rem] p-[3.75rem] block"
      >
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
              className="absolute block border w-full overflow-hidden border-zinc-600"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-screen relative">
        <div
          style={{ backgroundImage: "url('/lort.png')" }}
          className="w-full h-[460px] left-0 top-0 absolute"
        >
          d
        </div>
      </section>
    </div>
  );
}
