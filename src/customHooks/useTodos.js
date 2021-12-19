import React from "react";
import {useLocalStorage} from './useLocalStorage';

 

function useTodos(){

    const [search, setSearch] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const {item:todos, 
      onSave:saveTodo,
      sincronize: sincronizeTodos, 
      loading,
      error
    } = useLocalStorage("TODO_V1", []);
    
    const completedTodos = todos.filter(todo=>todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
  
    if(!search.length >=1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter(todo=>todo.text.toLowerCase().includes( search.toLowerCase() ))
    }
  
    const onSave =(task)=>{    
      const newTodos = [...todos] 
      newTodos.push({ text: task , completed: false })
      saveTodo(newTodos);
    }

    const onComplete =(task)=>{    
      const newTodos = [...todos]
      const taskIndex = newTodos.findIndex(todo=>todo.text === task);
      newTodos[taskIndex].completed = true;
      saveTodo(newTodos);
    }
  
    const onDelete =(task)=>{    
      const newTodos = [...todos]
      const taskIndex = newTodos.findIndex(todo=>todo.text === task);
      newTodos.splice(taskIndex, 1);
      saveTodo(newTodos);
    }
  
  

    return  {
            loading ,
            error ,
            completedTodos ,
            searchedTodos ,
            search ,
            totalTodos ,
            openModal,
            setOpenModal,
            setSearch ,
            onComplete ,
            onDelete ,
            onSave ,
            sincronizeTodos
        }  

}

export { useTodos };