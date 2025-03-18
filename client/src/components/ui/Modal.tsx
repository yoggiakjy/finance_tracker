import { createPortal } from "react-dom";

const Modal = ({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={`absolute z-100 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center bg-gradient-to-r from-slate-950 via-slate-700 to-slate-950 rounded-lg shadow-lg text-center text-neutral-50 px-[3rem] ${className} `}
    >
      {children}
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
};

export default Modal;
