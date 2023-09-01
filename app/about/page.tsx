import About from "@/components/home/About";
import React from "react";
import { ScrollerMotion } from "scroller-motion";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="">
      <About></About>
    </div>
  );
}
