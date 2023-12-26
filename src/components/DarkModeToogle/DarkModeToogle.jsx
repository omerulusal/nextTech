"use client"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const DarkModeToogle = () => {
    const { toogle, mode } = useContext(ThemeContext)
    return (
        <div className="flex items-center justify-center mr-3" onClick={toogle} >
            <div className="bg-slate-500 rounded-full relative z-0 w-10 h-5" />
            <div className="absolute ml-5 cursor-pointer z-10" >☀️</div>
            <div className="absolute mr-5 cursor-pointer z-10" >🌕</div>
            <div
                className={`bg-${mode === "dark" ? "slate-600" : "slate-600"} rounded-full absolute z-20 mr-5 w-5 h-5`}
                style={mode === "dark" ? { marginRight: "20px" } : { marginLeft: "40px" }}
            />
        </div>
    )
}

export default DarkModeToogle