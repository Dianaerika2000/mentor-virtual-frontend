import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export const Avatar = () => {
  return (
    <DotLottieReact
      src="/assets/avatar.json"
      loop
      autoplay
      style={{ width: '150px', height: '150px' }}
    />
  )
}