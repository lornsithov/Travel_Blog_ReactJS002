import React, { useState } from "react";

import christina from "../Images/christina.jpg";
import raamin from "../Images/raamin.jpg";
import lachlan from "../Images/lachlan.jpg";
import nonamesontheway from "../Images/nonamesontheway.jpg";

import notification from "../Images/notification.png";
import comment from "../Images/comment.png";

export default function TheRightStaticComponent() {
  return (
    <div className="h-screen w-r-w bg-mount bg-cover pt-10 pr-14 pl-10">
      <div className="flex gap-6 justify-end mb-12">
        <img
          src={notification}
          alt="notification"
          className="rounded-full w-8 h-8"
        />
        <img
          src={comment}
          alt="notification"
          className="rounded-full w-8 h-8"
        />
        <img src={lachlan} alt="lachlan" className="rounded-full w-8 h-8" />
      </div>

      <div className="flex justify-end mb-12">
        <button className="bg-purple-c text-white rounded-lg w-52 h-10 text-lg font-medium">
          My amazing trip
        </button>
      </div>

      <div className="text-white text-4xl mb-20">
        I love camping and climping the mountain...
      </div>

      <div className="text-white font-light text-xl">
        27 people are going this trip
      </div>

      <div className="mt-6 flex items-center gap-6">
        <img src={lachlan} alt="lachlan" className="rounded-full w-12 h-12" />
        <img
          src={raamin}
          alt="raamin"
          className="rounded-full w-12 h-12 border-2 border-white"
        />
        <img
          src={nonamesontheway}
          alt="nonamesontheway"
          className="rounded-full w-12 h-12 border-2 border-orange-500"
        />
        <img
          src={christina}
          alt="christina"
          className="rounded-full w-12 h-12 border-2 border-white"
        />
        <div className="bg-pink-c rounded-full w-12 h-12 border-2 border-dpink-c text-dpink-c flex flex-col text-center justify-center">
          23+
        </div>
      </div>
    </div>
  );
}
