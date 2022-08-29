const default_chart_data = {
    labels: [
        'Siyaset',
        'Dünya',
        'Ekonomi',
        'Kültür-Sanat',
        'Sağlık',
        'Spor',
        'Teknoloji'
    ],
    datasets: [{
      label: 'Probability',
      data: [0,0,0,0,0,0,0],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: "#c02b2b",
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

export default default_chart_data;
