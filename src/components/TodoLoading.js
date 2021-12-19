import React from "react";
import {Skeleton} from './SkeletonItem';

function TodoLoading(){
    return (
        <React.Fragment>
             <Skeleton/>
             <Skeleton/>
        </React.Fragment>
    )
}

export {TodoLoading}