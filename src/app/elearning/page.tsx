"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import { File, Folder, Tree } from "@/components/ui/file-tree"
import dynamic from "next/dynamic"
import Landing from "./courses/landing"
import Phishing from "./courses/phishing"
import JS from "./courses/js"
import TreeComp from "./tree"
import Editor from "./editor"

// Mock data for categories and nested courses

export default function Component() {
  const [selectedCourse, setSelectedCourse] = useState<string>("landing")
  const [selectedID, setselectedid] = useState<number>(0) // Renamed to `setSelectedID`

  const courseComponents = {
    Phishing: Phishing,
    landing: Landing,
    "C'est quoi la cybersécurité ?": JS,
  }

  // a recursive function to flatmap the nested courses
  function flatmapCourses(ELEMENTS: Elements[]): Elements[] {
    return ELEMENTS.flatMap((element) => {
      if (element.children) {
        return [element, ...flatmapCourses(element.children)]
      }
      return element
    })
  }

  useEffect(() => {
    const courses = flatmapCourses(ELEMENTS)
    const selectedCourse = courses.find((course) => course.id === selectedID.toString())
    if (selectedCourse?.name) setSelectedCourse(selectedCourse?.name)
  }, [selectedID])

  const renderCourseContent = () => {
    if (!selectedCourse) return null
    const CourseComponent = courseComponents[selectedCourse as keyof typeof courseComponents]
    return CourseComponent ? (
      <CourseComponent />
    ) : (
      <div>
        <p className="mt-4">Course content is not available.</p>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <div className="flex h-screen bg-background">
        <aside className="w-5xl border-r overflow-auto">
          <Tree
            className="p-2 overflow-visible rounded-md bg-background tree-text"
            initialExpandedItems={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]}
            elements={ELEMENTS}
            setselectedid={setselectedid}
          >
            <TreeComp ELEMENTS={ELEMENTS} />
          </Tree>
        </aside>

        <main className="flex-1 overflow-auto p-6">
          <Editor />
          {selectedCourse ? (
            renderCourseContent()
          ) : (
            <div>
              <h1 className="text-2xl font-bold">Welcome to Your E-Learning Platform</h1>
              <p className="mt-4">Select a course from the sidebar to begin learning.</p>
            </div>
          )}
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
