import React from "react"; 
import "../styles/TodoCounter.css"
 


function TodoCounter({completedTodos,  totalTodos, loading}){
    
    return (
        <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
            You have completed {completedTodos} of {totalTodos} TODOs
        </h2>
    )
}


export {TodoCounter};