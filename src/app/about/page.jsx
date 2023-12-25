import Button from "@/components/button/Button"
import Image from "next/image"
const About = () => {
    return (
        <div className="flex flex-col w-[1024px] mx-auto">
            <div className="w-full h-[400px] mx-7 relative mb-10 mt-3 ">
                <Image src="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="about" fill={true} priority className="object-cover opacity-60 rounded-lg shadow-xl shadow-gray-400 absolute" />
                <div className="bottom-20 left-10 absolute rounded-sm bg-black/50 px-10 py-5">
                    <h3 className="text-3xl text-gray-200 font-bold">Digital Storytellers</h3>
                    <p className="text-gray-400 text-md mt-3">Handcrafting beautiful digital experiences</p>
                </div>
            </div>
            <div className=" flex mb-10 ml-8 gap-10">
                <div className="w-[600px]">
                    <h2 className="text-3xl font-bold mb-5">Who Are We?</h2>
                    <p className="mb-5 text-gray-400 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                    </p>
                </div>
                <div className="w-[600px]">
                    <h2 className="text-3xl font-bold mb-5">What We Do?</h2>
                    <p className="mb-5  text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae
                        neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Quisquam magnam dignissimos eos id vero placeat rem, sequi enim quae
                        neque ex voluptates animi ad nam! Impedit illo vitae quas similique.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                    </p>
                    <Button text={"Contact Us"} url={"/contact"}/>
                </div>
            </div>
        </div >
    )
}

export default About