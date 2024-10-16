"use server"
import axios from "axios"
import Component from "./main-page"

interface customReq {
  params: {
    id?: string
  }
  searchParams: {
    photo?: string
  }
}

async function Page(request: customReq) {
  let id = await request.params.id

  const getTree = async () => {
    const { data } = await axios.get(`${process.env.URL}/api/get-course-layout`)
    const string = JSON.stringify(data.Content)
    return string
  }

  const tree = await getTree()

  return <Component treeData={tree} />
}

export default Page
