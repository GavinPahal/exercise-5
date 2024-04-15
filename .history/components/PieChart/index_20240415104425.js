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
            labels: ["Red","Blue", "Yellow", "Green", "Purple", "Organge"],
            datasets: [
                {
                    labels: 'Data 1',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgb(255, 99, 235, 0.4)',
                        'rgb(53, 162, 25, 0.4)',
                        'rgb(53, 162, 235)',
                        'rgb(255, 162, 235)',
                        'rgb(53, 162, 235)',
                        
                    ],

                    borderColor: [
                        'rgb(255, 1008, 235, 0.4)',
                        'rgb(53, 162, 25, 0.4)',
                        'rgb(53, 162, 235)',
                        'rgb(255, 162, 235)',
                        'rgb(53, 162, 235)'
                    ],
                    borderWidth: 1
                },
                {
                    labels: 'Data 2',
                    data: [15234, 224382, 19245, 16243, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(240, 162, 235, 0.4)'
                },
                {
                    labels: 'Data 3',
                    data: [15234, 224382, 19245, 16243, 28356, 14235, 31000],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(150, 162, 235, 0.4)'
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