import { motion } from 'framer-motion';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useTheme } from 'next-themes';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const TradingChart = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const data = {
        labels: ['Level', 'Layer2', 'Layer1', 'Meme', 'Gaming', 'Pow'],
        datasets: [
            {
                label: 'Interested',
                data: [0, 50, 90, 80, 30, 55],
                backgroundColor: isDark ? 'rgba(255, 159, 64, 0.2)' : 'rgba(255, 159, 64, 0.15)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 159, 64, 1)',
                pointBorderColor: isDark ? '#fff' : '#000',
                pointHoverBackgroundColor: isDark ? '#fff' : '#000',
                pointHoverBorderColor: 'rgba(255, 159, 64, 1)'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        layout: {
            padding: {
                top: 10,
                bottom: 0
            }
        },
        scales: {
            r: {
                angleLines: {
                    color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                },
                grid: {
                    color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                },
                pointLabels: {
                    color: isDark ? '#ccd6f6' : '#4a5568',
                    font: {
                        size: 9,
                        family: 'system-ui'
                    },
                    padding: 5
                },
                ticks: {
                    color: isDark ? '#8892b0' : '#718096',
                    backdropColor: 'transparent',
                    stepSize: 20,
                    max: 100,
                    min: 0
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                titleColor: isDark ? '#fff' : '#000',
                bodyColor: isDark ? '#fff' : '#000',
                titleFont: {
                    size: 12
                },
                bodyFont: {
                    size: 11
                }
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
        >
            <Radar data={data} options={options} />
        </motion.div>
    );
};

export default TradingChart;