const data = {
    labels: [
      'HTML',
      'CSS',
      'JAVASCRIPT'
    ],
    datasets: [{
      label: 'This website is made out of',
      data: [400, 400, 200],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  
  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };

