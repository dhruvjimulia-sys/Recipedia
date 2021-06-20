import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/autocomplete.css";
import "../styles/style.css";
import "../styles/scrollbar.css";

const ingred = [
  "Apple",
  "Banana",
  "Orange",
  "Kiwi",
  "App",
  "Applet",
  "Application",
];

class Ingredient extends Component {
  state = {
    ingredientInputValue: "",
    ingredientFieldFocused: false,
    autocompleteFieldHovered: false,
  };

  render() {
    const {
      id,
      noOfIngredients,
      onDelete,
      enterAmts,
      onIngEntry,
      object,
      isInclude,
    } = this.props;

    const marBot = noOfIngredients === id ? "10px" : "0px";

    const colTemplateString = enterAmts
      ? "1.5fr 6fr 3fr 3fr 1fr"
      : "1.5fr 12fr 1fr";

    const dropDownState =
      this.state.ingredientInputValue !== "" ? " dropd" : "";

    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: colTemplateString,
          marginTop: "5px",
          marginBottom: marBot,
        }}
      >
        <div
          className="tablerow"
          style={{
            height: "100%",
            backgroundColor: "#999999",
            color: "#ffffff",
            paddingTop: "2px",
            border: "#555555 solid 1px",
          }}
        >
          <span
            style={{
              verticalAlign: "middle",
            }}
          >
            {id}
          </span>
        </div>
        <div className="autocomplete" style={{ width: "100%", height: "100%" }}>
          <input
            style={{
              width: "98%",
              height: "100%",
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingLeft: "10px",
              textAlign: "left",
            }}
            className={"tablerow " + dropDownState}
            id={(isInclude ? "include" : "exclude") + "Ingredient " + id}
            placeholder="Type here..."
            autoComplete="off"
            onInput={() => {
              this.setState({
                ingredientInputValue: document.getElementById(
                  (isInclude ? "include" : "exclude") + "Ingredient " + id
                ).value,
              });
            }}
            onFocus={() => this.setState({ ingredientFieldFocused: true })}
            onBlur={() => {
              if (!this.state.autocompleteFieldHovered) {
                this.setState({ ingredientFieldFocused: false });

                let valueFound = "0";
                for (let i = 0; i < ingred.length; i++) {
                  if (
                    this.state.ingredientInputValue.toUpperCase() ===
                    ingred[i].toUpperCase()
                  ) {
                    valueFound = ingred[i];
                  }
                }

                if (valueFound === "0") {
                  document.getElementById(
                    (isInclude ? "include" : "exclude") + "Ingredient " + id
                  ).value = "";
                  this.setState({ ingredientInputValue: "" });
                  onIngEntry(id, "", isInclude);
                } else {
                  this.setState({ ingredientInputValue: valueFound });
                  onIngEntry(id, valueFound, isInclude);
                }
              }
            }}
          />
          {this.renderAutocomplete()}
        </div>
        {this.renderAmount()}
        <div
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            height: "100%",
            width: "100%",
          }}
        >
          <button
            className="btn btn-danger btn-sm closebtn"
            style={{
              boxShadow: "none",
              textAlign: "center",
              backgroundColor: "#E61260",
              color: "#ffffff",
              border: "1px solid #E61260",
              padding: "1px 6px",
              borderRadius: "10px",
              marginRight: "3px",
              verticalAlign: "middle",
              marginTop: "5px",
            }}
            onClick={() => onDelete(id, isInclude)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  renderAmount() {
    if (this.props.enterAmts) {
      return (
        <React.Fragment>
          <div>
            <input
              style={{
                width: "96%",
                height: "100%",
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingLeft: "10px",
                textAlign: "left",
              }}
              className="tablerow"
            />
          </div>
          <div>
            <input
              style={{
                width: "92%",
                height: "100%",
                paddingTop: "4px",
                paddingBottom: "4px",
                paddingLeft: "10px",
                textAlign: "left",
              }}
              className="tablerow"
            ></input>
          </div>
        </React.Fragment>
      );
    }
  }

  getAutocompleteIngredients() {
    const numberOfAlphabets = this.state.ingredientInputValue.length;
    let output = [];
    for (let i = 0; i < ingred.length; i++) {
      if (
        ingred[i].substr(0, numberOfAlphabets).toUpperCase() ===
        this.state.ingredientInputValue.toUpperCase()
      ) {
        output.push(ingred[i]);
      }
    }
    return output;
  }

  renderAutocomplete() {
    const autocompleteValues = this.getAutocompleteIngredients();
    if (
      this.state.ingredientInputValue === "" ||
      !this.state.ingredientFieldFocused
    ) {
      return <React.Fragment></React.Fragment>;
    } else {
      return (
        <div className="autocomplete-items">
          {autocompleteValues.map((autoValue) => (
            <div
              onClick={() => {
                this.props.onIngEntry(
                  this.props.id,
                  autoValue,
                  this.props.isInclude
                );
                this.setState({ ingredientInputValue: autoValue });
                this.setState({ ingredientFieldFocused: false });
                this.setState({ autocompleteFieldHovered: false });
              }}
              onMouseEnter={() =>
                this.setState({ autocompleteFieldHovered: true })
              }
              onMouseLeave={() =>
                this.setState({ autocompleteFieldHovered: false })
              }
              key={"autocomplete " + autoValue}
            >
              {this.state.ingredientInputValue.toTitleCase()}
              <strong>
                {autoValue.substr(this.state.ingredientInputValue.length)}
              </strong>
            </div>
          ))}
        </div>
      );
    }
  }
}

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export default Ingredient;
