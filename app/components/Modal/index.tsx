import {Dialog, DialogBackdrop, DialogPanel} from "@headlessui/react";
import type {ReactNode} from "react";
import clsx from "clsx";

const Modal = ({isOpen, onClose, children, containerStyles = ''}: {isOpen: boolean, onClose: () => void, children: ReactNode, containerStyles?: string}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[9999999]">
      <DialogBackdrop
        transition
        className="backdrop-blur fixed inset-0 bg-[#00000080] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          <DialogPanel
            transition
            className={clsx(
              "h-fit relative transform overflow-hidden rounded-lg bg-[#161616] border-[1px] border-[#EDEFF110] py-9 px-5  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
              containerStyles,
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
};

export default Modal;