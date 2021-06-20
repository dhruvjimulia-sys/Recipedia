import React, { Component } from "react";

import "../styles/style.css";
import "../styles/togglebutton.css";
import "../styles/tooltip.css";
import "../styles/tabs.css";

import IngredientList from "./ingredientList";

class IncludePage extends Component {
  render() {
    const {
      enterIngredientChkbox,
      includeIngredients,
      onDelete,
      onEntry,
      onAdd,
      onToggleButtonSwitch,
    } = this.props;

    return (
      <div>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked={enterIngredientChkbox}
              onChange={() => onToggleButtonSwitch()}
            />
            <span className="slider round"></span>
          </label>
          <h6
            style={{
              display: "inline-block",
              fontSize: "18px",
            }}
          >
            &nbsp; Enter Ingredient Amounts
          </h6>
          &nbsp;{" "}
          <div className="tool">
            <img
              src={require(".././info-icon-edited.png").default}
              alt=""
              width="18px"
              style={{ position: "relative", bottom: "1px" }}
            ></img>
            <span className="text">
              Allows you to calculate the amount of any recipe you can make.
            </span>
          </div>
        </div>
        <IngredientList
          list={includeIngredients}
          enterAmounts={enterIngredientChkbox}
          onDelete={onDelete}
          onAdd={onAdd}
          onIngredientEntry={onEntry}
          isInclude={true}
        />
      </div>
    );
  }
}

export default IncludePage;
