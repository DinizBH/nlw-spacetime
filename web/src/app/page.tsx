
import { Button } from "@/components/Button";
import Copyright from "@/components/Copyright";
import EmptyMemories from "@/components/EmptyMemories";
import Hero from "@/components/Hero";
import SignIn from "@/components/SignIn";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="flex flex-col justify-between px-28 p-16 bg-[url(../assets/bg-stars.svg)] bg-cover relative border-r border-white/10  overflow-hidden">
          {/* Blur */}
          <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 -translate-y-1/2 translate-x-1/2 rounded-full blur-full"></div>
          {/* Stripes */}
          <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes"/>    
          <SignIn/>
          <Hero/>
          <Copyright/>
        </div>
        {/* Right */}
        <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover ">
          <EmptyMemories/>
        </div>
      </main>
    </>
  );
}
