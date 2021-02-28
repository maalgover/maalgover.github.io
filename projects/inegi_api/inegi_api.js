// fetch("https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json", {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//     credentials: 'omit'
//   },
//   body: JSON.stringify(data),
// })
//     .then(response => response.json())
//     .then(data =>{
//         console.log("Success:", data);
//     })

console.log("This is just a heart beat");

// var urlDataStructure="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json"; 
// $.getJSON(urlDataStructure, function (dataStructure){
//     var Observations=dataStructure.Series[0].OBSERVATIONS; 
//     for (var i=0; i <=Observations.length - 1; i++)
//         {arrayChartData[i]=[Observations[i].TIME_PERIOD, parseInt(Observations[i].OBS_VALUE), '#E16c32'];}
//     console.log(Observations)}
//     ); 