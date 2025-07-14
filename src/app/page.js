"use client";
import rectangle from "../../public/assets/Rectangle.png";
import Image from "next/image";
import Navbar from "./components/navbar";
import logo from "../../public/assets/logo.svg";

export default function Home() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <main className="w-full h-screen flex p-8 gap-4">

        <div className="flex justify-center flex-col w-1/2 font-[Nohemi] bg-[url('/assets/background-white.png')] bg-cover bg-center bg-no-repeat">

          <div className="flex items-center gap-2 py-1 px-2 border-2 border-gray-300 rounded-full text-gray-600 w-fit">
            <div className="flex items-center justify-center w-[18px] h-[18px] border-[1px] border-[#2463EB] rounded-full"><span className="w-[8px] h-[8px] bg-[#2463EB] rounded-full"> </span></div>
            <p>74.5K+ people uses aplywise every day</p>
          </div>

          <div className="flex gap-4 flex-col">
            <h1 className="font-[Nohemi] text-4xl font-bold mt-4">
              <span className="text-[#598DFF]">Pratice smarter. </span>
              Interview better. Get hired faster.
            </h1>

            <p>
              Practice smarter. Interview better. Get hired faster.
              ApplyWise helps you prepare for job interviews with
              AI-generated questions and personalized
              feedback — based on real job descriptions.
            </p>

            <button className="w-fit p-2 rounded-xl bg-[#598DFF] text-white">Start Praticing Now</button>

            <p> {"icon"} No sign-up required. Just paste a job description and go.</p>
          </div>

        </div>

        <div className="w-1/2 h-[70%] rounded-4xl pt-5 relative">

          <Image src={rectangle} alt="Rectangle" className=" w-full h-full object-cover rounded-4xl" />

          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pl-[20px]">

            <div className="rounded-bl-4xl rounded-tl-4xl w-full bg-white clipped-box p-5" >
              <div className="p-4 flex items-center justify-between">
                <div className="flex gap-2 items-center"><Image src={logo} /> <p className="">ApplyWise</p></div>
                <button className="p-2 rounded-xl bg-[#598DFF] text-white">Get Results</button>
              </div>

              <div className="det flex items-center justify-center flex-col">

                <h2 className="text-2xl" >Your Interviews Results Are In! </h2>

                <span className="flex gap-4">
                  <p>Retake Interview</p>
                  <p className="text-[#598DFF]">Download PDF Report</p>
                </span>

                <p>Readiness Score 72/100</p>

                <div>

                </div>
              </div>
            </div>
          </div>
        </div> 
      </main>
    </div>
  );
}
