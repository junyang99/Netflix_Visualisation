import React from 'react'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}
const Popup = ({ isOpen, onClose, children }: PopupProps) => {
  if (!isOpen) return null

  return (
<div className="fixed inset-0 bg-opacity-20 flex items-center justify-center z-50 backdrop-blur-sm shadow-lg">
<div className=" rounded-xl bg-background p-6 w-11/12 max-w-4xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="float-right text-gray-600 hover:text-gray-800"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="clear-both">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup