import Image from "next/image";
import { notFound } from "next/navigation";
// notFound nextjsin kendi error page'i

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
        // db verisi yoksa error page acilir.
    }
    return res.json()
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    }
    // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
    // bu sadece dinamik meta data cekme ornegiydi
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    //!blogsayfasından gelen id yi alıp dbye o idye karsılık gelen veriyi cekiyoruz
    console.log(data)
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-between px-20 mt-10">
                <div>
                    <h1 className="text-3xl font-bold text-gray-300 capitalize mb-5">{data.title}</h1>
                    <p className="text-gray-400 text-md" >{data.desc}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-4">
                        <Image src={data.userImg} width={50} height={50} alt="img" className="rounded-full w-10 h-10 object-cover" />
                        <span>{data.username}</span>
                    </div>
                </div>
                <Image className="rounded" src={data.img} width={250} height={250} alt="img" />
            </div>
            <div className="flex text-gray-400 text-md items-center justify-between px-20 mt-10">
                {data.content}
            </div>
        </div>
    );
};

export default BlogPost;