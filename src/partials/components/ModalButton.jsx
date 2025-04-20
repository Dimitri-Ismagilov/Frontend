import React from "react"

const ModalButton = ({type, text, onClick}) =>{

    return (
        <button type="button" className={`btn btn-${type}`} onClick={onClick} >
            <span>{text}</span>
        </button>
    )
}

export default ModalButton