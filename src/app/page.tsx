export default function Home() {
  return (
    <>
      <div className="w-full">
        <div className="max-h-[700px] w-full overflow-hidden">
          <video
            className="min-w-full max-h-[700px] object-fill opacity-80"
            src="/headerVideo.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </>
  );
}
