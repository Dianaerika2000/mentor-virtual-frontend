interface MentorBubbleProps {
  message: string
  visible: boolean
}

export function MentorBubble({ message, visible }: MentorBubbleProps) {
  if (!visible) return null

  return (
    <div className="
      absolute bottom-20 right-0
      bg-white rounded-2xl rounded-br-none
      px-4 py-3 shadow-lg
      max-w-50 w-max
      text-sm text-gray-700 font-medium
      animate-fade-in
      border border-gray-100
    ">
      {message}
      {/* colita de la burbuja */}
      <div className="
        absolute -bottom-2 right-4
        w-0 h-0
        border-l-8 border-l-transparent
        border-t-8 border-t-white
        border-r-8 border-r-transparent
      "/>
    </div>
  )
}