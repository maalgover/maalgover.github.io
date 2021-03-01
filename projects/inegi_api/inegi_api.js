console.log("This is just a heart beat");

let url_1="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json";
let proxy="https://cors-anywhere.herokuapp.com/";
fetch(url_1)
.then(response=> response.json())
.then(data =>console.log(data))
.catch(err=>{throw err});