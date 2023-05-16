import React from 'react'
import { useState } from 'react';
import Chart from "react-apexcharts";


function GraphChart(){
    const [state ,setState]=useState({
        options: {
        //   colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
          colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63'],
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: "series-2",
            data: [10, 10, 35, 70, 39, 40, 50, 71]
          }
        ]
      })

  return (
    <div className='bg-blue-100 p-10 flex flex-wrap'>
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
            />
        </div>
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="500"
            />
        </div>
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="500"
            />
        </div>
        <div>
            <Chart
                options={state.options}
                series={state.series}
                type="histogram"
                width="500"
            />
        </div>
       
       {/* graph type
       1. scatter */}
    </div>
  )
}

export default GraphChart
