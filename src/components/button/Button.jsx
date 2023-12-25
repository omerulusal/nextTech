import Link from "next/link"
const Button = ({ text, url }) => {
    return (
        <div>
            <Link href={url}>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">{text}</button>
            </Link>
        </div>
    )
}

export default Button