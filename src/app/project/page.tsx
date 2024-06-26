import Image from "next/image";
import projectlogo from "./images/logo-project.png";

export default function Project() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          This web that you viewing&nbsp;
          <code className="font-mono font-bold">is beta test.</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            rel="noopener noreferrer"
          >
            Developing base on
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </p>
        </div>
      </div> */}
      <div className="relative flex place-items-center">
        {/* <h1>Spectrum NEXT project</h1> */}
        <Image src={projectlogo} alt="project logo" width={1280} height={720}/>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
        <p>The SPECTRUMNext is started in 2017. This project has begin from myself. My skills has multi-action and combine working premire at creation progress.<br/>I get friends of personality and multi-groups.<br/>The making connection on multi-events and society when meeting and online meeting on every time/days.</p>
        <p>I get connection skills and chain continue real-time situations.I got multi-personality on my friends and my connections.</p>
        <p>I know many stories and interesting massing events and activities.The SPECTRUMNext has origin name is "SPECTRUM GAMER" in 2017.</p>
        <p>At 2022 name has changed to "SPECTRUMNext" from that time to now.</p>
      </div></div></div></div>
    </main>
  );
}
