import React, { Component } from "react";

class ListItem extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      edit: false
    };
  }

  editItem() {
    this.setState({ edit: !this.state.edit });
  }

  updateItem(value, index) {
    this.props.editItem(value, index);
    this.editItem();
  }

  render() {
    //if(this.state.edit)
    return this.state.edit ? (
      <div>
        <input
          type="text"
          defaultValue={this.props.label}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
        <button
          onClick={() => this.updateItem(this.state.value, this.props.index)}
        >
          update
        </button>
      </div>
    ) : (
      <div>
        <li style={{ listStyle: " none" }}>
          
          <label>{this.props.label}</label>
          <button onClick={() => this.editItem()}>edit </button>
          <button onClick={() => this.props.onClick(this.props.index)}>
            remove{" "}
          </button>
        </li>
      </div>
    );
  }
}

export default ListItem;
