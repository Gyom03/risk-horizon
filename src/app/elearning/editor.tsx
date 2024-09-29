"use client"
import YooptaEditor, { createYooptaEditor, YooEditor } from "@yoopta/editor"
import { useEffect, useMemo } from "react"
import Paragraph from "@yoopta/paragraph"
import LinkTool, { DefaultLinkToolRender } from "@yoopta/link-tool"
import ActionMenu, { DefaultActionMenuRender } from "@yoopta/action-menu-list"
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar"
import { Bold, Highlight, CodeMark, Strike, Underline, Italic } from "@yoopta/marks"
import Blockquote from "@yoopta/blockquote"
import Embed from "@yoopta/embed"
import Image from "@yoopta/image"
import Link from "@yoopta/link"
import Callout from "@yoopta/callout"
import Video from "@yoopta/video"
import Accordion from "@yoopta/accordion"
import { NumberedList, BulletedList, TodoList } from "@yoopta/lists"
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings"
import Code from "@yoopta/code"
import Table from "@yoopta/table"
import Divider, { DividerCommands } from "@yoopta/divider"
import { html } from "@yoopta/exports"
import { useState } from "react"
export default function Editor() {
  const editor = useMemo(() => createYooptaEditor(), [])
  const [component, setComponent] = useState<JSX.Element | null>(null)
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
    Toolbar: {
      tool: Toolbar,
      render: DefaultToolbarRender,
    },
    ActionMenu: {
      tool: ActionMenu,
      render: DefaultActionMenuRender,
    },
    LinkTool: {
      tool: LinkTool,
      render: DefaultLinkToolRender,
    },
  }

  const importHTML = () => {
    const htmlString = "<h1>First title</h1>"
    const content = html.deserialize(editor, htmlString)

    editor.setEditorValue(content)
  }

  const exportHTML = () => {
    const data = editor.getEditorValue()
    const htmlString = html.serialize(editor, data)
    console.log(htmlString)
  }

  useEffect(() => {
    setComponent(
      <YooptaEditor
        editor={editor}
        plugins={plugins}
        tools={TOOLS}
        marks={[Bold, Highlight, CodeMark, Strike, Underline, Italic]}
        placeholder="Start typing here..."
      />
    )
  }, [])

  return (
    <div>
      <button onClick={exportHTML}>export</button>
      <br />
      <button onClick={importHTML}>Import</button>

      {component}
    </div>
  )
}
