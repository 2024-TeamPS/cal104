import React from 'react'
import { ModalProps } from '../../types/components/ModalProps'

const Modal = ({ isOpen, onClose, className, children }: ModalProps) => {

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-transparent"
      onClick={handleOutsideClick}
    >
      <div className={`bg-white rounded shadow-lg ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal
