"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function PageSelector() {
  const [currentPage, setCurrentPage] = useState<string | null>("Page 1")

  const pages = [
    { id: "all", label: "All pages" },
    { id: "1", label: "Page 1" },
    { id: "2", label: "Page 2" },
    { id: "3", label: "Page 3" },
    { id: "4", label: "Page 4" },
  ]

  const handlePageSelect = (id: string, label: string) => {
    if (id === "all") {
      setCurrentPage(null)
    } else {
      setCurrentPage(label)
    }
  }

  const handleDone = () => {
    console.log("Page selector done:", currentPage)
  }

  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-lg border border-gray-200 w-80">
      <div className="flex flex-col gap-4">
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => handlePageSelect(page.id, page.label)}
            className={`text-left px-4 py-3 rounded-md transition-all ${
              (page.id === "all" && currentPage === null) || (page.id !== "all" && currentPage === page.label)
                ? "bg-blue-100 text-blue-900 font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page.label}
          </button>
        ))}
      </div>

      <Button onClick={handleDone} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium w-full py-3">
        Done
      </Button>
    </div>
  )
}
