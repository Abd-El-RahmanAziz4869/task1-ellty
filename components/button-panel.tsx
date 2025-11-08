"use client"

import { Button } from "@/components/ui/button"

export default function ButtonPanel() {
  const handleDoneClick = () => {
    console.log("Done button clicked")
  }

  return (
    <div className="flex flex-col gap-4 p-6 border-2 border-dashed border-purple-400 rounded-lg bg-white min-w-fit">
      <Button
        onClick={handleDoneClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-md w-48"
      >
        Done
      </Button>
      <Button
        onClick={handleDoneClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-md w-48"
      >
        Done
      </Button>
      <Button
        onClick={handleDoneClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-md w-48"
      >
        Done
      </Button>
    </div>
  )
}
