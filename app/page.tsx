


import Lottie from "lottie-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import idleKasumi from '@/public/lottie/Kasumi-idle.json'
import logo from '@/public/Branding/BRAND NAME 2.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen">
      <section className="flex">
          <section className=" flex items-center">
            <section className=" flex flex-col items-center">
              <Image
                src={logo}
                width={500}
                height={500}
                alt="Kasumi Ube's logo"
              />
              <div className=" flex flex-col items-center space-y-4">
                <Link href='/about'><Button size='lg'>About you?</Button></Link>
                <Link href='/about'><Button size='lg'>Your works?</Button></Link>
              </div>
            </section>


            <Lottie 
              animationData={idleKasumi} 
              loop={true}
              className=" max-h-[35rem] max-w-[35rem] md:hidden"
            />
          </section>
      </section>
      <section className=" flex flex-col justify-center items-center border-4 rounded-sm w-[65rem] h-56 p-6 text-5xl text-primary-foreground break-all overflow-hidden md:hidden">
        <span>Hawwo!!</span>
        <h1 className=" text-6xl">I'm Kasumi Ube</h1>
      </section>
    </main>
  )
}
