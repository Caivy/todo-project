import { createFileRoute } from '@tanstack/react-router'
import todosvg from 'public/todo.svg'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-warp min-h-screen px-4 items-center justify-center">
      <div className="flex flex-col gap-7 min-h-screen items-center justify-center ">
        <h1 className="font-bold text-2xl">Learning Tanstack Todo Project</h1>
        <div className="flex flex-row gap-3">
          <div className="flex items-center rounded-md pl-3 gap-2 outline-1 outline-offset-1 outline-neutral-950 ">
            <img
              src={todosvg}
              width={32}
              className="shrink-0 text-base select-none"
            ></img>
            <input
              id="todo"
              name="todo"
              className="min-w-0 block grow py-2.5 pr-3 pl-4 text-base"
              placeholder="Take out the trash...."
            ></input>
          </div>
          <button className="px-4 rounded-md bg-green-500 text-white">
            Confirm
          </button>
          <button className="px-4 rounded-md bg-red-500 text-white">
            Cancel
          </button>
        </div>
      </div>
    </main>
  )
}
