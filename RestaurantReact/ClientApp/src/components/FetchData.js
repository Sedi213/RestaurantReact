import React, { Component } from "react";
import "./FetchData.css";
import { CartComponent } from "./Cart";
import AnimateHeight from "react-animate-height";
export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = {
      list: [],

      burgerlist: [],
      saladlist: [],
      drinklist: [],
      loading: true,
      orderlist: [],
      height: 320,
    };
    this.NewMember = this.NewMember.bind(this);
    this.Order = this.Order.bind(this);
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  renderForecastsTable() {
    return (
      <div className="blocklist">
        <div className="containerlist">
          {this.state.burgerlist.map((e) => {
            return (
              <button className="btn" onClick={() => this.NewMember(e)}>
                {e.name}
              </button>
            );
          })}
        </div>
        <div className="containerlist">
          {this.state.saladlist.map((e) => {
            return (
              <button className="btn" onClick={() => this.NewMember(e)}>
                {e.name}
              </button>
            );
          })}
        </div>
        <div className="containerlist">
          {this.state.drinklist.map((e) => {
            return (
              <button className="btn" onClick={() => this.NewMember(e)}>
                {e.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderForecastsTable()
    );

    return (
      <AnimateHeight
        id="example-panel"
        duration={500}
        height={this.state.height}
      >
        <div className="cart">
          <div className="inlineblock">
            <div className="blockblock">
              <h1 id="tableLabel">Chosse order</h1>
              <p>This component demonstrates fetching data from the server.</p>
            </div>
            <div>
              <button className="orderbtn" onClick={() => this.Order()}>
                Order
              </button>
            </div>
          </div>
          {contents}
          <div className="line"></div>
          <div className="ordercontainer">
            {this.state.orderlist.map((e) => {
              return (
                <CartComponent key={e.name}
                  item={e}
                  CallBackDelete={(item) => {
                    this.Delete(item);
                  }}
                ></CartComponent>
              );
            })}
          </div>
        </div>
      </AnimateHeight>
    );
  }
  Delete(item) {
    let temp = this.state.orderlist.filter((e) => e.name !== item.name);
    this.setState({
      orderlist: temp,
      height: document.querySelector(".cart").offsetHeight - 32,
    });
  }
  async populateWeatherData() {
    const response = await fetch("order");
    const data = await response.json();
    this.setState({ list: data });
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await delay(1);
    this.splitlist();
  }

  NewMember(item) {
    let found = this.state.orderlist.find((i) => i.name === item.name);
    if (found === undefined) {
      item.count = 1;
      this.state.orderlist.push(item);
      let temp = this.state.orderlist;
      this.setState({
        orderlist: temp,
        height: document.querySelector(".cart").offsetHeight + 40,
      });
    } else {
      found.count++;
      this.setState({
        orderlist: this.state.orderlist,
        height: document.querySelector(".cart").offsetHeight + 7,
      });
    }
  }
  splitlist() {
    this.state.list.forEach((item) => {
      switch (item.category) {
        case 0:
          this.state.burgerlist.push(item);
          break;
        case 1:
          this.state.saladlist.push(item);
          break;
        case 2:
          this.state.drinklist.push(item);
          break;
      }
    });
    this.setState({ loading: false });
  }
  Order() {
    let temp=[]
    this.state.orderlist.forEach((e)=>{
      temp.push({
        Name:e.name,
         Price :e.price,
         Category:e.category, 
        Description :e.description
      })
    })
console.log(temp);
    fetch("/order", { method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(temp) })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
}
