import React from 'react';
import classes from './BuildControl.css'
const buildControl =(props) =>{
   return (
    <div>
        <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick = {props.added}>  More </button>
        <button className={classes.More} 
            disabled={props.disabled} 
            onClick = {props.removed}> Less </button>
    </div>
    </div>
   ) 
}
export default buildControl;