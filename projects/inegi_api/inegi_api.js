console.log("This is just a heart beat");

let response = await fetch("https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json", {method: 'GET',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }});
let result = await response.json();

console.log(result);