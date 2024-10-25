const jsonContainer = document.getElementById('jsonContainer');

fetch('./data.json').then(res => res.json()).then(data => {

    const jsonFormat = JSON.stringify(data.filter(e => e.categoria === "Procesadores"))
    console.log(JSON.parse(jsonFormat))
    console.log(data)
    jsonContainer.textContent = jsonFormat
}).catch(error =>{
    console.log(error)
})