import React, { Component } from "react";

import "./TodoList.css";
import ListItem from "./listItem";

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      items: []
    };
  }

  deleteItem(index) {
    let arr = this.state.items.slice();
    delete arr[index];
    this.setState({ items: arr });
  }

  addItems() {
    let temp = this.state.items.slice();
    temp.push({
      value: this.state.value,
      edit: false
    });
    this.setState({ items: temp, value: "" });
  }

  editItem(value, index) {
    console.log("in edit item");
    let temp_array = this.state.items.slice();
    let temp = temp_array[index];
    temp.value = value;
    this.setState({ items: temp_array });
  }

  render() {
    return (
      <div>
        <input
          placeholder="enter tasks"
          value={this.state.value}
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        />
        <button onClick={() => this.addItems()}>Add</button>
        <div>
          {this.state.items.map((item, index) => {
            if (item) {
              return (
                <div>
                  <ListItem
                    key={index}
                    index={index}
                    label={item.value}
                    data={item}
                    edit={item.edit}
                    onClick={value => this.deleteItem(value)}
                    editItem={(value, index) => this.editItem(value, index)}
                  />
                </div>
              );
            }
          })}

          {/*
            if (item.edit === true) {
              <div>
                {this.renderEdit(item)} </div>
            }
          */}
        </div>
      </div>
    );
  }
}

export default ToDoList;
