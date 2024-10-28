import { MouseEventHandler, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
