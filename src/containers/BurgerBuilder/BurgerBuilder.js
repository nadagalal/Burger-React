import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 1,
    meat : 3,
    cheese : 2 ,
    bacon : 4
}
class BurgerBuilder extends Component{
    state = {
        ingredients :{
            "salad" : 0,
            "meat" : 0,
            "cheese" :0 ,
            "bacon" : 0
        },
        totalPrice : 4
    }
    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        let updatedCount =  oldCount + 1 
        var  ingredients = {...this.state.ingredients}
        ingredients[type] = updatedCount;
        const price = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + price
        this.setState({
            ingredients : ingredients,
            totalPrice : newPrice
        })
        
    }
    removeIngredientHandler = (type) =>{
      const oldCount = this.state.ingredients[type]
      if (oldCount > 0){
        const updatedCount = oldCount - 1
        var updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount
        const oldPrice = INGREDIENT_PRICES[type]
        const updatedPrice = this.state.totalPrice - oldPrice
        this.setState ({
            ingredients : updatedIngredients,
            totalPrice : updatedPrice
        })
      }
    

    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
           <Aux>
               <Burger ingredients={this.state.ingredients}> </Burger>
               <BuildControls ingredientAdded = {this.addIngredientHandler}
               ingredientRemover = {this.removeIngredientHandler}
               //ingredients = {this.state.ingredients}
               disabled = {disabledInfo}
               price = {this.state.totalPrice}>
               </BuildControls>
           </Aux>
        )
    }
}
export default BurgerBuilder;