import Image from "next/image"
import Link from "next/link"

async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 10 }
    })
    if (!res.ok) throw new Error("Failed to fetch data")
    return res.json()
}

const Blog = async () => {
    const data = await getData()
    return (
        <div className="flex flex-col min-h-screen m-10 gap-10">
            {data.map((pst) => (

                <Link href={"/blog/" + pst.id + "/"} key={pst.id} >
                    <div className="flex items-center justify-center gap-10">
                        <Image className="w-2/4 rounded-md shadow-lg" width={250} height={250} src={"/apps.jpg"} alt="img" />
                        <div className="flex flex-col gap-5">
                            <h1 className="capitalize text-3xl font-bold text-gray-300 ">{pst.title}</h1>
                            <p className="text-gray-400 text-md w-3/4">
                                {pst.body}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog