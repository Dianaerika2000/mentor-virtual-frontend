import { useState } from 'react'
import type { MentorMessage } from '../types/mentor.types'

const MESSAGES: MentorMessage[] = [
  { text: '¡Hola! ¿Listo para estudiar hoy? 💪', context: 'welcome' },
  { text: '¡Llevas una racha increíble! Seguí así 🔥', context: 'streak' },
  { text: 'No pasa nada, mañana retomamos juntos 😊', context: 'streak_lost' },
  { text: '¡Tenés un desafío nuevo esperándote!', context: 'challenge' },
  { text: '¡Desbloqueaste un logro! Sos un crack 🏅', context: 'achievement' },
]

export function useMentor() {
  const [currentMessage, setCurrentMessage] = useState(MESSAGES[0])
  const [isVisible, setIsVisible] = useState(false)

  const showMessage = (context: MentorMessage['context']) => {
    const msg = MESSAGES.find(m => m.context === context) ?? MESSAGES[0]
    setCurrentMessage(msg)
    setIsVisible(true)

    // Auto-ocultar después de 4 segundos
    setTimeout(() => setIsVisible(false), 4000)
  }

  const toggleBubble = () => setIsVisible(prev => !prev)

  return { currentMessage, isVisible, showMessage, toggleBubble }
}