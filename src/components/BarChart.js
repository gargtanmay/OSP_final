import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return (
        <div >
        <Bar
        data={{
          labels: ['05/09/21', '06/09/21', '07/09/21', '08/09/21', '09/09/21'],
          
          datasets: [
            {
            label: 'Total Calories Consumed',
            data: [1719, 1761, 1850, 1795, 1848],
            backgroundColor: 
                'rgba(153, 102, 255, 0.2)',
            borderColor: 
                'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
  
          {
            label: 'Active Calories',
            data: [700,755,868,805,894],
            backgroundColor: 'rgba(255, 157, 0, 0.4)',
            borderColor: 'rgba(255, 157, 0, 1)',
            borderWidth: 1,
          },
  
        ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks:{
                  beginAtZero: true
                }
              }
            ]
          }
        }}
  
        />
        
        </div>
    )



}

export default BarChart