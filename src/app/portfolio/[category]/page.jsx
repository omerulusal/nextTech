import Button from "@/components/button/Button"
import Image from "next/image"
import { items } from "./data.js"
import { notFound } from "next/navigation.js"

const getData = (cat) => {
    const data = items[cat]
    // cat:urlde yazan ıllustratıon,websites,applications ı temsil ediyor aynı zamanda items icerisindeki arraylerdir.
    if (data) {
        return data
    }
    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)
    // params.category dememin nedeni [category] dinamik rotasında
    return (
        <div className="min-h-screen my-10">
            {data.map((item, i) => (
                <div key={i}>
                    <div className="flex items-center justify-center">
                        <div className="w-2/4">
                            <h2 className="text-2xl text-left ml-[210px] capitalize text-gray-400 mt-3">{item.title}</h2>
                            <p className="text-gray-400 mt-3 mb-5 w-3/4 text-start ml-28">
                                {item.desc}
                            </p>
                            <Button text={"See More"} url={"/portfolio"} />
                        </div>
                        <div className="mr-20 mb-10">
                            <Image
                                className="cursor-pointer hover:scale-110 hover:-rotate-6 duration-300 transition-all border-2 border-sky-700"
                                src={`${item.image}`} width={350} height={200} alt="img" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Category