function drawGraphs() {
  const timePoints = [0, 5, 10, 15, 20, 25];

  const dataPh2 = [0, 1.5, 2.5, 3.0, 4.0, 5.0];
  const dataPh4 = [0, 1.5, 3.5, 4.0, 5.0, 6.0];
  const dataPh6 = [0, 1.5, 2.5, 4.0, 5.0, 5.5];
  const dataPh8 = [0, 2.0, 3.5, 5.0, 6.5, 7.5];

  // 그래프 1: 시간에 따른 용해량 변화
  new Chart(document.getElementById("graphTimeVsSolubility"), {
    type: 'line',
    data: {
      labels: timePoints,
      datasets: [
        { label: 'pH 2', data: dataPh2, borderColor: 'red', fill: false },
        { label: 'pH 4', data: dataPh4, borderColor: 'orange', fill: false },
        { label: 'pH 6', data: dataPh6, borderColor: 'blue', fill: false },
        { label: 'pH 8', data: dataPh8, borderColor: 'green', fill: false }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'pH별 시간에 따른 비타민 C 용해량 변화'
          }
      },
      scales: {
        x: {
          title: { display: true, text: '시간 (분)' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: '누적 용해량 (g)' }
        }
      }
    }
  });

  // 그래프 2: pH에 따른 최대 용해량
  const phValues = [2, 4, 6, 8];
  const maxSolubility = [
    dataPh2.at(-1),
    dataPh4.at(-1),
    dataPh6.at(-1),
    dataPh8.at(-1)
  ];

  new Chart(document.getElementById("graphMaxSolubility"), {

    type: 'bar',
    data: {
      labels: phValues,
      datasets: [{
        label: '최대 용해량 (g)',
        data: maxSolubility,
        backgroundColor: ['red', 'orange', 'blue', 'green']
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'pH에 따른 최대 용해량'
        }
      },
      scales: {
        x: {
          title: { display: true, text: 'pH' }
        },
        y: {
          beginAtZero: true,
          title: { display: true, text: '누적 용해량 (g)' }
        }
      }
    }
  });
}
