import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  
  return (
    <header className="py-20  h-screen text-center">
      <div>
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent">
        Summarize Any 
      </h1>
      <h1 className="text-5xl mt-4  font-extrabold bg-gradient-to-r from-black to-yellow-800 bg-clip-text text-transparent">
      Podcast or Youtube Video Instantly
      </h1>
      </div>

      <p className="text-2xl mt-4">
        Use AI to get concise summaries and top questions from your favorite
        podcasts.
      </p>
      <div className="mt-2">
      <Button className="mt-4 w-40 p-5 text-xl">Try it Now</Button>
      </div>
    </header>
  );
}
