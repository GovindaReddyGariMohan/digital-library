import React from "react";
import Chart from "react-apexcharts";

export default function AphexChart() {
    const data = [
        {
            name: "person1",
            quantity: 5
        },
        {
            name: "person2",
            quantity: 8
        },
        {
            name: "person3",
            quantity: 12
        },
        {
            name: "person4",
            quantity: 7
        },
        {
            name: "person5",
            quantity: 4
        }
    ];

    let names = [];
    let quantities = [];
    data.forEach(function (n) {
        names.push(n.name);
        quantities.push(n.quantity);
    });

    return React.createElement(Chart, {
        type: "pie",
        series: quantities,
        labels: {
            show: false,
            name: {
                show: true
            }
        },
        options: {
            labels: names,
            legend: {
                show: true,
                position: "bottom"
            },
            colors: ["#00AB55", "#2D99FF", "#FFE700", "#826AF9","#696969"]
        }
    });
}
