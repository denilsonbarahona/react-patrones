import React from "react";

function useStorageListener(sincronize) {
    
        const [storageChange, setStorageChange] = React.useState(false);
        
        window.addEventListener("storage", (change)=>{
            if(change.key ==="TODO_V1") {
                console.log("hubo cambios en TODOS_V1");
                setStorageChange(true);
            }
        });
        

        const toggleShow =()=> {
            setStorageChange(false);
            sincronize();
        }

        return {
            show: storageChange, 
            toggleShow
        }


/*         return (
            <WrappedComponent 
                show={storageChange}
                toggleShow={toggleShow}
            />
        ); */
}

export {useStorageListener};