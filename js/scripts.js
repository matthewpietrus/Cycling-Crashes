  mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGhld3BpZXRydXMiLCJhIjoiY2oya21sNnFtMDBkdzMzbnZ5NGh5dDM1eiJ9.wcy3gfH3AUsHi7Xzs58xPA';

    var map = new mapboxgl.Map({
      container: 'mapcontainer', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-73.965818,40.722863], // starting position [lng, lat]
      zoom: 11, // starting zoom
      pitch: 0,
});
    // var marker = new mapboxgl.Marker({
    //   color: "red"
    // })
    //   .setLngLat([-73.968285, 40.785091])
    //   .addTo(map);


// //set up dummy datea
// var dummydata = [ //square brackets [arrays] are use for arrays
//   {
//     name: 'The Mall',
//     point: [-73.972086,40.773354]
//   },
//   {
//     name: 'Belvedere Castle',
//     point: [-73.970206,40.778612]
//   },
//   {
//     name: 'The Ravine',
//     point: [-73.972086,40.773354]
//   }
// ]
//
//
// dummydata.forEach(function(data) {
//   console.log(data.name, data.point)
//
//   new mapboxgl.Marker()
//   .setLngLat(data.point)
//   .setPopup(new mapboxgl.Popup().setHTML(`<h1>${data.name}</h1>`))
//   .addTo(map);
// })

//let's add our class pizza shop to the mapbox
$.getJSON('./data/crashes.json',function(crashrow) { //$.getJSON('where the data lives', function(pizzashop))
  console.log(crashrow)

  crashrow.forEach(function(crashrow) {
    console.log(crashrow.name, crashrow.pizzashop)

    var html = `
      <h2>${crashrow.NUMBERxOFxCYCLISTxINJURED} Cyclists Injured</h3>
      <h4>Cause of Crash:</h4>
        <div>${crashrow.CONTRIBUTINGxFACTORxVEHICLEx1}</div>
      <h4>Vehicle involved:</h4>
        <div> ${crashrow.VEHICLExTYPExCODEx1}</i></div>
      `

      var color = 'Red'

      if (crashrow.VEHICLExTYPExCODEx1 === 'Bike') {
        color = '#377eb8'
      }

      if (crashrow.VEHICLExTYPExCODEx1 === 'E-Bike'||
          crashrow.VEHICLExTYPExCODEx1 === 'E-Scooter'||
          crashrow.VEHICLExTYPExCODEx1 === 'Motorcycle') {
        color = '#e41a1c'
      }

      if (crashrow.VEHICLExTYPExCODEx1 === 'Station Wagon/Sport Utility Vehicle'||
          crashrow.VEHICLExTYPExCODEx1 === 'Van'||
          crashrow.VEHICLExTYPExCODEx1 === 'CEMENT TRU'||
          crashrow.VEHICLExTYPExCODEx1 === 'Pick-up Truck') {
        color = '#4daf4a'
      }

      if (crashrow.VEHICLExTYPExCODEx1 === 'Bus') {
        color = '#984ea3'
      }

      if (crashrow.VEHICLExTYPExCODEx1 === 'Taxi') {
        color = '#ffd92f'
      }

      if (crashrow.VEHICLExTYPExCODEx1 === 'Sedan') {
        color = '#ff7f00'
      }

    new mapboxgl.Marker({
      color: color,
    })
    .setLngLat([crashrow.LONGITUDE, crashrow.LATITUDE])
    .setPopup(new mapboxgl.Popup().setHTML(html))
    .addTo(map);
  })
})

//function(functionname) {what is actually happenning}
