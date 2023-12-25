"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Footer = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-3">
            <div>
                © 2024 <span onClick={() => router.push("/")}
                    className="font-bold text-blue-700 hover:underline underline-offset-4 decoration-2 decoration-blue-700 cursor-pointer">
                    NextTech.
                </span>
                All rights reserved.
            </div>
            <div>
                <ul className="flex items-center justify-center gap-5">
                    <li>
                        <Image width={35} height={35} src={"/facebook.png"} alt="img" />
                    </li>
                    <li>
                        <Image width={35} height={35} src={"/instagram.png"} alt="img" />
                    </li>
                    <li>
                        <Image width={35} height={35} src={"/youtube.png"} alt="img" />
                    </li>
                    <li>
                        <Image width={35} height={35} src={"/x.png"} alt="img" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer