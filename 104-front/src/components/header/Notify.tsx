import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { useState } from 'react'
import Modal from '../Modal'

const Notify = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <NotificationsNoneIcon className="!w-8 !h-8 mr-3" onClick={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal} className="bg-white shadow-slate-300 w-80 h-20">
        알림들
      </Modal>
    </>
  )
}
export default Notify
