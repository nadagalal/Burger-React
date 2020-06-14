import React from 'react';
import classes from './BuildControls.css'
import BuildControl from '../BuildControl/BuildControl'

const controls = [
    {label : 'Salad' , type:'salad'},
    {label : 'Cheese' , type:'cheese'},
    {label : 'Bacon' , type:'bacon'},
    {label : 'Meat' , type:'meat'}
]
const buildControls = (props) =>{
   return( <div className={classes.BuildControls}>
       <p> Current Price : <strong>{props.price.toFixed(2)} $</strong></p>
        {controls.map(control => (
            <BuildControl key={control.label} label = {control.label}
            added = { () => {props.ingredientAdded(control.type)}}
            removed = { () => {props.ingredientRemover(control.type)}}
          //  disabled =  {props.ingredients[control.type] === 0}
             disabled = {props.disabled[control.type]}
            >
  
            </BuildControl>
            ))}
    </div>
   )

}
export default buildControls;