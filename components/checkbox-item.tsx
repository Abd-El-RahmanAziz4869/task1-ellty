"use client"

interface CheckboxItemProps {
  id: number
  label: string
  checked: boolean
  partial?: boolean
  onChange: (id: number) => void
}

export default function CheckboxItem({ id, label, checked, partial, onChange }: CheckboxItemProps) {
  return (
    <div className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-50 transition-colors">
      <div className="relative w-5 h-5 flex-shrink-0">
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={checked || partial}
          onChange={() => onChange(id)}
          className="w-5 h-5 cursor-pointer accent-blue-500 rounded"
        />
        {partial && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3 h-0.5 bg-gray-400 rounded-sm"></div>
          </div>
        )}
      </div>
      <label htmlFor={`checkbox-${id}`} className="text-sm text-gray-600 cursor-pointer flex-1">
        {label}
      </label>
    </div>
  )
}
