import { OctagonXIcon } from "lucide-react"
import { toast } from "sonner"

export const ErrorNotification = (message: string) =>
  toast.custom((id: string | number) => (
    <div
      className="flex w-3xs flex-row items-center gap-3 rounded-md bg-red-700 p-4 text-red-50 shadow-md"
      key={id}
    >
      <OctagonXIcon className="size-6" />
      <span className="font-mono text-lg">{message}</span>
    </div>
  ))
