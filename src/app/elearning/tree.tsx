import React from "react"
import { File, Folder } from "@/components/ui/file-tree"
interface Elements {
  id: string
  name: string
  children?: Elements[]
}

function TreeComp({ ELEMENTS }: { ELEMENTS: Elements[] }) {
  return (
    <div>
      {ELEMENTS.map((element) => {
        if (element.children) {
          return (
            <Folder element={element.name} value={element.id} key={element.id} className="">
              <TreeComp ELEMENTS={element.children} />
            </Folder>
          )
        } else {
          return (
            <File value={element.id} key={element.id} className="!mt-1.5 !mb-1.5">
              {element.name}
            </File>
          )
        }
      })}
    </div>
  )
}

export default TreeComp
