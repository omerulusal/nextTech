const Input = ({ type, placeholder }) => {
    return (
        <div className="h-[40px] mb-6 p-2">
            <input className={`bg-transparent border border-gray-500 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue focus-within:outline-none block w-full p-2`} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input