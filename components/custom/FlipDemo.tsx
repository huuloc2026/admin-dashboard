import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "Smart", "Scalable", "modern","Insightful"];

  return (
    <>
     
        Build
        <FlipWords words={words} /> <br />
        websites with my services
   
    </>
  );
}
