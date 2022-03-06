import { createUndoRedo } from "react-undo-redo"

export default function UndoRedoSystem() {
    const { UndoRedoProvider, usePresent, useUndoRedo } = createUndoRedo(reducer)

    function Component() {
        const [undo, redo] = useUndoRedo()

  return (
    <>
      <button disabled={!undo.isPossible} onClick={() => undo()}>
        Undo
      </button>

      <button disabled={!redo.isPossible} onClick={() => redo()}>
        Redo
      </button>
    </>
  )
  }
}
