import React from "react";
import d3 from "d3";

import { ButtonBar, Button } from "../CoreComponents";

const increaseCount = countable => ({ ...countable, count: countable.count + 1 });
const countAll = countables => countables.reduce((prev, curr) => prev + curr.count, 0);

export default class ChartView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [{ name: "Cola", count: 5 }, { name: "Bier", count: 10 }, { name: "Wein", count: 3 }, { name: "Tee", count: 7 }]
    };
  }

  componentDidMount() {
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart();
  }

  onDrinkSelected(drinkName) {
    const { drinks } = this.state;
    const newDrinks = drinks.map(drink => (drink.name === drinkName ? increaseCount(drink) : drink));

    this.setState({ drinks: newDrinks });
  }

  renderChart() {
    const { drinks } = this.state;
    const { chart: chartElement } = this.refs;
    const totalCount = countAll(drinks);

    // this is NOT d3 best practice...
    const data = d3
      .select(chartElement)
      .selectAll("div")
      .data(drinks, Math.random);

    data
      .enter()
      .append("div")
      .style("width", drink => drink.count * (100 / totalCount) + "%")
      .style("color", "#455A64")
      .style("margin-bottom", "10px")
      .style("padding", "10px")
      .style("background-color", "#B6B6B6")
      .text(d => d.name);

    data.exit().remove();
  }

  renderDrinkButton(drink) {
    const buttonLabel = `${drink.name} (${drink.count})`;

    return <Button key={drink.name} label={buttonLabel} onClickHandler={() => this.onDrinkSelected(drink.name)} />;
  }

  render() {
    const { drinks } = this.state;

    return (
      <div>
        <h1>Chart generator</h1>
        <div ref="chart" />
        <ButtonBar>{drinks.map(drink => this.renderDrinkButton(drink))}</ButtonBar>
      </div>
    );
  }
}
