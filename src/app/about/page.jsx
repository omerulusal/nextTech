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
                        We are a group of technology enthusiasts who are passionate about sharing the latest news and trends in the web development and scientific communities. We believe that everyone should have access to accurate and up-to-date information about these important topics, and we are committed to providing our readers with the best possible content.
                        <br />
                        <br />
                        Our team is made up of experienced professionals with a wide range of skills and expertise. We have a deep understanding of the latest web technologies, and we are always up-to-date on the latest scientific discoveries. We are also passionate about writing clear and concise content that is easy to understand.
                        <br />
                        <br />

                        We believe that technology has the potential to make a positive impact on the world, and we are committed to using our platform to promote the responsible use of technology. We believe that everyone should have access to the information and tools they need to make informed decisions about their use of technology.
                    </p>
                </div>
                <div className="w-[600px]">
                    <h2 className="text-3xl font-bold mb-5">What We Do?</h2>
                    <p className="mb-5  text-gray-400">
                        We are a team of passionate technology enthusiasts who are dedicated to providing our readers with the latest news and trends in the web development and scientific communities.
                        <br />

                        <br />
                        Here are some of the specific topics we cover on our website:

                        <li>
                            Web development: We cover the latest trends in web development, including new technologies, frameworks, and libraries. We also provide tutorials and guides on how to use these technologies.
                        </li>
                        <br />
                        <li>
                            Science: We cover a wide range of scientific topics, including physics, chemistry, biology, and medicine. We also provide news and analysis on current scientific discoveries.
                        </li>
                        <br />
                        <li>
                            Technology trends: We track the latest trends in technology, including artificial intelligence, machine learning, and augmented reality.
                        </li>
                    </p>
                    <Button text={"Contact Us"} url={"/contact"} />
                </div>
            </div>
        </div >
    )
}

export default About