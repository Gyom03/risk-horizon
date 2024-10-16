"use client"
import { Button } from "@/components/ui/button"
import { useClerk } from "@clerk/nextjs"
import { useMutation, useQuery } from "@tanstack/react-query"
import Accordion from "@yoopta/accordion"
import ActionMenu, { DefaultActionMenuRender } from "@yoopta/action-menu-list"
import Blockquote from "@yoopta/blockquote"
import Callout from "@yoopta/callout"
import Code from "@yoopta/code"
import Divider from "@yoopta/divider"
import YooptaEditor, { createYooptaEditor } from "@yoopta/editor"
import Embed from "@yoopta/embed"
import { html } from "@yoopta/exports"
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings"
import Image from "@yoopta/image"
import Link from "@yoopta/link"
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool"
import { BulletedList, NumberedList, TodoList } from "@yoopta/lists"
import {
  Bold,
  CodeMark,
  Highlight,
  Italic,
  Strike,
  Underline,
} from "@yoopta/marks"
import Paragraph from "@yoopta/paragraph"
import Table from "@yoopta/table"
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar"
import Video from "@yoopta/video"
import axios from "axios"
import { Pen, X } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { toast } from "sonner"

interface EditorProps {
  id: string
}

export default function Editor({ id }: EditorProps) {
  const { session } = useClerk()
  const [isEditing, setIsEditing] = useState(false)

  const editor = useMemo(() => createYooptaEditor(), [isEditing])

  useEffect(() => {
    if (isEditing) {
      SetContent()
    }
  }, [isEditing])

  const plugins = [
    Paragraph,
    Table,
    Divider.extend({
      elementProps: {
        divider: (props) => ({
          ...props,
          color: "#007aff",
        }),
      },
    }),
    Accordion,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Blockquote,
    Callout,
    NumberedList,
    BulletedList,
    TodoList,
    Code,
    Link,
    Embed,
    Image,

    Video,
  ]
  const TOOLS = {
    ActionMenu: {
      tool: ActionMenu,
      render: DefaultActionMenuRender,
    },
    LinkTool: {
      tool: LinkTool,
      render: DefaultLinkToolRender,
    },
    Toolbar: {
      tool: Toolbar,
      render: DefaultToolbarRender,
    },
  }

  const { mutate } = useMutation({
    mutationKey: ["edit-course"],
    mutationFn: async (text: string) => {
      const { data } = await axios.post("/api/edit-course", {
        id: id,
        text: text,
      })
      refetch()
      return data
    },
    onSuccess: () => {
      toast.success("Course updated")
    },
    onError: () => {
      toast.error("An error occurred while updating the course")
    },
  })

  console.log(id)
  const { data, isError, refetch } = useQuery({
    queryKey: ["get-course"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/get-course?id=${id}`)
      const CourseDataParsed = data as { Content: string }
      editor.setEditorValue(html.deserialize(editor, CourseDataParsed.Content))
      return data
    },
    retry: 1,
    refetchOnWindowFocus: false,
  })

  function SetContent() {
    const CourseDataParsed = data as { Content: string }
    editor.setEditorValue(html.deserialize(editor, CourseDataParsed.Content))
  }

  useEffect(() => {
    refetch()
  }, [id])

  if (isError) {
    editor.setEditorValue(
      html.deserialize(
        editor,
        `<body id="yoopta-clipboard" data-editor-id="3025525a-c170-4d82-8ee3-bbda3f6da728"></body>`
      )
    )
  }

  const exportHTML = () => {
    const data = editor.getEditorValue()
    const htmlString = html.serialize(editor, data)
    mutate(htmlString)
  }

  //Cacher l'erreur chiante de la console
  const originalConsoleError = console.error
  console.error = (...args) => {
    if (
      (typeof args[0] === "string" &&
        (args[0].includes("Warning: Prop") ||
          args[0].includes("[Report Only]") ||
          args[0].includes("Warning: Input contains an input"))) ||
      args[0].includes("Error: Hydration failed`")
    ) {
      return
    }
    originalConsoleError(...args)
  }
  return (
    <>
      <div className="absolute right-10 top-10 ">
        {session?.user.publicMetadata.role == "admin" && (
          <Button
            onClick={() => {
              if (isEditing) {
                exportHTML()
              }
              setIsEditing(!isEditing)
            }}
          >
            {isEditing ? <X /> : <Pen />}
          </Button>
        )}
      </div>
      <YooptaEditor
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        key={isEditing ? "editable" : "readonly"}
        marks={[Bold, Highlight, CodeMark, Strike, Underline, Italic]}
        readOnly={!isEditing}
      />
    </>
  )
}
