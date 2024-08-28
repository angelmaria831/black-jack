import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="relative w-full h-screen overflow-hidden">

        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/home_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-white text-5xl font-bold">Welcome to Blackjack</h1>
          <button className="mt-5 px-4 py-2 bg-green-500 text-white rounded">
            Play Now
          </button>
        </div>

      </div>

    </main>
  );
}
