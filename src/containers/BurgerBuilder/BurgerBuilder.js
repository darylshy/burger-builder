import React, { Component, Fragment } from "react";
import Burger from "../../components/Burger/Burger";
import { INGREDIENTS, INGREDIENTS_PRICES } from "../../constants";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import BurgerPrice from "../../components/Burger/BurgerPrice/BurgerPrice";
import OrderButton from "../../components/Burger/BuildControls/BuildControl/OrderButton/OrderButton";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      [INGREDIENTS.MEAT]: 0,
      [INGREDIENTS.BACON]: 0,
      [INGREDIENTS.CHEESE]: 0,
      [INGREDIENTS.SALAD]: 0
    },
    tax: 7,
    purchaseable: false,
    showModal: false
  };

  handleAddIngredient = ({
    target: {
      dataset: { type: ingredient }
    }
  }) => {
    this.setState(
      prev => {
        return {
          ingredients: {
            ...prev.ingredients,
            [ingredient]: prev.ingredients[ingredient] + 1
          }
        };
      },
      () => {
        this.setPurchasable();
      }
    );
  };

  handleRemoveIngredient = ({
    target: {
      dataset: { type: ingredient }
    }
  }) => {
    this.setState(
      prev => {
        return {
          ingredients: {
            ...prev.ingredients,
            [ingredient]:
              prev.ingredients[ingredient] === 0
                ? 0
                : prev.ingredients[ingredient] - 1
          }
        };
      },
      () => {
        this.setPurchasable();
      }
    );
  };

  getDisabledButtons = () => {
    const disabled = {};
    for (let ingredient in this.state.ingredients) {
      disabled[ingredient] = this.state.ingredients[ingredient] === 0;
    }
    return disabled;
  };

  getSubtotal = () => {
    let subtotal = 4;
    const { ingredients } = this.state;
    for (let ingredient in ingredients) {
      let price = INGREDIENTS_PRICES[ingredient.toUpperCase()];
      const quantity = ingredients[ingredient];
      //first burger patty is free
      if (ingredient === INGREDIENTS.MEAT && quantity > 1) {
        subtotal += price * (quantity - 1);
      } else if (ingredient === INGREDIENTS.MEAT && quantity === 1) {
        price = 0;
        subtotal += price * quantity;
      } else {
        subtotal += price * quantity;
      }
    }
    return subtotal;
  };

  setPurchasable = () => {
    const purchaseable = !!Object.values(this.state.ingredients).reduce(
      (acc, ing) => {
        return acc + ing;
      },
      0
    );
    this.setState(() => {
      return {
        purchaseable
      };
    });
  };

  handleDismissModal = () => {
    this.setState(() => {
      return {
        showModal: false
      };
    });
  };

  handleShowModal = () => {
    this.setState(() => {
      return {
        showModal: true
      };
    });
  };

  render() {
    const subtotal = this.getSubtotal();
    return (
      <Fragment>
        <Modal
          handleShowModal={this.handleShowModal}
          handleDismissModal={this.handleDismissModal}
          showModal={this.state.showModal}
          purchaseable={this.state.purchaseable}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            subtotal={subtotal}
            tax={this.state.tax}
          />
        </Modal>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <BurgerPrice subtotal={subtotal} tax={this.state.tax} />
        <BuildControls
          handleAddIngredient={this.handleAddIngredient}
          handleRemoveIngredient={this.handleRemoveIngredient}
          disabled={this.getDisabledButtons()}
          purchaseable={this.state.purchaseable}
        />
        <OrderButton
          purchaseable={this.state.purchaseable}
          handleShowModal={this.handleShowModal}
        />
      </Fragment>
    );
  }
}
