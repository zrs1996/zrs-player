import React from "react";
import { createRoot } from "react-dom/client";
import ZrsPlayer from "@/core/index";
import mp4Src from '@/static/mp4/806595385_1_0.mp4';
import posterSrc from '@/static/cover.jpg';

const AppCompent = () => {
  
  return (
    <>
      <ZrsPlayer
        option={{
          videoSrc: mp4Src,
          width: "100%",
          height: "100%",
          poster: posterSrc,
          quality: [],
          autoPlay: false
        }}
      />
    </>
  );
};
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<AppCompent />);
