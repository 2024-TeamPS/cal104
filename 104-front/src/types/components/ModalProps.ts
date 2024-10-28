export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  className?: string
  children: React.ReactNode
}
