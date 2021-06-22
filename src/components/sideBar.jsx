import React, { Component } from "react";

import IncludePage from "./includePage";
import ExcludePage from "./excludePage";

class SideBar extends Component {
  state = {
    enterIngredientChkbox: true,
    includePage: true,
    includeIngredients: [{ name: "", amount: "", unit: "" }],
    excludeIngredients: [{ name: "" }],
  };

  render() {
    return (
      <div
        className="mainbox"
        style={{
          marginLeft: "6px",
          overflowY: "auto",
        }}
      >
        <div className="tab">
          <button
            onClick={() => {
              this.setState({ includePage: true }, () => this.renderValues());
            }}
            style={{ width: "49%", whiteSpace: "normal" }}
            className={this.state.includePage ? "active" : ""}
          >
            Include Ingredients
          </button>
          <button
            onClick={() => {
              this.setState({ includePage: false }, () => this.renderValues());
            }}
            style={{ width: "49%", whiteSpace: "normal", float: "right" }}
            className={this.state.includePage ? "" : "active"}
          >
            Exclude Ingredients
          </button>
        </div>
        {this.renderIncludeExcludePage()}
      </div>
    );
  }

  renderIncludeExcludePage = () => {
    if (this.state.includePage === true) {
      return (
        <IncludePage
          enterIngredientChkbox={this.state.enterIngredientChkbox}
          includeIngredients={this.state.includeIngredients}
          onDelete={this.handleDelete}
          onEntry={this.handleEntry}
          onAdd={this.handleAddIngredient}
          onToggleButtonSwitch={this.handleToggleButton}
          onUnitEntry={this.handleUnitEntry}
          onAmountEntry={this.handleAmountEntry}
        />
      );
    } else {
      return (
        <ExcludePage
          excludeIngredients={this.state.excludeIngredients}
          onDelete={this.handleDelete}
          onEntry={this.handleEntry}
          onAdd={this.handleAddIngredient}
        />
      );
    }
  };

  handleToggleButton = () => {
    this.setState(
      { enterIngredientChkbox: !this.state.enterIngredientChkbox },
      () => {
        this.renderValues();
      }
    );
  };

  handleAddIngredient = (isInclude) => {
    if (isInclude) {
      let ingredients = [...this.state.includeIngredients];
      ingredients.push({ name: "", amount: "", unit: "" });
      this.setState({ includeIngredients: ingredients });
    } else {
      let ingredients = [...this.state.excludeIngredients];
      ingredients.push({ name: "" });
      this.setState({ excludeIngredients: ingredients });
    }
  };

  handleEntry = (id, value, isInclude) => {
    let ingredients = isInclude
      ? [...this.state.includeIngredients]
      : [...this.state.excludeIngredients];
    ingredients[id - 1].name = value;
    isInclude
      ? this.setState({ includeIngredients: ingredients })
      : this.setState({ excludeIngredients: ingredients });
    document.getElementById(
      (this.state.includePage ? "include" : "exclude") + "Ingredient " + id
    ).value = value;
  };

  handleDelete = (ingredientId, isInclude) => {
    let ingredients = [];
    const arr = isInclude
      ? this.state.includeIngredients
      : this.state.excludeIngredients;
    for (let i = 0; i < arr.length; i++) {
      let ingredient = arr[i];
      if (i + 1 !== ingredientId) {
        ingredients.push(ingredient);
      }
    }
    isInclude
      ? this.setState({ includeIngredients: ingredients }, () =>
          this.renderValues()
        )
      : this.setState({ excludeIngredients: ingredients }, () =>
          this.renderValues()
        );
    /*for (let i = 0; i < ingredients.length; i++) {
      const ingredId = i + 1;
      document.getElementById(
        (this.state.includePage ? "include" : "exclude") +
          "Ingredient " +
          ingredId
      ).value = ingredients[i].name;
    }*/
  };

  renderValues = () => {
    const ingredientArray = this.state.includePage
      ? this.state.includeIngredients
      : this.state.excludeIngredients;

    for (let i = 0; i < ingredientArray.length; i++) {
      const ingredId = i + 1;

      // Update ingredient name on tab change
      document.getElementById(
        (this.state.includePage ? "include" : "exclude") +
          "Ingredient " +
          ingredId
      ).value = ingredientArray[i].name;

      // Update ingredient amount + unit on tab change
      if (this.state.enterIngredientChkbox && this.state.includePage) {
        console.log("Hello");
        document.getElementById("includeIngredientAmount " + ingredId).value =
          ingredientArray[i].amount;
        document.getElementById("includeIngredientUnit " + ingredId).innerHTML =
          ingredientArray[i].unit;
      }
    }
  };

  handleUnitEntry = (id, unitValue) => {
    let ingredients = this.state.includeIngredients;
    ingredients[id - 1].unit = unitValue;
    this.setState({ includeIngredients: ingredients });
    document.getElementById("includeIngredientUnit " + id).innerText =
      unitValue;
    console.log(document.getElementById("includeIngredientUnit " + id).value);
  };

  handleAmountEntry = (id, amountValue) => {
    let ingredients = this.state.includeIngredients;
    ingredients[id - 1].amount = amountValue;
    this.setState({ includeIngredients: ingredients });
    document.getElementById("includeIngredientAmount " + id).value =
      amountValue;
  };
}

export default SideBar;
