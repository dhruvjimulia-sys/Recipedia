import React, { Component } from "react";
import IngredientList from "./ingredientList";

class ExcludePage extends Component {
  render() {
    const { excludeIngredients, onDelete, onEntry, onAdd } = this.props;
    return (
      <div>
        <IngredientList
          list={excludeIngredients}
          enterAmounts={false}
          onDelete={onDelete}
          onAdd={onAdd}
          onIngredientEntry={onEntry}
          isInclude={false}
        ></IngredientList>
      </div>
    );
  }
}

export default ExcludePage;
