import Image from "next/image";
import {notFound} from "next/navigation";

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}


const BlogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-between px-20 mt-10">
                <div>
                    <h1 className="text-3xl font-bold text-gray-300 capitalize mb-5">{data.title}</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, rerum. Amet sit consequatur doloremque commodi eos rem quaerat maxime optio sint in, adipisci odit accusantium deleniti animi nobis nulla sed.
                        Dicta consectetur voluptas ullam officia quos quo. Illum maxime dolorum, sit rerum cum reiciendis hic laudantium saepe. Voluptas aperiam nihil unde accusamus quos laudantium ipsa magnam? Saepe optio quo modi.</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                        <Image src={"/apps.jpg"} width={50} height={50} alt="img" className="rounded-full" />
                        <span>Author</span>
                    </div>
                </div>
                <Image src={"/apps.jpg"} width={250} height={250} alt="img" />
            </div>

            <div className="flex items-center justify-between px-20 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, hic! Corrupti esse est iusto doloribus asperiores rem sequi similique fugit totam eligendi, voluptatibus voluptate assumenda magni delectus deserunt laboriosam? Consectetur.
                Natus quod animi, quibusdam reprehenderit, et adipisci maiores vero consequatur, nobis harum rerum sed aperiam quas repellat! Perferendis, nemo reprehenderit numquam excepturi illum officia officiis repellendus nam maiores ab incidunt!
                Repudiandae ad quaerat doloribus ut assumenda facere molestiae id provident esse nobis repellat aut, minus distinctio nam adipisci quasi inventore possimus debitis amet corrupti? Culpa sint quis aut sapiente laboriosam?
                <br /> <br />
                Temporibus ullam excepturi, eligendi quae repudiandae omnis quidem corporis natus sequi molestiae dicta aperiam? Tempore laborum incidunt odio rerum consequatur consequuntur nihil, eius, doloribus quibusdam, provident architecto hic numquam dolorem!
                Vel cupiditate voluptatibus, ex quo nobis perspiciatis iusto, sapiente ratione eius optio facilis qui nemo. Voluptas maiores, dicta labore ex quisquam autem voluptatum numquam fugit dignissimos repellendus nisi mollitia consectetur.
                Hic fugit explicabo fugiat omnis magnam sapiente incidunt ad ipsum eius earum impedit, dolores nostrum iusto nobis nihil id consequatur labore. Amet laboriosam eos sapiente voluptas sequi exercitationem nisi voluptates!
                <br /> <br />

                Odit recusandae, maxime et iusto repudiandae dignissimos quaerat, sint, quae dolorum voluptatem ratione quas aliquam esse eos ad accusamus ullam impedit ab animi molestias. Sequi ea nihil similique cumque quaerat.
                Repellendus consequuntur mollitia tempora beatae quod ut sed quis delectus animi accusamus quisquam laudantium quibusdam veniam, praesentium voluptatum asperiores magnam nisi, deserunt minima, eaque assumenda voluptatem? Sapiente accusamus praesentium reprehenderit.
                <br /> <br />
                Illo natus iste blanditiis quas alias tenetur corrupti laudantium optio quisquam minima, repellat unde consequuntur accusamus dicta magni nisi id delectus ab dolore voluptatum recusandae officia beatae. Officia, nobis culpa?
                Facere modi rem, ea quaerat reiciendis placeat, dolorem nostrum similique aperiam officiis eligendi vero optio! Hic consectetur perspiciatis, asperiores quis ab autem, quasi optio itaque nostrum error dignissimos in! Quo!
            </div>
        </div>
    );
};

export default BlogPost;