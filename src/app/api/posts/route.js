import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";
export const GET = async (req) => {
    try {
        await connect()
        const posts = await Post.find()
        //Post koleksiyonundaki tüm belgeleri bulur. posts degişkenine atar 
        return new NextResponse(JSON.stringify(posts), { status: 200 })
        // posts'u, JSON a dönüştürür ve 200 OK koduyla birlikte yanıtı NextResponse ile geri gönderir.
    } catch (error) {
        
        return new NextResponse("Databese Error", { status: 500 })
    }
} 