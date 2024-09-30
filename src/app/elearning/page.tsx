"use client"

import { useEffect, useState } from "react"
import { Tree } from "@/components/ui/file-tree"
import Landing from "./courses/landing"
import Phishing from "./courses/phishing"
import JS from "./courses/js"
import TreeComp from "./tree"
import Editor from "./editor"

// Mock data for categories and nested courses

export default function Component() {
  const [selectedID, setselectedid] = useState<number>(0) // Renamed to `setSelectedID`

  // a recursive function to flatmap the nested courses
  function flatmapCourses(ELEMENTS: Elements[]): Elements[] {
    return ELEMENTS.flatMap((element) => {
      if (element.children) {
        return [element, ...flatmapCourses(element.children)]
      }
      return element
    })
  }

  return (
    <div className="flex h-screen bg-background w-full">
      <div className="flex h-screen bg-background !w-full">
        <aside className="w-5xl border-r overflow-auto">
          <Tree
            className="p-2 overflow-visible rounded-md bg-background tree-text"
            initialExpandedItems={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
            ]}
            elements={ELEMENTS}
            setselectedid={setselectedid}
          >
            <TreeComp ELEMENTS={ELEMENTS} />
          </Tree>
        </aside>

        <main className="flex-1 overflow-auto p-6 relative !w-full ">
          <Editor id={selectedID} />
        </main>
      </div>
    </div>
  )
}

interface Elements {
  id: string
  isSelectable: boolean
  name: string
  children?: Elements[]
}

const ELEMENTS: Elements[] = [
  {
    id: "1",
    isSelectable: true,
    name: "Introduction",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "C'est quoi la cybersécurité ?",
      },
      {
        id: "3",
        isSelectable: true,
        name: "Pourquoi la cybersécurité ?",
      },
    ],
  },
  {
    id: "4",
    isSelectable: true,
    name: "Les techniques de base",
    children: [
      {
        id: "5",
        isSelectable: true,
        name: "Phishing",
      },
      {
        id: "6",
        isSelectable: true,
        name: "Virus",
      },
      {
        id: "11",
        isSelectable: false,
        name: "Sécurité des systèmes embarqués",
        children: [
          {
            id: "12",
            isSelectable: true,
            name: "Introduction",
          },
        ],
      },
    ],
  },
  {
    id: "7",
    isSelectable: true,
    name: "Se sécuriser",
    children: [
      {
        id: "8",
        isSelectable: true,
        name: "Mots de passe",
      },
    ],
  },
]
