export interface MentorMessage {
  text: string
  context: 'welcome' | 'streak' | 'streak_lost' | 'challenge' | 'achievement'
}

export interface MentorAvatarProps {
  showBubble?: boolean
}