"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"

// Mock data for categories and nested courses
const categories = [
  {
    name: "Web Development",
    subcategories: [
      {
        name: "Frontend",
        courses: ["HTML & CSS Basics", "JavaScript Fundamentals", "React for Beginners"],
      },
      {
        name: "Backend",
        courses: ["Node.js Essentials", "Express.js Framework", "Database Design"],
      },
    ],
  },
  {
    name: "Data Science",
    subcategories: [
      {
        name: "Programming",
        courses: ["Python for Data Analysis", "R Programming"],
      },
      {
        name: "Machine Learning",
        courses: ["Supervised Learning", "Unsupervised Learning", "Deep Learning Basics"],
      },
    ],
  },
  {
    name: "Design",
    subcategories: [
      {
        name: "Graphic Design",
        courses: ["Adobe Photoshop Essentials", "Illustrator Masterclass"],
      },
      {
        name: "UX/UI",
        courses: ["UI/UX Principles", "Figma for Designers", "User Research Methods"],
      },
    ],
  },
]

export default function Component() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({})
  const [openSubcategories, setOpenSubcategories] = useState<{ [key: string]: boolean }>({})

  const toggleCategory = (categoryName: string) => {
    setOpenCategories((prev) => ({ ...prev, [categoryName]: !prev[categoryName] }))
  }

  const toggleSubcategory = (subcategoryName: string) => {
    setOpenSubcategories((prev) => ({ ...prev, [subcategoryName]: !prev[subcategoryName] }))
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - always visible */}
      <aside className="w-64 border-r overflow-auto !font-bold">
        <ScrollArea className="h-full w-full">
          {categories.map((category, index) => (
            <Collapsible
              key={index}
              className="w-full"
              open={openCategories[category.name]}
              onOpenChange={() => toggleCategory(category.name)}
            >
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full items-center justify-between p-4 font-medium">
                  <span className="text-left truncate mr-2 font-bold">{category.name}</span>
                  <ChevronRight
                    className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${
                      openCategories[category.name] ? "rotate-90" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                {category.subcategories.map((subcategory, subIndex) => (
                  <Collapsible
                    key={subIndex}
                    className="w-full"
                    open={openSubcategories[subcategory.name]}
                    onOpenChange={() => toggleSubcategory(subcategory.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex w-full items-center justify-between p-2 pl-6 text-sm font-medium"
                      >
                        <span className="text-left truncate mr-2">{subcategory.name}</span>
                        <ChevronRight
                          className={`h-3 w-3 flex-shrink-0 transition-transform duration-200 ${
                            openSubcategories[subcategory.name] ? "rotate-90" : ""
                          }`}
                        />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="space-y-1">
                        {subcategory.courses.map((course, courseIndex) => (
                          <li key={courseIndex}>
                            <Button
                              variant="ghost"
                              className="w-full justify-start text-sm p-2 pl-8"
                              onClick={() => setSelectedCourse(course)}
                            >
                              <span className="truncate">{course}</span>
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </ScrollArea>
      </aside>

      {/* Main content area */}
      <main className="flex-1 overflow-auto p-6">
        {selectedCourse ? (
          <>
            <h1 className="text-2xl font-bold">{selectedCourse}</h1>
            <p className="mt-4">Course content for {selectedCourse} goes here.</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold">Welcome to Your E-Learning Platform</h1>
            <p className="mt-4">Select a course from the sidebar to begin learning.</p>
          </>
        )}
      </main>
    </div>
  )
}