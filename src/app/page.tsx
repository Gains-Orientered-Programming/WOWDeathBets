export default function Home() {
  const characters =
    typeof window !== "undefined" ? localStorage.getItem("characters") : null;
  return (
    <>
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
      </div>
    </>
  );
}
