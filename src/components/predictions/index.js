const BestPicKey = ["Call Me By Your Name", "Dunkirk", "Get Out", "Lady Bird", "Phantom Thread", "The Post", "The Shape of Water", "Three Billboards Outside Ebbing, Missouri"];
const BestPicValue = [8.99, 3.37, 15.73, 19.1, 2.25, 3.37, 32.58, 14.61];

const BestMaleLeadKey = ["Daniel Day-Lewis, “Phantom Thread”", "Daniel Kaluuya, “Get Out”", "Denzel Washington, “Roman J. Israel, Esq.”", "Gary Oldman, “Darkest Hour”", "Timothée Chalamet, “Call Me by Your Name”"];
const BestMaleLeadValue = [14.44, 26.67, 5.56, 35.56, 17.78];

const BestFemaleLeadKey = ["Frances McDormand, “Three Billboards Outside Ebbing, Missouri”", "Margot Robbie, “I, Tonya”", "Meryl Streep, “The Post”", "Sally Hawkins, “The Shape of Water”", "Saoirse Ronan, “Lady Bird”"];
const BestFemaleLeadValue = [30.34, 13.48, 10.11, 10.11, 35.96];

const BestMaleSupportingKey = ["Christopher Plummer, “All the Money in the World”", "Richard Jenkins, “The Shape of Water”", "Sam Rockwell, “Three Billboards Outside Ebbing, Missouri”", "Willem Dafoe, “The Florida Project”", "Woody Harrelson, “Three Billboards Outside Ebbing, Missouri”"];
const BestMaleSupportingValue = [30.0, 13.33, 10.0, 10.0, 35.56];

const BestFemaleSupportingKey = ["Allison Janney, “I, Tonya”", "Laurie Metcalf, “Lady Bird”", "Lesley Manville, “Phantom Thread”", "Mary J. Blige, “Mudbound”", "Octavia Spencer, “The Shape of Water”"];
const BestFemaleSupportingValue = [37.78, 24.44, 2.22, 7.78, 27.78];

const BestAnimationKey = ["“Coco,” Lee Unkrich, Darla K. Anderson", "“Ferdinand,” Carlos Saldanha", "“Loving Vincent,” Dorota Kobiela, Hugh Welchman, Sean Bobbitt, Ivan Mactaggart, Hugh Welchman", "“The Boss Baby,” Tom McGrath, Ramsey Ann Naito"];
const BestAnimationValue = [93.33, 2.22, 3.33, 1.11];

const BestDirectingKey = ["“Dunkirk,” Christopher Nolan", "“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“Phantom Thread,” Paul Thomas Anderson", "“The Shape of Water,” Guillermo del Toro"];
const BestDirectingValue = [23.33, 27.78, 15.56, 4.44, 28.89];

const BestForeignKey = ["“A Fantastic Woman” (Chile)", "“Loveless” (Russia)", "“On Body and Soul (Hungary)", "“The Insult” (Lebanon)", "“The Square” (Sweden)"];
const BestForeignValue = [44.44, 12.22, 8.89, 11.11, 22.22];

const BestScoreKey = ["“Dunkirk,” Hans Zimmer", "“Phantom Thread,” Jonny Greenwood", "“Star Wars: The Last Jedi,” John Williams", "“The Shape of Water,” Alexandre Desplat", "“Three Billboards Outside Ebbing, Missouri,” Carter Burwell"];
const BestScoreValue = [43.33, 3.33, 21.11, 28.89, 3.33];

const BestSongKey = ["“Mighty River” from “Mudbound,” Mary J. Blige", "“Mystery of Love” from “Call Me by Your Name,” Sufjan Stevens", "“Remember Me” from “Coco,” Kristen Anderson-Lopez, Robert Lopez", "“Stand Up for Something” from “Marshall,” Diane Warren, Common", "“This Is Me” from “The Greatest Showman,” Benj Pasek, Justin Paul"];
const BestSongValue = [4.44, 31.11, 35.56, 1.11, 27.78];

const BestOriginalKey = ["“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“The Big Sick,” Emily V. Gordon & Kumail Nanjiani", "“The Shape of Water,” Guillermo del Toro, Vanessa Taylor", "“Three Billboards Outside Ebbing, Missouri,” Martin McDonagh"];
const BestOriginalValue = [40.0, 27.78, 14.44, 8.89, 8.89];

