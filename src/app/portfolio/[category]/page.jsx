import Button from "@/components/button/Button"
import Image from "next/image"

const Category = ({params}) => {
    return (
        <div className="min-h-screen my-10">
            <h2 className="text-2xl text-center capitalize text-gray-400 -mt-10">{params.category}</h2>
            <div className="flex items-center justify-center">
                <div className="w-2/4">
                    <h2 className="text-3xl font-bold">Creative Portfolio</h2>
                    <p className="text-gray-400 mt-3 mb-5 w-3/4 text-start ml-28">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident ipsum quia quibusdam praesentium id ex dolorem est iusto quis. Debitis accusamus incidunt tempora sed nam, veritatis delectus mollitia beatae.
                        Voluptates delectus quis voluptatem numquam, illum dicta in fugit perferendis eaque laboriosam incidunt placeat.
                    </p>
                    <Button text={"See More"} url={"/portfolio"} />
                </div>
                <div className="mr-20 mb-10">
                    <Image className="cursor-pointer hover:scale-110 hover:-rotate-6 duration-300 transition-all border-2 border-sky-700" src={"/illustration.png"} width={350} height={200} alt="img" />
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="mr-20 mb-10">
                    <Image className="cursor-pointer hover:scale-110 hover:rotate-6 duration-300 transition-all border-2 border-sky-700" src={"/illustration.png"} width={350} height={200} alt="img" />
                </div>
                <div className="w-2/4">
                    <h2 className="text-3xl font-bold">Creative Portfolio</h2>
                    <p className="text-gray-400 mt-3 mb-5 w-3/4 text-start ml-28">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident ipsum quia quibusdam praesentium id ex dolorem est iusto quis. Debitis accusamus incidunt tempora sed nam, veritatis delectus mollitia beatae.
                        Voluptates delectus quis voluptatem numquam, illum dicta in fugit perferendis eaque laboriosam incidunt placeat.
                    </p>
                    <Button text={"See More"} url={"/portfolio"} />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-2/4">
                    <h2 className="text-3xl font-bold">Creative Portfolio</h2>
                    <p className="text-gray-400 mt-3 mb-5 w-3/4 text-start ml-28">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident ipsum quia quibusdam praesentium id ex dolorem est iusto quis. Debitis accusamus incidunt tempora sed nam, veritatis delectus mollitia beatae.
                        Voluptates delectus quis voluptatem numquam, illum dicta in fugit perferendis eaque laboriosam incidunt placeat.
                    </p>
                    <Button text={"See More"} url={"/portfolio"} />
                </div>
                <div className="mr-20 mb-10">
                    <Image className="cursor-pointer hover:scale-110 hover:-rotate-6 duration-300 transition-all border-2 border-sky-700" src={"/illustration.png"} width={350} height={200} alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Category