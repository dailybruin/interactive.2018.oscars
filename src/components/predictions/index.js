import * as data from './data';

const EightColors = [
  '#ffdd40',
  '#3e95cd',
  '#8e5ea2',
  '#3cba9f',
  '#e8c3b9',
  '#c45850',
  '#000',
  '#ff69b4',
];

const FiveColors = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'];

function chooseColors(n) {
  if (n === 8) {
    return EightColors;
  }
  return FiveColors;
}

function createNewDoughnutChart(category) {
  return new Chart(document.getElementById('chart'), {
    type: 'doughnut',
    data: {
      labels: category.nominees,
      datasets: [
        {
          backgroundColor: chooseColors(category.votes.length),
          data: category.votes,
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: category.title,
      },
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            const label = data.labels[tooltipItem.index];

            // get the concerned dataset
            const dataset = data.datasets[tooltipItem.datasetIndex];
            // calculate the total of this data set
            const total = dataset.data.reduce((previousValue, currentValue, currentIndex, array) =>
                previousValue + currentValue,);
            // get the current items value
            const currentValue = dataset.data[tooltipItem.index];
            // calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
            const percentage = Math.floor(currentValue / total * 100 + 0.5);

            return `${label}: ${percentage}%`;
          },
        },
      },
    },
  });
}

let doughnutChart = createNewDoughnutChart(data.bestPicture);
const select = document.getElementById('mySelect');

function changeChart() {
  let category = data.bestPicture;

  switch (Number(document.getElementById('mySelect').value)) {
    case 1:
      break;
    case 2:
      category = data.bestActorLead;
      break;
    case 3:
      category = data.bestActressLead;
      break;
    case 4:
      category = data.bestActorSupporting;
      break;
    case 5:
      category = data.bestActressSupporting;
      break;
    case 6:
      category = data.bestAnimatedFilm;
      break;
    case 7:
      category = data.bestDirector;
      break;
    case 8:
      category = data.bestForeignFilm;
      break;
    case 9:
      category = data.bestScore;
      break;
    case 10:
      category = data.bestSong;
      break;
    case 11:
      category = data.bestOriginalScreenplay;
      break;
    case 12:
      category = data.bestAdaptedScreenplay;
      break;
    default:
      break;
  }

  doughnutChart.destroy();
  doughnutChart = createNewDoughnutChart(category);
}

if (select) {
  select.addEventListener('change', changeChart);
}
