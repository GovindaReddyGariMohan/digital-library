import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          redrawOnWindowResize: true
        },
        xaxis: {
          categories: ['person1','person2','person3','person4','person3']
        }
      },
      series: [
        {
          name: "books",
          data: [5, 8, 12,6,5]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="350"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;