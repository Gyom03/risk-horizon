'use server'


export async function POST(request: Request, response: Response) {
    const data= await request.json()
    console.log("data:" ,data)

    return new Response("OK", { status: 200 })
}
