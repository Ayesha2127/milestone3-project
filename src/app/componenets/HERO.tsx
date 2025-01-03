export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10" // Added z-10 to keep the video behind
      >
        <source
          src="https://cdn.pixabay.com/video/2020/03/09/33434-397128387_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content over video */}
      <div className="relative z-20 text-white flex items-center justify-center h-full">
      </div>
    </div>
  );
}
