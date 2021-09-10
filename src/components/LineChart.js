import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = () => {
    return (
        <div>
            
        <Line
        
        data={{
          labels: ['05/09/21', '06/09/21', '07/09/21', '08/09/21', '09/09/21'],
          
          datasets: [
            
          {
            label: 'Minutes Awake',
            data: [19,50,64,55,51],
            backgroundColor: 'rgba(153, 102, 255, 0.3)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 3,
            fill: {
              target: 'origin',
              above: 'rgba(153, 102, 255, 0.3)',   // Area will be red above the origin
            }
          },

//            {
//              label: 'Minutes Asleep',
//              data: [216,287,413,293,329],
//              backgroundColor: 'rgba(255, 157, 0, 0.4)',
//              borderColor: 'rgba(255, 157, 0, 1)',
//              borderWidth: 1,
//              fill: {
//                target: 'origin',
//                above: 'rgba(255, 157, 0, 0.4)',   // Area will be red above the origin
//              }
//            },
          
  
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

export default LineChart