import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { MentorBubble } from '../MentorBubble'
import { useMentor } from '../../hooks/useMentor'
import type { MentorAvatarProps } from '../../types/mentor.types'

export function MentorAvatar({ animationSrc, showBubble = true }: MentorAvatarProps) {
  const { currentMessage, isVisible, toggleBubble } = useMentor()

  return (
    // Contenedor flotante — fixed en esquina inferior derecha
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end">

      {/* Burbuja de mensaje */}
      {showBubble && (
        <MentorBubble message={currentMessage.text} visible={isVisible} />
      )}

      {/* Avatar */}
      <button
        onClick={toggleBubble}
        className="
          w-20 h-20
          rounded-full
          bg-white shadow-xl
          border-2 border-indigo-100
          overflow-hidden
          hover:scale-105 active:scale-95
          transition-transform duration-200
          flex items-center justify-center
        "
        aria-label="Mentor virtual"
      >
        {animationSrc ? (
          <DotLottieReact
            src={animationSrc}
            loop
            autoplay
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          // Placeholder hasta que tu compañera traiga el archivo
          <div className="
            w-full h-full
            bg-linear-to-br from-indigo-400 to-purple-500
            flex items-center justify-center
            text-3xl
          ">
            🤖
          </div>
        )}
      </button>
    </div>
  )
}