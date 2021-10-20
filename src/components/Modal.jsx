// import { useEffect } from "react";
import { createPortal } from "react-dom";
import style from "./style.module.css"


const modalRoot = document.querySelector("#modal-root");
export function Modal ({toggleModal,children}) {

    const handleKeyDown = (e) => {
        if (e.code === "Escape") { toggleModal() }
    };

    window.addEventListener('keydown', handleKeyDown);
    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeyDown)
    // }, []);

    // useEffect(() => { return () => { window.removeEventListener('keydown', handleKeyDown);console.log("object") } },[]);


    const handleBackdropClick = (ev) => {
        if (ev.target === ev.currentTarget) {
        toggleModal()
    } }
    
    
        return createPortal(
            <div
                className={style.overlay}
                onClick={handleBackdropClick}
            >
            <div className={style.modalContainer}>
            {children}
                </div>
                <button type="button" onClick={toggleModal} className={style.closeButton}>Close</button>
            </div>,
            modalRoot
    )  
}


