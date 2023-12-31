import Image from "next/image"
import Link from "next/link"
const Portfolyo = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="text-center font-bold">
            <h3 className="text-2xl text-gray-400 mt-3 ">Choose a gallery</h3>
                <div className="flex items-center justify-center gap-5 mt-10">
                    
                    <div className="relative">

                        <Link href={"/portfolio/applications"}>
                            <Image className="cursor-pointer hover:scale-110 hover:rotate-6 duration-300 transition-all border-2 border-[#d8c1a4]" src={"/apps.jpg"} width={350} height={200} alt="img" />
                        </Link>


                        <h6 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-red-500 absolute bottom-2 right-5">Applications</h6>
                    </div>
                    <div className="relative">

                    <Link href={"/portfolio/illustrations"}>
                            <Image className="cursor-pointer hover:scale-110 hover:rotate-6 duration-300 transition-all border-2 border-[#e99db0]" src={"/illustration.jpg"} width={350} height={200} alt="img" />
                        </Link>
                        <h6 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-red-500 absolute bottom-2 right-5">Illustrations</h6>
                    </div>
                    <div className="relative">

                    <Link href={"/portfolio/websites"}>
                            <Image className="cursor-pointer hover:scale-110 hover:rotate-6 duration-300 transition-all border-2 border-[#b5b2b3]" src={"/websites.jpg"} width={350} height={200} alt="img" />
                        </Link>
                        <h6 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-red-500 absolute bottom-2 right-5">Web Sites</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolyo