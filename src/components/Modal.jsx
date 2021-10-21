import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css";




export function Modal ({closeModal,children}) {

    const modalRoot = useRef(document.querySelector("#modal-root"));

    const handleKeyDown = (e) => {
        if (e.code === "Escape") { closeModal() }
    };

    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return  () =>  window.removeEventListener('keydown', handleKeyDown) 
    });


    const handleBackdropClick = (ev) => {
        if (ev.target === ev.currentTarget) {
            closeModal()
        }
    };
    
    
    return createPortal(
        <div
            className={style.overlay}
            onClick={handleBackdropClick}
        >
            <div className={style.modalContainer}>
                {children}
            </div>
            <button type="button" onClick={closeModal} className={style.closeButton}>Close</button>
        </div>,
        modalRoot.current
    );
}


