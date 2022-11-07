import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as chartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"



const Chart = () => {
  return (
    Chart.JS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Tooltip,
        Legend,

    
    )       


  )
    }




const chart = ({arr=[], currency,days})=>{


    const prices = [1,2,3,5]
    const date = ["12/2/22", "23/2/22", "26/2/22", "30/2/22"]
    const data = {

    };



    return <Line 
    options={{
        responsive: true,
    }}
    data = {{
        labels: date,
        datasets: [
            {
                label: `Price in ${currency}`,
                data: prices,
                backgroundColor: "rgba(255, 99, 132,0.5)",
                borderColor: "rgba(255, 99, 132)",
            }
        ]

    }}
    />
}

export default Chart