const BestAdaptedKey = ["“Call Me by Your Name,” James Ivory", "“Logan,” Scott Frank & James Mangold and Michael Green", "“Molly’s Game,” Aaron Sorkin", "“Mudbound,” Virgil Williams and Dee Rees", "“The Disaster Artist,” Scott Neustadter & Michael H. Weber"];
const BestAdaptedValue = [58.89, 5.56, 8.89, 2.22, 24.44];

const EightColors = ["#ffdd40", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#000", "#ff69b4"];

const FiveColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];

var el = document.getElementById('mySelect');

if (el) {
    el.addEventListener("change", changeChart);
}

// var optionsPie = {
//   tooltipTemplate: "<%= value + ' %' %>"
// }

var ChartColors = 0;
var ChartData = 0;
var ChartLabel = 0;
var ChartTitle = 0;

// options: {
//   tooltips: {
//     callbacks: {
//       label: function(tooltipItem, data) {
//         var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || 'Other';
//         var label = data.labels[tooltipItem.index];
//         return datasetLabel + ': ' + label;
//       }
//     }
//   }
// }

var myLineChart = new Chart(document.getElementById("chart"), {
  type: 'doughnut',
  data: {
    labels: BestPicKey,
    datasets: [{
      backgroundColor: EightColors,
      data: BestPicValue,
    }]
  },
  options: {
    title: {
      display: true,
      text: "Best Picture",
    }
  },
  tooltips: {
    mode: 'label',
    callbacks: {
      label: function(tooltipItem, data) {
        var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || 'Other';
        return datasetLabel + "%";
      }
    }
  }
});

function changeChart() {
  var option = document.getElementById("mySelect").value;
  if (option == 1) {
    ChartLabel = BestPicKey;
    ChartColors = EightColors;
    ChartData = BestPicValue;
    ChartTitle = "Best Picture";
  } else {
    ChartColors = FiveColors;
    if (option == 2) {
      ChartLabel = BestMaleLeadKey;
      ChartData = BestMaleLeadValue;
      ChartTitle = "Best Actor in a Leading Role";
    } else if (option == 3) {
      ChartLabel = BestFemaleLeadKey;
      ChartData = BestFemaleLeadValue;
      ChartTitle = "Best Actress in a Leading Role";
    } else if (option == 4) {
      ChartLabel = BestMaleSupportingKey;
      ChartData = BestMaleSupportingValue;
      ChartTitle = "Best Actor in a Supporting Role";
    } else if (option == 5) {
      ChartLabel = BestFemaleSupportingKey;
      ChartData = BestFemaleSupportingValue;
      ChartTitle = "Best Actress in a Supporting Role";
    } else if (option == 6) {
      ChartLabel = BestAnimationKey;
      ChartData = BestAnimationValue;
      ChartTitle = "Best Animation Film";
      ChartColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"];
    } else if (option == 7) {
      ChartLabel = BestDirectingKey;
      ChartData = BestDirectingValue;
        ChartTitle = "Best Director";
    } else if (option == 8) {
      ChartLabel = BestForeignKey;
      ChartData = BestForeignValue;
      ChartTitle = "Best Foreign Language Film";
    } else if (option == 9) {
      ChartLabel = BestScoreKey;
      ChartData = BestScoreValue;
      ChartTitle = "Best Music (Original Score)";
    } else if (option == 10) {
      ChartLabel = BestSongKey;
      ChartData = BestSongValue;
      ChartTitle = "Best Music (Original Song)"
    } else if (option == 11) {
      ChartLabel = BestOriginalKey;
      ChartData = BestOriginalValue;
      ChartTitle = "Best Writing (Original Screenplay)";
    } else if (option == 12) {
      ChartLabel = BestAdaptedKey;
      ChartData = BestAdaptedValue;
      ChartTitle = "Best Writing (Adapted Screenplay)";
    }
  }

  myLineChart.destroy();

  var myLineChart = new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
      labels: ChartLabel,
      datasets: [{
        backgroundColor: ChartColors,
        data: ChartData,
      }]
    },
    options: {
      title: {
        display: true,
        text: ChartTitle
      }
    }
  });
}
