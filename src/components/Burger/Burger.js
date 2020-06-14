import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../BurgerIngredients/BurgerIngredients'
const burger = (props) =>{
    let transformedIngredient = Object.keys(props.ingredients)
    .map(ingredientKey =>{
        return [...Array(props.ingredients[ingredientKey])].map((_,i) => {
         return  <BurgerIngredient key = {ingredientKey + i } type = {ingredientKey}> 
           </BurgerIngredient>

        })
    }).reduce((arr , el) => {
       return arr.concat(el)
    } , []);
    if (transformedIngredient.length === 0){
        transformedIngredient = <p> please start adding ingredients</p>
    }
   
    return(

         <div className={classes.Burger}>
             <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
         </div>
    );
}
export default burger;