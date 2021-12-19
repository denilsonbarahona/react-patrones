import React from "react";
import "../styles/TodoList.css";

function TodoList(props){
    return ( 
        <section className="TodoList-container">
            { props.error && props.onError() }
            { props.loading && props.onLoading() }
            { (!props?.loading && !props?.totalTodos && !props?.error) && props.onEmptyTodos() }
            { (!props.searchedTodos.length && !props.loading && props?.totalTodos)  && props.onEmptySearch(props.search)}            
            { !props.loading && props.searchedTodos.map( props.children || props.Render  )   }
        </section> 
    )
}

export { TodoList } 