//MOSTRAR ESTADISTICAS CON FECTH

fetch (`../js/data.json`)
 .then (response => response.json ())
 .then (data => printCharts(data))




function printCharts (pericias){
   compareRadialChart (pericias)
   compareBarChart (pericias)
   compareLineChart (pericias)
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
            ],
            backgroundColor: [
                'rgb(185, 144, 177, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderWidth: 1
        

            
            
        }]
    }
    new Chart (`chart1`,{type:`polarArea`, data})
}

function compareBarChart (pericias){
    const data = {
        labels:["UNIDAD FISCAL DE VIOLENCIA FAMILIAR Y DE GENERO 2", "UNIDAD FISCAL DE ROBOS Y HURTOS 2", "UNIDAD FISCAL DE DECISION TEMPRANA", "UNIDAD FISCAL DE DELITOS CONTRA LA INTEGRIDAD SEXUAL 2", "UNIDAD FISCAL DE ATENTADOS CONTRA LAS PERSONAS", ],
        datasets: [{
            data: [
                pericias.filter(fiscalia => fiscalia.Solicitante==="UNIDAD FISCAL DE VIOLENCIA FAMILIAR Y DE GENERO 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE ROBOS Y HURTOS 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE DECISION TEMPRANA").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE DELITOS CONTRA LA INTEGRIDAD SEXUAL 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE ATENTADOS CONTRA LAS PERSONAS").length,
            ],

            backgroundColor: [
                'rgba(27, 76, 24, 0.4)',
                'rgba(99, 143, 222, 0.4)',
                'rgba(223, 172, 8, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(120, 212, 19, 0.4)',
            ]


        }]

       
    }
   
    new Chart (`Chart2`,{type:`bar`, data})
}

function compareLineChart (pericias){
    const data = {
        labels:["UNIDAD FISCAL DE VIOLENCIA FAMILIAR Y DE GENERO 2", "UNIDAD FISCAL DE ROBOS Y HURTOS 2", "UNIDAD FISCAL DE DECISION TEMPRANA", "UNIDAD FISCAL DE DELITOS CONTRA LA INTEGRIDAD SEXUAL 2", "UNIDAD FISCAL DE ATENTADOS CONTRA LAS PERSONAS", "UNIDAD FISCAL DE ROBOS Y HURTOS 1", ],
        datasets: [{
            data: [
                pericias.filter(fiscalia => fiscalia.Solicitante==="UNIDAD FISCAL DE VIOLENCIA FAMILIAR Y DE GENERO 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE ROBOS Y HURTOS 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE DECISION TEMPRANA").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE DELITOS CONTRA LA INTEGRIDAD SEXUAL 2").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE ATENTADOS CONTRA LAS PERSONAS").length,
                pericias.filter(fiscalia => fiscalia.Solicitante=== "UNIDAD FISCAL DE ROBOS Y HURTOS 1").length,
            ],
            backgroundColor: [
                'rgba(27, 76, 24, 0.4)',
                'rgba(99, 143, 222, 0.4)',
                'rgba(223, 172, 8, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(120, 212, 19, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderWidth: 1
       
        }]
       
        
}
    new Chart (`chart3`,{type:`line`, data})
}
