"use client"

import { useState } from "react"
import CheckboxItem from "./checkbox-item"

export default function CheckboxPanel() {
  const [items, setItems] = useState([
    { id: 1, label: "All pages", checked: false },
    { id: 2, label: "All pages", checked: true, partial: true },
    { id: 3, label: "All pages", checked: true },
    { id: 4, label: "All pages", checked: true },
    { id: 5, label: "All pages", checked: true },
    { id: 6, label: "All pages", checked: true },
    { id: 7, label: "All pages", checked: true },
    { id: 8, label: "All pages", checked: false },
    { id: 9, label: "All pages", checked: false },
  ])

  const handleToggle = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, checked: !item.checked, partial: false } : item)))
  }

  return (
    <div className="flex flex-col gap-2 p-6 border-2 border-dashed border-purple-400 rounded-lg bg-white w-64">
      {items.map((item) => (
        <CheckboxItem
          key={item.id}
          id={item.id}
          label={item.label}
          checked={item.checked}
          partial={item.partial}
          onChange={handleToggle}
        />
      ))}
    </div>
  )
}
