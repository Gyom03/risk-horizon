import {
  BasicTreeNodeComponent,
  defaultTreeControllerOptions,
  TreeController,
  TreeControllerOptions,
  useTreeController,
  useTreeState,
} from "@/components/file-tree-test"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Pen, X } from "lucide-react"
import * as React from "react"
import { toast } from "sonner"

interface props {
  treeData: string
  setselectedid: React.Dispatch<React.SetStateAction<string>>
}

export default function TreeEditorDemo({ treeData, setselectedid }: props) {
  const [treeEditingEnabled, setTreeEditingEnabled] = React.useState(false)
  const treeOptions: TreeControllerOptions = defaultTreeControllerOptions
  const jsonObject = JSON.parse(treeData)
  const [tree, setTree] = useTreeState(jsonObject)
  let treeController: TreeController = useTreeController(tree, setTree, treeOptions)
  //use treenode to set the tree data

  //get all the tree data

  React.useEffect(() => {
    if (!treeController.tree.hasChildren()) {
      const newNodeData = treeController.options.createNewData()
      const node = treeController.mutations.addChildNodeData(treeController.tree, newNodeData)
      treeController.focus.setFocusedNode(node)
    }
  }, [treeController.focus, treeController.mutations, treeController.tree, treeController.options])

  const { mutate } = useMutation({
    mutationKey: ["edit-course-layout"],
    mutationFn: async (element: string) => {
      const { data } = await axios.post("/api/edit-course-layout", {
        content: element,
      })
      return data
    },
    onSuccess: () => {
      toast.success("Course updated")
    },
    onError: () => {
      toast.error("An error occurred while updating the course")
    },
  })

  // Expand all on first render
  React.useEffect(() => {
    treeController.expansions.expandAll()
  }, [])

  React.useEffect(() => {
    if (treeController.focus.focusedId == "UNDEFINED_ID") return
    console.log(treeController.focus.focusedId)
    setselectedid(treeController.focus.focusedId)
  }, [treeController.focus.focusedId])

  return (
    <>
      <BasicTreeNodeComponent
        node={treeController.tree}
        treeController={treeController}
        editable={treeEditingEnabled}
        showBullets={!treeEditingEnabled}
        showPointer={false}
        className="px-4"
      />
      <Button
        className="fixed bottom-2"
        onClick={() => {
          if (treeEditingEnabled) {
            mutate(treeController.tree.toJSON())
          }
          setTreeEditingEnabled(!treeEditingEnabled)
        }}
      >
        {treeEditingEnabled ? <X /> : <Pen />}
      </Button>
    </>
  )
}

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
