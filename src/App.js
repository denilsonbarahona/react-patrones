import React from 'react';
import {TodoCounter} from './components/TodoCounter'; 
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import { TodoHeader } from './components/TodoHeader';
import {CreateTodoButton} from './components/createtodobutton';
import {Modal} from './components/Modal';
import {CreateForm} from './components/CreateTodoForm';
import { useTodos } from './customHooks/useTodos';
import { TodoError} from './components/TodoError';
import { TodoLoading} from './components/TodoLoading';
import { EmptyTodo } from './components/EmptyTodo';
import {ChangeAlert} from './storageAlert';


function App() {
  const {
      loading, 
      error, 
      searchedTodos, 
      completedTodos, 
      totalTodos,
      search, 
      openModal,
      onDelete, 
      onComplete,
      setSearch, 
      onSave, 
      setOpenModal,
      sincronizeTodos
  } = useTodos();

  return (
    <React.Fragment>
            <TodoHeader loading = {loading}>
                <TodoCounter
                    completedTodos = {completedTodos} 
                    totalTodos = {totalTodos}                    
                />
                <TodoSearch
                    search = {search}                     
                    setSearch = {setSearch}
                /> 
            </TodoHeader>
            <TodoList 
                error = {error}
                loading = {loading}
                searchedTodos = {searchedTodos}
                totalTodos = {totalTodos}
                search = {search}
                onError = {()=><TodoError />}
                onLoading = {()=><TodoLoading />}
                onEmptyTodos = {()=><EmptyTodo/>}
                onEmptySearch = {(SearchText)=><p>There was not results for {SearchText}</p>}
              /*   Render={(todo, i)=>(
                    <TodoItem 
                        key={i}  
                        onComplete={onComplete} 
                        onDelete={onDelete}            
                        completed={todo.completed} 
                        text={todo.text}/>
                )} */
            >
                {(todo, i)=>(
                    <TodoItem 
                        key={i}  
                        onComplete={onComplete} 
                        onDelete={onDelete}            
                        completed={todo.completed} 
                        text={todo.text}/>
                )}
            </TodoList>
{/*             <TodoList>
                {loading && 
                    <React.Fragment>
                        <Skeleton/>
                        <Skeleton/>
                    </React.Fragment>}
                {(!loading && error) && <p>Desesperate, !hubó un error! XD...</p>}
                {(!loading && !error && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}

                {searchedTodos.map((todo, i)=>(
                    <TodoItem 
                        key={i}  
                        onComplete={onComplete} 
                        onDelete={onDelete}            
                        completed={todo.completed} 
                        text={todo.text}/>
                )) }
            </TodoList> */} 
            {openModal && (
                <Modal>                    
                    <CreateForm
                    onSave = {onSave} 
                    setOpenModal = {setOpenModal}
                    />
                </Modal>            
            )}
            <ChangeAlert
                sincronize = {sincronizeTodos}
            />
            <CreateTodoButton 
              setOpenModal = {setOpenModal}
            />
        </React.Fragment> );
}

export default App;
