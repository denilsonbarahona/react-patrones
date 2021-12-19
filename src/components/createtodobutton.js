import React from "react"; 
import "../styles/CreateTodoButton.css";

function CreateTodoButton({setOpenModal}){


    const onClickButton = ()=> {
        setOpenModal(prevState => !prevState)
    }

    return(
        <button 
            onClick={onClickButton}
            className="CreateTodoButton">
            +
        </button>) 
}

export {CreateTodoButton};