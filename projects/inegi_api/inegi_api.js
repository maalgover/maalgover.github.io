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

document.addEventListener('DOMContentLoaded', function(){
      const req = new XMLHttpRequest();
      req.open("GET","https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json",true);
      req.send();
      req.onload = function(){
        const json = JSON.parse(req.responseText);
        console.log(json)
    }})


//fetch("https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json")