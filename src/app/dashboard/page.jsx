"use client"
// import { useEffect, useState } from "react"
import useSWR from 'swr'
const Dashboard = () => {
    /* 
    const [data, setData] = useState([])
    const [err, setErr] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
            if (!res.ok) setErr(true)
            const veri = await res.json()
            setData(veri)
            setIsLoading(false)
        }
        getData()
    }, [])

    Bu Amele usulu fetch işlemi
    */
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)
    console.log(data)
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard