import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({sincronize}) {
    const {show, toggleShow} = useStorageListener(sincronize)

    if(show) {
        return  (
            <div>
                <p>Hubo cambios</p>
                <button
                    onClick={()=>toggleShow()}
                >
                    Volver a cargar
                </button>
            </div>
        );
    }
    return null;
}

/* const ChangeAlertWithStorageListener = useStorageListener(ChangeAlert);

export {ChangeAlertWithStorageListener};
 */

export { ChangeAlert }