//MOSTRAR ESTADISTICAS CON FECTH

fetch (`../js/data.json`)
 .then (response => response.json ())
 .then (data => printCharts(data))




function printCharts (pericias){
   compareRadialChart (pericias)
}


function compareRadialChart (pericias){

    const data= {
        labels: [`Alberto Daniel Pérez`,`Jose Antonio Pavon`, `Deborah Jorgelina Gonzalez`, `Pablo Antonio Garcia`,],
        datasets: [{
            data: [
                pericias.filter (examinador=>examinador.Responsable ===`Alberto Daniel Pérez`).length,
                pericias.filter (examinador=>examinador.Responsable ===`Jose Antonio Pavon`).length,
                pericias.filter (examinador=>examinador.Responsable ===`Deborah Jorgelina Gonzalez`).length,
                pericias.filter (examinador=>examinador.Responsable ===`Pablo Antonio Garcia`).length,
            ]

            
        }]
    }
    new Chart (`chart1`,{type:`polarArea`, data})
}