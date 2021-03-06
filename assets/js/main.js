let categoriasSistema = []

console.log ("que tiene esto")

//Función General 
loadData ()

function loadData (){
      loadCategoria ()
     showCategorias ()
     mostrarCantidadAsignado ()
     mostrarCantidadConfirmados()
     mostrarCantidadSinTurno()
      
    
      
}

//Funcion que extrae las categorias en este caso los tipo de solicitud

function loadCategoria () {
  const categorias = pericasJson.map (element => element["Tipo de Solicitud"])
  const categoriasSet = new Set (categorias)
  const categoriasUnicas = [...categoriasSet]
  console.log (categoriasUnicas)

  categoriasSistema = categoriasUnicas.map (element=>{
    return {
      nombre:element
      
    }
  })
}

//Función que muestra las categorias y arma los botones

function showCategorias (){
  const divCatergorias = document.getElementById ("menuCategorias")
  categoriasSistema.forEach (element =>{
    const btn = document.createElement ("button")
    btn.classList.add ("btn-outline-primary")
    btn.innerText = element.nombre
   

    btn.addEventListener ("click", ()=>{
      showProducts(element.nombre)
     
    })

    divCatergorias.appendChild (btn)
  })
}

//Función que muestra los numeros de legajos asociados a las categorias 

function showProducts (categoryName){
  const productsToShow = pericasJson.filter(legajo=>legajo["Tipo de Solicitud"]===categoryName)
  const categoryNode = document.getElementsByTagName ("h2") [0]
  categoryNode.classList.add ("pagetitle")
  categoryNode.innerText = categoryName



  let productList = document.getElementById ("tablaDeLegajos")
  productList.innerHTML=""
  productsToShow.forEach (legajo => {
    const div = document.createElement ("tr")
    div.classList.add = ("table-bordered")
    div.innerHTML = `<td> ${legajo.Legajo}</td> <td>${legajo.Estado} </td> <td>${legajo["Fecha Turno"]}</td>`

    productList.appendChild (div)
    
  })
}

//MOSTRAR TARJETAS DE CANTIDADES DE ESTADOS CON TURNO ASIGNADOS 

function mostrarCantidadAsignado () {

  let count = 0
  let cantidades= pericasJson.filter ((d)=> {
    count++;
    return d.Estado === "Turno Asignado"
    
  })
  let nodoCantidades = document.getElementById ("cantidad")
  nodoCantidades.innerText= cantidades.length

  let nodoPortentaje = document.getElementById ("cantidad2")
  nodoPortentaje.innerText =  parseInt (cantidades.length * 100 /count + "%") 
  
}

//MOSTRAR TARJETAS DE CANTIDADES TOTALES 

function mostrarCantidadConfirmados(){
  let countTotal = 0
  let cantidadTotal= pericasJson.filter ((d)=> {
    countTotal++;
    return d.Estado === "Turno Confirmado"
  })


  let nodoConTurno = document.getElementById ("cantidadConfirmado")
  nodoConTurno.innerText = cantidadTotal.length

  let nodoPortentaje = document.getElementById ("cantidades3")
  nodoPortentaje.innerText =  parseInt (cantidadTotal.length * 100 /countTotal + "%") 
 
  
  
}


//MOSTRAR TARJETAS DE CANTIDADES TOTALES SIN TURNO

function mostrarCantidadSinTurno(){
  let countTotal = 0
  let cantidadTotal= pericasJson.filter ((d)=> {
    countTotal++;
    return d.Estado === "Sin Turno"
  })


  let nodoConTurno = document.getElementById ("cantidadSinTurno")
  nodoConTurno.innerText = cantidadTotal.length
  let nodoPortentaje = document.getElementById ("cantidad4")
  nodoPortentaje.innerText =  parseInt (cantidadTotal.length * 100 /countTotal + "%") 
 
  
  
}
