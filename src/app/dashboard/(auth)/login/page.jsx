import Link from "next/link"

const Login = () => {
    return (
        <div className="flex flex-col justify-center min-h-screen items-center -mt-5">
            <div className="flex flex-col gap-4 w-full max-w-xs mx-auto p-4 bg-base-100 text-base-content mt-10">
                <input
                    className="focus:outline-none focus:bg-transparent focus-within:border-[#22c55e] p-2 rounded border border-slate-700 bg-transparent mb-2"
                    type="text" placeholder="username" />
                <input
                    className="focus:outline-none focus:bg-transparent focus-within:border-[#22c55e] p-2 rounded border border-slate-700 mb-2 bg-transparent"
                    type="password" placeholder="password" />
                <Link
                    className="text-green-600 text-xs hover:text-green-700 hover:underline -mb-2 "
                    href={"/"}>Forgot Password</Link>
                <Link
                    className="text-green-600 text-xs hover:text-green-700 hover:underline mb-4"
                    href={"/dashboard/register"}>Register</Link>
                <Link href={"/"}>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded w-full">Login</button>
                </Link>
            </div>
            <Link href={"/"} className="border border-slate-700 bg-transparent w-72 p-2 text-center 
            hover:bg-slate-600 hover:text-black rounded text-slate-200 transition-all flex gap-2 ">
                <div className="mx-auto flex justify-center items-center gap-2">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 775 794"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M775 405.797C775 373.248 772.362 349.496 766.653 324.865H395.408V471.773H613.32C608.929 508.282 585.204 563.264 532.482 600.209L531.743 605.127L649.124 696.166L657.256 696.979C731.943 627.921 775 526.315 775 405.797"
                            fill="#4285F4"
                        />
                        <path
                            d="M395.408 792.866C502.167 792.866 591.792 757.676 657.256 696.979L532.482 600.209C499.093 623.521 454.279 639.796 395.408 639.796C290.845 639.796 202.099 570.741 170.463 475.294L165.826 475.688L43.772 570.256L42.1759 574.698C107.198 704.013 240.758 792.866 395.408 792.866Z"
                            fill="#34A853"
                        />
                        <path
                            d="M170.463 475.294C162.116 450.662 157.285 424.269 157.285 397C157.285 369.728 162.116 343.338 170.024 318.706L169.803 313.46L46.2193 217.373L42.1759 219.299C15.3772 272.961 0 333.222 0 397C0 460.778 15.3772 521.036 42.1759 574.698L170.463 475.294"
                            fill="#FBBC05"
                        />
                        <path
                            d="M395.408 154.201C469.656 154.201 519.74 186.31 548.298 213.143L659.891 104.059C591.356 40.2812 502.167 1.13428 395.408 1.13428C240.758 1.13428 107.198 89.9835 42.1759 219.299L170.024 318.706C202.099 223.259 290.845 154.201 395.408 154.201"
                            fill="#EB4335"
                        />
                    </svg>
                    Google
                </div>
            </Link>
        </div>
    )
}

export default Login

// login ve register klasörlerini ekledigim (auth) bir rota degildir.