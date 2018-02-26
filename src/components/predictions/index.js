const BestPicKey = ["Call Me By Your Name", "Dunkirk", "Get Out", "Lady Bird", "Phantom Thread", "The Post", "The Shape of Water", "Three Billboards Outside Ebbing, Missouri"];
const BestPicValue = [8, 3, 14, 17, 2, 3, 29, 13];

const BestMaleLeadKey = ["Daniel Day-Lewis, “Phantom Thread”", "Daniel Kaluuya, “Get Out”", "Denzel Washington, “Roman J. Israel, Esq.”", "Gary Oldman, “Darkest Hour”", "Timothée Chalamet, “Call Me by Your Name”"];
const BestMaleLeadValue = [13, 24, 5, 32, 16];

const BestFemaleLeadKey = ["Frances McDormand, “Three Billboards Outside Ebbing, Missouri”", "Margot Robbie, “I, Tonya”", "Meryl Streep, “The Post”", "Sally Hawkins, “The Shape of Water”", "Saoirse Ronan, “Lady Bird”"];
const BestFemaleLeadValue = [27, 12, 9, 9, 32];

const BestMaleSupportingKey = ["Christopher Plummer, “All the Money in the World”", "Richard Jenkins, “The Shape of Water”", "Sam Rockwell, “Three Billboards Outside Ebbing, Missouri”", "Willem Dafoe, “The Florida Project”", "Woody Harrelson, “Three Billboards Outside Ebbing, Missouri”"];
const BestMaleSupportingValue = [8, 19, 30, 16, 17];

const BestFemaleSupportingKey = ["Allison Janney, “I, Tonya”", "Laurie Metcalf, “Lady Bird”", "Lesley Manville, “Phantom Thread”", "Mary J. Blige, “Mudbound”", "Octavia Spencer, “The Shape of Water”"];
const BestFemaleSupportingValue = [34, 22, 2, 7, 25];

const BestAnimationKey = ["“Coco,” Lee Unkrich, Darla K. Anderson", "“Ferdinand,” Carlos Saldanha", "“Loving Vincent,” Dorota Kobiela, Hugh Welchman, Sean Bobbitt, Ivan Mactaggart, Hugh Welchman", "“The Boss Baby,” Tom McGrath, Ramsey Ann Naito"];
const BestAnimationValue = [84, 2, 3, 1];

const BestDirectingKey = ["“Dunkirk,” Christopher Nolan", "“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“Phantom Thread,” Paul Thomas Anderson", "“The Shape of Water,” Guillermo del Toro"];
const BestDirectingValue = [21, 25, 14, 4, 26];

const BestForeignKey = ["“A Fantastic Woman” (Chile)", "“Loveless” (Russia)", "“On Body and Soul (Hungary)", "“The Insult” (Lebanon)", "“The Square” (Sweden)"];
const BestForeignValue = [40, 11, 8, 10, 20];

const BestScoreKey = ["“Dunkirk,” Hans Zimmer", "“Phantom Thread,” Jonny Greenwood", "“Star Wars: The Last Jedi,” John Williams", "“The Shape of Water,” Alexandre Desplat", "“Three Billboards Outside Ebbing, Missouri,” Carter Burwell"];
const BestScoreValue = [39, 3, 19, 26, 3];

const BestSongKey = ["“Mighty River” from “Mudbound,” Mary J. Blige", "“Mystery of Love” from “Call Me by Your Name,” Sufjan Stevens", "“Remember Me” from “Coco,” Kristen Anderson-Lopez, Robert Lopez", "“Stand Up for Something” from “Marshall,” Diane Warren, Common", "“This Is Me” from “The Greatest Showman,” Benj Pasek, Justin Paul"];
const BestSongValue = [4, 28, 32, 1, 25];

const BestOriginalKey = ["“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“The Big Sick,” Emily V. Gordon & Kumail Nanjiani", "“The Shape of Water,” Guillermo del Toro, Vanessa Taylor", "“Three Billboards Outside Ebbing, Missouri,” Martin McDonagh"];
const BestOriginalValue = [36, 25, 13, 8, 8];

const BestAdaptedKey = ["“Call Me by Your Name,” James Ivory", "“Logan,” Scott Frank & James Mangold and Michael Green", "“Molly’s Game,” Aaron Sorkin", "“Mudbound,” Virgil Williams and Dee Rees", "“The Disaster Artist,” Scott Neustadter & Michael H. Weber"];
const BestAdaptedValue = [53, 5, 8, 2, 22];

const EightColors = ["#ffdd40", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#000", "#ff69b4"];

const FiveColors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];

var el = document.getElementById('mySelect');

if (el) {
    el.addEventListener("change", changeChart);
}

var ChartColors = 0;
var ChartData = 0;
var ChartLabel = 0;
var ChartTitle = 0;

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
            text: "Best Picture"
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

    myLineChart = new Chart(document.getElementById("chart"), {
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
