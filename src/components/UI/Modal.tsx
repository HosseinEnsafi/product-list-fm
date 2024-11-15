import { ReactNode } from "react"
import { createPortal } from "react-dom"

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div onClick={onClose} className="backdrop"></div>
}

const Modal = ({ children, onClose }: { children: ReactNode; onClose: () => void }) => {
  const portalElement = document.querySelector("#overlays")!

  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<div className="modal">{children}</div>, portalElement)}
    </>
  )
}
export default Modal
