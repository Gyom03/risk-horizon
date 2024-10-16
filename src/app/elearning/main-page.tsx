"use client"

import { useState } from "react"
import TreeEditorDemo from "./bs-tree"
import Editor from "./editor"
// Mock data for categories and nested courses

interface props {
  treeData: string
}

export default function Component({ treeData }: props) {
  const [selectedID, setselectedid] = useState<string>("0") // Renamed to `setSelectedID`

  console.log(selectedID)
  //a recursive function to find the element with the corresponding id in the tree and add a new course to it

  return (
    <div className="flex h-screen bg-background w-full">
      <div className="flex h-screen bg-background !w-full">
        <aside className="w-5xl border-r overflow-auto">
          <TreeEditorDemo treeData={treeData} setselectedid={setselectedid} />
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

let ELEMENTS: Elements[] = [
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

let initialExpandedItems = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "300"]

export const demoTreeData = {
  title: "root",
  children: [
    {
      id: "0c48797c-619c-4b97-bb02-73e486dfeb26",
      title: "📋 Tasks",
      children: [
        {
          id: "2eaa1992-b2c7-4d4e-b088-1d539dd54be3",
          title: "🧺 Do laundry",
          children: [],
        },
        {
          id: "c90c5af0-46a4-41c8-916d-983b53c44fcd",
          title: "🥘 Meal prep",
          children: [],
        },
        {
          id: "cb82ba25-4283-481c-b7bc-6dd08759b41a",
          title: "🐉 Slay dragon",
          children: [],
        },
      ],
    },
    {
      id: "3a1986b0-7c83-42f4-b5a0-28c86520530e",
      title: "🚗 Errands",
      children: [
        {
          id: "687b042e-58cc-4f8f-9abe-9588ee73a4b3",
          title: "Groceries",
          children: [
            {
              id: "e7a422f6-d6f0-4c71-8545-9b2c71c50491",
              title: "🥩 Meat",
              children: [],
            },
            {
              id: "726e09a7-a385-41ae-80a7-fae8a74747c5",
              title: "🥦 Veggies",
              children: [],
            },
            {
              id: "cfd7fac3-5a25-473f-ba1f-ebc17809c32e",
              title: "🍖 Dragon bait",
              children: [],
            },
          ],
        },
        {
          id: "00a4314c-c140-450a-9a3a-3fdfea87a289",
          title: "Hardware",
          children: [
            {
              id: "39249c4a-4132-4915-8dc9-0422d10b6c73",
              title: "🗡️ Sword",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "47077606-c469-40d9-8c6f-6fa1bff1f76f",
      title: "🧠 Reminders",
      children: [
        {
          id: "5bb660e4-e092-4e06-807e-9540d9d37247",
          title: "📞 Call family",
          children: [],
        },
        {
          id: "2223020c-5041-4a5c-80c3-fabfc4ff13e5",
          title: "🙏 Be grateful",
          children: [],
        },
        {
          id: "802795e1-4223-4922-96a5-714bc84f4465",
          title: "---",
          children: [],
        },
        {
          id: "79080099-692b-420c-90f6-014ca333e98a",
          title: "💤 Get to bed early",
          children: [],
        },
        {
          id: "06de1566-ba9b-48e0-9645-af8b9ab379ea",
          title: "💪 Training",
          children: [],
        },
      ],
    },
  ],
}
