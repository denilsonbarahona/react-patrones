import React from "react";

function useLocalStorage(itemName, defaultValue){
  
  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>
      {
        try {          
          const localStorageItem = localStorage.getItem(itemName);
          let parsedTodos = JSON.parse(localStorageItem) || defaultValue;
          setItem(parsedTodos);
          setLoading(false);
          setSincronizedItem(true);
        }
        catch(e) {
          setLoading(false);
          setError(e);
        }
      } , 1000);
  },[sincronizedItem])

  const onSave=(newItem)=>{
    try {
      const stringified = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringified);
      setItem(newItem);
    } 
    catch(e) {
      setError(e)
    }
  }

  const sincronize = ()=> {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
          item, 
          loading,
          error,
          onSave,
          sincronize
        };
}

export { useLocalStorage }