import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as chartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"




    chartJS.register(
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





const Chart = ({arr=[], currency, days="24h"})=>{

    // console.log(arr);
    const prices = [ ...arr.prices];
    const date = [ ...arr.prices];
    for (let i = 0; i < arr.length; i++) {


        if  (days==="24h")  date.push(new Date(arr[i][0]).toLocaleTimeString())
        
        else date.push(new Date(arr[i][0]).toLocaleDateString())


        prices.push(arr[i][1])
    }
        console.log(date)
        // console.log(prices)
        const data = {
            labels: date,
            datasets: [
                {
                    label: `Price in ${currency}`,
                    data: prices,
                    backgroundColor: "rgba(255, 99, 132,0.5)",
                    borderColor: "rgba(255, 99, 132)",
                }
            ]
    
        }
        
        


    return <Line 
    options={{
        responsive: true,
    }}
    data = {data}
    />

}

export default Chart