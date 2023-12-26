import Button from "@/components/button/Button"
import Image from "next/image"
export default function Home() {
  return (
    <div className="flex flex-col"  >
      <div className="flex items-center justify-between py-5 px-10">
        <div className="flex flex-col items-center justify-center gap-4 p-6">
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold tracking-tight sm:text-5xl w-[360px]">Better design for your digital products.</h1>

          <p className="mt-4 leading-8 text-left tracking-tight font-light text-gray-300 max-w-md ml-20 sm:text-2xl">Turning your ideas into Reality. We bring together the teams from global tech industry.</p>
          <div className="sm:mt-8 flex gap-4 ml-[160px] text-left w-full">
            <Button text={"See Our Works"} url={"/portfolio"} />
          </div>
        </div>
        <Image className="hover:scale-110 mr-10 hover:rotate-6 duration-300 transition-all" src={"/hero.png"} alt="main" width={400} height={400} />
      </div>
    </div>
  )
}
