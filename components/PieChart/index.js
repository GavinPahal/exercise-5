import styles from './PieChart.module.css'
import { Pie } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Red","Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    labels: 'Data 1',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgb(255, 99, 235, 0.4)',
                        'rgb(200, 162, 25, 0.4)',
                        'rgb(53, 162, 235, 0.4)',
                        'rgb(255, 162, 235, 0.4)',
                        'rgb(53, 80, 120, 0.4)',
                        
                    ],

                    borderColor: [
                        'rgb(255, 40, 106, 0.4)',
                        'rgb(53, 162, 25, 0.4)',
                        'rgb(100, 200, 235, 0.4)',
                        'rgb(255, 162, 235, 0.4)',
                        'rgb(53, 162, 235, 0.4)'
                    ],
                    borderWidth: 1
                },
                
            ]
        });

    setChartOptions({
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true,
    })
}, []);
return (
    <>
        <Pie data={chartData} options={chartOptions} style={{ width: "500px", height: "300px" }} />
    </>
)
}