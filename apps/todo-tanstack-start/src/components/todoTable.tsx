import { getTodoData } from '#/data/todo'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu'
import { Button } from '@repo/ui/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import { MoreHorizontalIcon } from 'lucide-react'

export default function TodoTable() {
  const { data } = useQuery({
    queryKey: ['todo'],
    queryFn: () => getTodoData(),
  })

  return (
    <Table className="text-white">
      {/* <TableCaption>A list of your Todos</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="text-white font-bold">Names</TableHead>
          <TableHead className="text-white font-bold">Created At</TableHead>
          <TableHead className="text-white font-bold">Updated At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((item) => (
          <TableRow key={item.id} className="items-center">
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.createdAt.toLocaleDateString()}{' '}
              {item.createdAt.toLocaleTimeString()}
            </TableCell>
            <TableCell>
              {item.updatedAt.toLocaleDateString()}{' '}
              {item.updatedAt.toLocaleTimeString()}
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontalIcon />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
