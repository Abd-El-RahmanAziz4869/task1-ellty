"use client"
import ButtonPanel from "./button-panel"
import CheckboxPanel from "./checkbox-panel"
import PageSelector from "./page-selector"

export default function TaskManagementInterface() {
  return (
    <div className="flex gap-8 max-w-7xl mx-auto">
      {/* Left Panel - Buttons */}
      <ButtonPanel />

      {/* Middle Panel - Checkboxes */}
      <CheckboxPanel />

      {/* Right Panel - Page Selector */}
      <PageSelector />
    </div>
  )
}
