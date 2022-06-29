let categoriasSistema = []
console.log ("que tiene esto")

//Función General 
loadData ()

function loadData (){
      loadCategoria ()
     showCategorias ()
     tarjetas ()

    
      
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

//FETCH CON RUTAS RELATIVAS 

function tarjetas () {
  
  fetch (`assets/js/data.json`)
  .then ((res)=> res.json ())
  .then ((data)=> console.log (data))
  
}


