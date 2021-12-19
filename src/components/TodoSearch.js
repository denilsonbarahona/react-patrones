 
import React from 'react';
import "../styles/TodoSearch.css";

function TodoSearch({search, setSearch, loading}){

    const onSearchValueChange=(event)=>{
        setSearch(event.target.value)
    }

    return <input 
        onChange={onSearchValueChange}
        className='TodoSearch' 
        value={search}
        disabled={loading}
        placeholder='Cebolla'/>
}

export { TodoSearch}
