
let nombres=[]
let valores=[]
let i=0
$.getJSON("js/histograma.json", function(result){
  $.each(result, function(i, field){
    $(field).each(function () {
      
      nombres[i]=field["MetaData"][2]["Nombre"]
      valores[i]=field["Data"][0]["Valor"]
      i++
      
      /*console.log(nombres,valores)*/
      console.log(JSON.stringify(field, null, 4));
    })
  })});
  const data = {
    labels: nombres,
    datasets: [{
      label: 'Histograma',
      data: valores,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 159, 64, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(201, 203, 207, 0.7)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  
    const config = {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    };
  
  
    const myChart = new Chart(
      document.getElementById('graph'),
      config
    );
