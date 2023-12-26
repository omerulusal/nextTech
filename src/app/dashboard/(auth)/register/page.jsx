import Link from "next/link"

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center -mt-10">
            <div className="flex flex-col gap-4 w-full max-w-xs mx-auto p-4 bg-base-100 text-base-content mt-10">
                <input className="focus:outline-none focus:bg-transparent p-2 rounded border border-slate-700 bg-transparent" type="text" placeholder="username" />
                <input className="focus:outline-none focus:bg-transparent p-2 rounded border border-slate-700 bg-transparent" type="email" placeholder="email" />
                <input className="focus:outline-none focus:bg-transparent p-2 rounded border border-slate-700 bg-transparent" type="password" placeholder="password" />

                <Link
                    className="text-green-600 text-sm hover:text-green-700 hover:underline "
                    href={"/dashboard/login"}>
                    Login
                </Link>
                <Link href={"/"}>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded w-full">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Register