import React, { Component } from "react";
import './Cart.css';
export class CartComponent extends Component {
  static displayName = CartComponent.name;

  constructor(props) {
    super(props);
    this.Add = this.Add.bind(this);
    this.Minus = this.Minus.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  Add() {
    this.props.item.count++;
    this.setState({});
  }
  Minus() {
    this.props.item.count--;
    if (this.props.item.count === 0) {
      this.Delete();
      return;
    }
    this.setState({});
  }
  Delete() {
    this.props.CallBackDelete(this.props.item);
  }

  render() {
    return (
      <div>
        {this.props.item.name} : {this.props.item.count}
        <button onClick={this.Add} class="plus-btn "></button>
        <button onClick={this.Minus} class="minus-btn "></button>
        <button onClick={this.Delete}  class="deletebtn">
          <svg
            class="deletesvg"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    );
  }
}
