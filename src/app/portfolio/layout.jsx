const Layout = ({children}) => {
    return (
        <div className="flex flex-col mt-8 text-center font-bold">
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Our Works</h1>
            {children}
        </div>
    )
}

export default Layout