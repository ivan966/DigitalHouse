function reporteDePasajeros(estaciones){
    let arrays = [];
    let pasajeros = 200;
    for(let i = 0; i<=estaciones;i++){
      if(i != 0){
        if(i == 5){
        pasajeros -= 80;
        pasajeros += 120;
      }
      else{
        pasajeros += 50;
        pasajeros -= 30;
      }
      }
    arrays.push("En la estación " +i+ " hay "+pasajeros+" pasajeros arriba del tren")
    }
    return arrays;
  }


  console.log(reporteDePasajeros(5))