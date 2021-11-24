import React, { Component } from "react";
import Slide from "./Slide";

class Example extends Component {
  render() {
    const name1 = "dohyeon";
    const name2 = "지후";

    return (
      <main>
        <Slide name={name1} />
        <Slide name={name2} />
      </main>
    );
  }
}

export default Example;
