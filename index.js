let myChart = null;

const creaGrafica = async() =>  {

  
  
  console.log("btn")
  const ctx = document.getElementById('myChart');
  const monstruoRequest = document.getElementById("monstruoName").value;
  
  

  const monstruo = monstruoRequest
  const endpointApi = `https://api.sampleapis.com/monstersanctuary/monsters/${monstruo}`;
  
  
  const api = await fetch(endpointApi);
  
  
  const data = await api.json();
  if (myChart){
    myChart.destroy();
  }
  
  
  console.log(data.name)
  console.log(data.stats)
  console.log(data);

  
  myChart = new Chart(ctx, {
    type: 'bar',
      data: {
        labels: [
          `defence`,
          `health`,
          `magic`,
          `potion`,
          `strength`,
        ],
        datasets: [{
          data: [
            await data.stats.defence,
            await data.stats.health,
            await data.stats.magic,
            await data.stats.potion,
            await data.stats.strength
          ],
          borderWidth: 1
        }]
      },
    options: {
      scales: {
        y: {
        beginAtZero: true
      }
    }
   }
 });
}