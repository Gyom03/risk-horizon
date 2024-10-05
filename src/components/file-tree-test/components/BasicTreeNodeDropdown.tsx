import classNames from "classnames"
import React from "react"
import { DivProps } from "react-html-props"
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowsAltV,
  FaCheckCircle,
  FaCompressAlt,
  FaCompressArrowsAlt,
  FaEllipsisV,
  FaExpandArrowsAlt,
  FaPlus,
  FaRegPlusSquare,
  FaTimesCircle,
  FaTrashAlt,
  FaTrashRestoreAlt,
} from "react-icons/fa"
import styled from "styled-components"
import { TreeNode } from "versatile-tree"
import { TreeController, UNDEFINED_ID } from "../hooks/useTreeController"
import { TreeShortcuts } from "../hooks/useTreeShortcuts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface BasicTreeNodeDropdownProps extends DivProps {
  node: TreeNode
  treeController: TreeController
  shortcuts?: TreeShortcuts
}

export const BasicTreeNodeDropdown = ({
  node,
  treeController,
  shortcuts,
  ...props
}: BasicTreeNodeDropdownProps) => {
  const [showDeletionPrompt, setShowDeletionPrompt] = React.useState(false)
  const isExpanded = treeController.expansions.isExpandedNode(node)

  const handlePromptDeleteEntry = () => {
    if (!node.getData()[treeController.options.titlePropertyName]) {
      handleConfirmDeleteEntry()
    } else {
      setShowDeletionPrompt(true)
      treeController.focus.setFocusedNode(node)
    }
  }

  const handleConfirmDeleteEntry = () => {
    treeController.mutations.deleteNode(node)
    setShowDeletionPrompt(false)
  }

  const handleCancelDeleteEntry = () => {
    setShowDeletionPrompt(false)
    treeController.focus.setFocusedNode(node)
  }
  //
  const handleMoveLeft = React.useCallback(() => {
    treeController.mutations.moveNodeLeft(node)
  }, [treeController.mutations, node])

  const handleMoveDown = React.useCallback(() => {
    treeController.mutations.moveNodeDown(node)
  }, [treeController.mutations, node])

  const handleMoveUp = React.useCallback(() => {
    treeController.mutations.moveNodeUp(node)
  }, [treeController.mutations, node])

  const handleMoveRight = React.useCallback(() => {
    treeController.mutations.moveNodeRight(node)
  }, [treeController.mutations, node])

  const handleNewItemBelow = () => {
    const newNodeData = treeController.options.createNewData()
    const newNode = treeController.mutations.addSiblingNodeData(
      node,
      newNodeData
    )
    treeController.focus.setFocusedNode(newNode)
  }

  const handleNewItemInside = () => {
    const newNodeData = treeController.options.createNewData()
    const newNode = treeController.mutations.addChildNodeData(node, newNodeData)
    treeController.focus.setFocusedNode(newNode)
  }

  const handleEllipsisMouseDown = () => {
    setShowDeletionPrompt(false)
  }

  const handleToggleExpand = () => {
    treeController.expansions.toggleExpandNode(node)
  }

  const handleExpandAll = () => {
    treeController.expansions.expandAll()
  }

  const handleCollapseAll = () => {
    treeController.expansions.collapseAll()
  }

  const dropdownItemClassName =
    "d-flex justify-content-between align-items-center gap-4 small w-100"
  const dropdownItemLabelClassName = "d-flex align-items-center gap-2"
  const dropdownItemShortcutClassName =
    "d-flex align-items-center small text-muted"
  return (
    <div
      {...props}
      className={classNames(props.className)}
      style={{ ...props.style }}
    >
      <NoCaretAfterToggle>
        <DropdownMenu>
          <DropdownMenuTrigger
            id={`dropdown-menu-${
              node.getData()[treeController.options.idPropertyName] ??
              UNDEFINED_ID
            }`}
            style={{ cursor: "pointer" }}
            onMouseDown={() => handleEllipsisMouseDown()}
            onTouchStartCapture={() => handleEllipsisMouseDown()}
          >
            <FaEllipsisV />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleNewItemBelow()}
              disabled={false}
            >
              <div className={dropdownItemLabelClassName}>
                <FaPlus /> New item below
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.newItemBelowDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleNewItemInside()}
              disabled={false}
            >
              <div className={dropdownItemLabelClassName}>
                <FaRegPlusSquare /> New item inside
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.newItemInsideDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleMoveUp()}
              disabled={!node.getLeftSibling()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaArrowUp /> Move up
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.moveNodeUpDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleMoveDown()}
              disabled={!node.getRightSibling()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaArrowDown /> Move down
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.moveNodeDownDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleMoveLeft()}
              disabled={!!node.getParent()?.isRoot()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaArrowLeft /> Move out
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.moveNodeLeftDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleMoveRight()}
              disabled={!node.getLeftSibling()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaArrowRight /> Move in
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.moveNodeRightDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleToggleExpand()}
              disabled={!isExpanded && !node.hasChildren()}
            >
              <div className={dropdownItemLabelClassName}>
                {isExpanded && (
                  <>
                    <FaCompressAlt style={{ transform: "rotate(135deg)" }} />{" "}
                    Collapse
                  </>
                )}
                {!isExpanded && (
                  <>
                    <FaArrowsAltV /> Expand
                  </>
                )}
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.toggleExpandNodeDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleExpandAll()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaExpandArrowsAlt /> Expand all
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.expandAllDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={dropdownItemClassName}
              onClick={() => handleCollapseAll()}
            >
              <div className={dropdownItemLabelClassName}>
                <FaCompressArrowsAlt /> Collapse all
              </div>
              <div className={dropdownItemShortcutClassName}>
                {shortcuts?.collapseAllDisplay}
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {treeController.mutations.deletions.length > 0 && (
              <DropdownMenuItem
                className={classNames(dropdownItemClassName)}
                onClick={() => {
                  const recoveredNode =
                    treeController.mutations.recoverDeletion()
                  treeController.focus.setFocusedNode(recoveredNode)
                }}
              >
                <div className={dropdownItemLabelClassName}>
                  <FaTrashRestoreAlt /> Recover
                </div>
                <div className={dropdownItemShortcutClassName}>
                  {shortcuts?.recoverDeletionDisplay}
                </div>
              </DropdownMenuItem>
            )}
            {!showDeletionPrompt && (
              <DropdownMenuItem
                className={dropdownItemClassName}
                onClick={(e) => {
                  handlePromptDeleteEntry()
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <div className={dropdownItemLabelClassName}>
                  <FaTrashAlt /> Delete
                </div>
                <div className={dropdownItemShortcutClassName}>
                  {shortcuts?.deleteItemDisplay}
                </div>
              </DropdownMenuItem>
            )}
            {showDeletionPrompt && (
              <DropdownMenuItem
                className={classNames(dropdownItemClassName, "text-danger")}
                onClick={() => handleConfirmDeleteEntry()}
              >
                <div className={dropdownItemLabelClassName}>
                  <FaCheckCircle /> Confirm
                </div>
                <div className={dropdownItemShortcutClassName}></div>
              </DropdownMenuItem>
            )}
            {showDeletionPrompt && (
              <DropdownMenuItem
                className={classNames(dropdownItemClassName, "text-secondary")}
                onClick={() => handleCancelDeleteEntry()}
              >
                <div className={dropdownItemLabelClassName}>
                  <FaTimesCircle /> Cancel{" "}
                </div>
                <div className={dropdownItemShortcutClassName}></div>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </NoCaretAfterToggle>
    </div>
  )
}

const NoCaretAfterToggle = styled.div`
  .dropdown-toggle::after {
    display: none;
  }
`
