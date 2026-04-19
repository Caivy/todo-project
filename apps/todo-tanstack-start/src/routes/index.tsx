import { createFileRoute } from '@tanstack/react-router'
import todosvg from '@/assets/todo.svg'
import { useState } from 'react'
import { createTodo } from '#/data/todo'
import TodoTable from '#/components/todoTable'
import { Button } from '@repo/ui/components/ui/button'
import { useQueryClient } from '@tanstack/react-query'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [todoValue, setTodoValue] = useState('')

  const queryClient = useQueryClient()

  return (
    <main className="page-warp min-h-screen px-4 items-center justify-center bg-gray-800">
      <div className="flex flex-col gap-7 min-h-screen items-center justify-center ">
        <h1 className="font-bold text-white text-2xl">
          Learning Tanstack Todo Project
        </h1>
        <div className="flex flex-row gap-3">
          <div className="flex items-center rounded-md bg-white pl-3 gap-2 outline-1 outline-offset-1 outline-neutral-950 ">
            <img
              src={todosvg}
              width={32}
              className="shrink-0 text-base select-none"
            ></img>
            <input
              id="todo"
              name="todo"
              value={todoValue}
              className="min-w-0 block grow py-2.5 pr-3 pl-4 text-base"
              placeholder="Take out the trash...."
              onChange={(e) => setTodoValue(e.target.value)}
            ></input>
          </div>
          <Button
            type="submit"
            className="w-24 h-14 bg-green-500 font-bold"
            onClick={async () => {
              await createTodo({ data: { name: todoValue } })
              setTodoValue('')
              queryClient.invalidateQueries({ queryKey: ['todo'] })
            }}
          >
            Confirm
          </Button>
          <Button
            type="reset"
            className="w-24 h-14 bg-red-500 font-bold"
            onClick={() => setTodoValue('')}
          >
            Reset
          </Button>
        </div>
        <TodoTable />
      </div>
    </main>
  )
}
