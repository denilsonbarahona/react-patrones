import React from "react";

function useLocalStorage(itemName, defaultValue){
  
  const [state, dispatch] = React.useReducer(reducer, initialState())
  const {
    sincronizedItem ,
    item ,
    loading ,
    error 
  } = state;

///ACTIONS CREATOR
  const onError = (error)=>dispatch({
    type: actionType.error, 
    payload: error,
  });

  const onSuccess =(payload) => dispatch({
    type: actionType.success,
    payload: payload,
  });

  const onSaveStorage =(payload) => dispatch({
    type: actionType.save,
    payload: payload,
  });

  const onSincronize=()=> dispatch({
    type: actionType.sincronize
  })

  React.useEffect(()=>{
    setTimeout(()=>
      {
        try {          
          const localStorageItem = localStorage.getItem(itemName);
          let parsedTodos = JSON.parse(localStorageItem) || defaultValue;
          onSuccess(parsedTodos);
        }
        catch(e) {          
          onError(e)
        }
      } , 1000);
  },[sincronizedItem])

  const onSave=(newItem)=>{
    try {
      const stringified = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringified);      
      onSaveStorage(newItem);
    } 
    catch(e) {
      onError(e) 
    }
  }

  const sincronize = ()=> { 
    onSincronize()
  }

  return {
          item, 
          loading,
          error,
          onSave,
          sincronize
        };
}


const actionType = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE"
}

const reducerObject = (state, payload) =>({
  [actionType.error]: {
    ...state,
    error:payload,
  } ,
  [actionType.success]: {
    ...state,
    item: payload,
    sincronizedItem: true,
    loading: false,
    error: false
  },
  [actionType.save]: {
    ...state,
    item: payload,
  },
  [actionType.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem:false
  }
})

const reducer = (state, action) =>
  reducerObject(state, action.payload)[action.type] || state


const initialState =()=>({
  sincronizedItem: true,
  item: [],
  loading: true,
  error: false
})



export { useLocalStorage }