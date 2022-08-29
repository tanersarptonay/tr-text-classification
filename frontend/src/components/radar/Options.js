const chartOptions = {
    borderWidth: 1,
    elements: {
        line: {
            borderWidth: 3
        },
    },
    scales: {
        r: {
            pointLabels: {
                font: {
                    size: 18,
                },
                color: 'rgba(0, 0, 0, 0.6)',
            },
            angleLines: {
                color: 'rgba(0, 0, 0, 0.3)',
                lineWidth: 1,
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.3)',
                lineWidth: 1,
            }
        }
    },
    scale: {
        showLabelBackdrop: true,
        beginAtZero: true,
        min: 0,
        max: 100,
    },
};

export default chartOptions;