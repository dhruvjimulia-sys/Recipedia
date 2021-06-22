import React, { Component } from "react";
import Ingredient from "./ingredient";
import "../styles/style.css";

class IngredientList extends Component {
  render() {
    const colTemplateString = this.props.enterAmounts
      ? "1.5fr 6fr 3fr 3fr 1fr"
      : "1.5fr 12fr 1fr";

    return (
      <React.Fragment>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: colTemplateString,
            marginTop: "10px",
          }}
        >
          <div style={{ marginLeft: "6px" }} />
          <div
            className="tableheader"
            style={{
              paddingLeft: "10px",
              width: "98%",
            }}
          >
            Ingredient
          </div>
          {this.renderHeaders()}
          <div style={{ marginRight: "6px" }} />
        </div>
        <div>
          {this.props.list.map((ingredient) => (
            <Ingredient
              key={this.props.list.indexOf(ingredient) + 1}
              id={this.props.list.indexOf(ingredient) + 1}
              object={ingredient}
              onDelete={this.props.onDelete}
              onIngEntry={this.props.onIngredientEntry}
              noOfIngredients={this.props.list.length}
              enterAmts={this.props.enterAmounts}
              isInclude={this.props.isInclude}
              onAmountEntry={this.props.onAmountEntry}
              onUnitEntry={this.props.onUnitEntry}
            ></Ingredient>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 13fr 1fr" }}>
          <div />
          <div>
            <button
              onClick={() => this.props.onAdd(this.props.isInclude)}
              className="addnewbutton"
              style={{ width: "100%", textAlign: "centre" }}
            >
              + Add New Ingredient
            </button>
          </div>
          <div />
        </div>
      </React.Fragment>
    );
  }

  renderHeaders() {
    if (this.props.enterAmounts) {
      return (
        <React.Fragment>
          <div className="tableheader" style={{ textAlign: "center" }}>
            Amount
          </div>
          <div className="tableheader" style={{ textAlign: "center" }}>
            Unit
          </div>
        </React.Fragment>
      );
    }
  }
}

export default IngredientList;
