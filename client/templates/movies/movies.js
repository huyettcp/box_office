// Template.movies.helpers({

// });


// myTemplate.js
// Template.movies.topGenresChart = function() {
// 	var mov = Movies.find({movie_title: "Scream"}).fetch()[0].production_budget;
// 	var variable = 1996
// 	console.log(mov)
//     return {
//         chart: {
//             plotBackgroundColor: null,
//             plotBorderWidth: null,
//             plotShadow: false
//         },
//         title: {
//             text: this.username + "'s top genres"
//         },
//         tooltip: {
//             pointFormat: '<b>{point.percentage:.1f}%</b>'
//         },
//         plotOptions: {
//             pie: {
//                 allowPointSelect: true,
//                 cursor: 'pointer',
//                 dataLabels: {
//                     enabled: true,
//                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                     style: {
//                         color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                     },
//                     connectorColor: 'silver'
//                 }
//             }
//         },
//         series: [{
//             type: 'pie',
//             name: 'genre',
//             data: [
//                 ['Adventure',   variable],
//                 ['Action',       26.8],
//                 ['Ecchi',   12.8],
//                 ['Comedy',    8.5],
//                 ['Yuri',     6.2]
//             ]
//         }]
//     };
// };