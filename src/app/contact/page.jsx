import Button from "@/components/button/Button"
import Input from "@/components/input/Input"
import Image from "next/image"
const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <h1 className="text-3xl font-bold text-center py-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                Let`s Keep In Touch
            </h1>
            <div className="flex flex-row gap-10 items-center justify-center py-10">
                <Image className="hover:scale-110 hover:rotate-6 duration-300 transition-all" src={"/contact.png"} width={350} height={350} alt="img" />
                <div className="flex flex-col w-2/4 px-20">
                    <Input type="text" placeholder="Name" />
                    <Input type="email" placeholder="Email" />
                    <textarea className="bg-transparent border border-gray-500 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue resize-none focus-within:outline-none block w-full p-2 ml-2" cols="30" rows="10" placeholder="Message" />
                    <div className="sm:mt-7 flex gap-4 ml-2 text-left w-full">
                        <Button text={"send"} url={"/contact"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact