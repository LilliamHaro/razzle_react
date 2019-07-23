import React, { Component } from "react";
import Route from "react-router-dom/Route";
import Switch from "react-router-dom/Switch";
import Home from "./Home";
import Form from "./Form";
import "./App.css";
import axios from "axios";
import Product from "./products";
import List from './List';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://oazivitality.com/api/products")
      .then(response => {
        this.setState(
          {
            data: response.data.products
          },
          function() {
            console.log("dddddddd", this.state.data);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={Form} />
        <Route
              exact
              render={() => <List data={this.state.data} />}
              path="/list"
            />
        {this.state.data.map((prod,i) => (
          <Route
            key={i}
            exact
            render={() => (
              <Product
                dataProducto={prod}
                data={this.state.data}
              />
            )}
            path={"/productos/" + prod.ProductSlug}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
