import header from './components/header';

var best_pic_key = ["Call Me By Your Name", "Dunkirk", "Get Out", "Lady Bird", "Phantom Thread", "The Post", "The Shape of Water", "Three Billboards Outside Ebbing, Missouri"];
var best_pic_value = [8, 3, 14, 17, 2, 3, 29, 13];

var best_male_lead_key = ["Daniel Day-Lewis, “Phantom Thread”", "Daniel Kaluuya, “Get Out”", "Denzel Washington, “Roman J. Israel, Esq.”", "Gary Oldman, “Darkest Hour”", "Timothée Chalamet, “Call Me by Your Name”"];
var best_male_lead_value = [13, 24, 5, 32, 16];

var best_female_lead_key = ["Frances McDormand, “Three Billboards Outside Ebbing, Missouri”", "Margot Robbie, “I, Tonya”", "Meryl Streep, “The Post”", "Sally Hawkins, “The Shape of Water”", "Saoirse Ronan, “Lady Bird”"];
var best_female_lead_value = [27, 12, 9, 9, 32];

var best_male_s_key = ["Christopher Plummer, “All the Money in the World”", "Richard Jenkins, “The Shape of Water”", "Sam Rockwell, “Three Billboards Outside Ebbing, Missouri”", "Willem Dafoe, “The Florida Project”", "Woody Harrelson, “Three Billboards Outside Ebbing, Missouri”"];
var best_male_s_value = [8, 19, 30, 16, 17];

var best_female_s_key = ["Allison Janney, “I, Tonya”", "Laurie Metcalf, “Lady Bird”", "Lesley Manville, “Phantom Thread”", "Mary J. Blige, “Mudbound”", "Octavia Spencer, “The Shape of Water”"];
var best_female_s_value = [34, 22, 2, 7, 25];

var best_animation_key = ["“Coco,” Lee Unkrich, Darla K. Anderson", "“Ferdinand,” Carlos Saldanha", "“Loving Vincent,” Dorota Kobiela, Hugh Welchman, Sean Bobbitt, Ivan Mactaggart, Hugh Welchman", "“The Boss Baby,” Tom McGrath, Ramsey Ann Naito"];
var best_animation_value = [84, 2, 3, 1];

var best_directing_key = ["“Dunkirk,” Christopher Nolan", "“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“Phantom Thread,” Paul Thomas Anderson", "“The Shape of Water,” Guillermo del Toro"];
var best_directing_value = [21, 25, 14, 4, 26];

var best_foreign_key = ["“A Fantastic Woman” (Chile)", "“Loveless” (Russia)", "“On Body and Soul (Hungary)", "“The Insult” (Lebanon)", "“The Square” (Sweden)"];
var best_foreign_value = [40, 11, 8, 10, 20];

var best_score_key = ["“Dunkirk,” Hans Zimmer", "“Phantom Thread,” Jonny Greenwood", "“Star Wars: The Last Jedi,” John Williams", "“The Shape of Water,” Alexandre Desplat", "“Three Billboards Outside Ebbing, Missouri,” Carter Burwell"];
var best_score_value = [39, 3, 19, 26, 3];

var best_song_key = ["“Mighty River” from “Mudbound,” Mary J. Blige", "“Mystery of Love” from “Call Me by Your Name,” Sufjan Stevens", "“Remember Me” from “Coco,” Kristen Anderson-Lopez, Robert Lopez", "“Stand Up for Something” from “Marshall,” Diane Warren, Common", "“This Is Me” from “The Greatest Showman,” Benj Pasek, Justin Paul"];
var best_song_value = [4, 28, 32, 1, 25];

var best_original_s_key = ["“Get Out,” Jordan Peele", "“Lady Bird,” Greta Gerwig", "“The Big Sick,” Emily V. Gordon & Kumail Nanjiani", "“The Shape of Water,” Guillermo del Toro, Vanessa Taylor", "“Three Billboards Outside Ebbing, Missouri,” Martin McDonagh"];
var best_original_s_value = [36, 25, 13, 8, 8];

var best_adapted_s_key = ["“Call Me by Your Name,” James Ivory", "“Logan,” Scott Frank & James Mangold and Michael Green", "“Molly’s Game,” Aaron Sorkin", "“Mudbound,” Virgil Williams and Dee Rees", "“The Disaster Artist,” Scott Neustadter & Michael H. Weber"];
var best_adapted_s_value = [53, 5, 8, 2, 22];

var eight_colors = ["#ffdd40", "#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#000", "#ff69b4"];

var five_colors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];

var el = document.getElementById('mySelect');

if (el) {
    el.addEventListener("change", changeChart);
}

var chart_colors = 0;
var chart_data = 0;
var chart_label = 0;
var chart_title = 0;

var myLineChart = new Chart(document.getElementById("chart"), {
    type: 'doughnut',
    data: {
        labels: best_pic_key,
        datasets: [{
            backgroundColor: eight_colors,
            data: best_pic_value,
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
        chart_label = best_pic_key;
        chart_colors = eight_colors;
        chart_data = best_pic_value;
        chart_title = "Best Picture";
    } else {
        chart_colors = five_colors;
        if (option == 2) {
            chart_label = best_male_lead_key;
            chart_data = best_male_lead_value;
            chart_title = "Best Actor in a Leading Role";
        } else if (option == 3) {
            chart_label = best_female_lead_key;
            chart_data = best_female_lead_value;
            chart_title = "Best Actress in a Leading Role";
        } else if (option == 4) {
            chart_label = best_male_s_key;
            chart_data = best_male_s_value;
            chart_title = "Best Actor in a Supporting Role";
        } else if (option == 5) {
            chart_label = best_female_s_key;
            chart_data = best_female_s_value;
            chart_title = "Best Actress in a Supporting Role";
        } else if (option == 6) {
            chart_label = best_animation_key;
            chart_data = best_animation_value;
            chart_title = "Best Animation Film";
            chart_colors = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"];
        } else if (option == 7) {
            chart_label = best_directing_key;
            chart_data = best_directing_value;
            chart_title = "Best Director";
        } else if (option == 8) {
            chart_label = best_foreign_key;
            chart_data = best_foreign_value;
            chart_title = "Best Foreign Language Film";
        } else if (option == 9) {
            chart_label = best_score_key;
            chart_data = best_score_value;
            chart_title = "Best Music (Original Score)";
        } else if (option == 10) {
            chart_label = best_song_key;
            chart_data = best_song_value;
            chart_title = "Best Music (Original Song)"
        } else if (option == 11) {
            chart_label = best_original_s_key;
            chart_data = best_original_s_value;
            chart_title = "Best Writing (Original Screenplay)";
        } else if (option == 12) {
            chart_label = best_adapted_s_key;
            chart_data = best_adapted_s_value;
            chart_title = "Best Writing (Adapted Screenplay)";
        }
    }

    myLineChart.destroy();

    myLineChart = new Chart(document.getElementById("chart"), {
        type: 'doughnut',
        data: {
            labels: chart_label,
            datasets: [{
                backgroundColor: chart_colors,
                data: chart_data,
            }]
        },
        options: {
            title: {
                display: true,
                text: chart_title
            }

        }
    });

}