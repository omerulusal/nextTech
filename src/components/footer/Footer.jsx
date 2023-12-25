"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Footer = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between px-[130px]">
            <div>
                © 2024 <span onClick={() => router.push("/")}
                    className="font-bold text-blue-700 hover:underline underline-offset-4 decoration-2 decoration-blue-700 cursor-pointer">
                    NextTech.
                </span>
                All rights reserved.
            </div>
            <div>
                <ul className="flex items-center justify-center gap-3">
                    <li
                        onClick={() => router.push("https://facebook.com")}
                        className="cursor-pointer opacity-70">
                        <Image width={25} height={25} src={"/facebook.png"} alt="img" />
                    </li>
                    <li
                        onClick={() => router.push("https://instagram.com")}
                        className="cursor-pointer  opacity-70">
                        <Image width={25} height={25} src={"/instagram.png"} alt="img" />
                    </li>
                    <li
                        onClick={() => router.push("https://youtube.com")}
                        className="cursor-pointer  opacity-70">
                        <Image width={25} height={25} src={"/youtube.png"} alt="img" />
                    </li>
                    <li
                        onClick={() => router.push("https://x.com")}
                        className="cursor-pointer  opacity-70">
                        <Image width={25} height={25} src={"/x.png"} alt="img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer