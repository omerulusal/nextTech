import Image from "next/image"
import Link from "next/link"
const Blog = () => {
    return (
        <div className="flex flex-col min-h-screen m-10 gap-10">
            <Link href={"/blog/testID"} >
                <div className="flex items-center justify-center gap-10">
                    <Image className="w-2/4 rounded-md shadow-lg" width={250} height={250} src={"/apps.jpg"} alt="img" />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-bold text-gray-300 ">BLOG TITLE</h1>
                        <p className="text-gray-400 text-md w-3/4">
                            BLOG DETAILS
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias nihil voluptates iure quaerat. Aliquam, est animi quo tempora ad laudantium doloremque perferendis iusto quas iste placeat tenetur nihil consectetur?
                        </p>
                    </div>
                </div>
            </Link>
            <Link href={"/blog/testID"} >
                <div className="flex items-center justify-center gap-10">
                    <Image className="w-2/4 rounded-md shadow-lg" width={250} height={250} src={"/apps.jpg"} alt="img" />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-bold text-gray-300 ">BLOG TITLE</h1>
                        <p className="text-gray-400 text-md w-3/4">
                            BLOG DETAILS
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias nihil voluptates iure quaerat. Aliquam, est animi quo tempora ad laudantium doloremque perferendis iusto quas iste placeat tenetur nihil consectetur?
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Blog