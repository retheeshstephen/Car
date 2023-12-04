// 1.Store car detailes


function storeRecord(){

    cardetails={
        carb:brand.value,
        carp:price.value,
        cark:nam.value
    }
    
    if(cardetails.carb=="" || cardetails.carp=="" || cardetails.cark==""){
        alert ('Please fill all the fields')
    }else{
        if(cardetails.cark in localStorage){
            alert ('Already exist')
        }else{
            localStorage.setItem(cardetails.cark,JSON.stringify(cardetails))
            alert ('Car details added successfully')
            brand.value=""
            price.value=""
            nam.value=""
        }
    }
    

    
 }






// 2.Retrive all records

function search(){

    let nul=det.value
   if(nul in localStorage){
    let cardetails=JSON.parse(localStorage.getItem(nul))
    result.innerHTML = `<div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h5 class="card-title">Car Details</h5>
      
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Car Brand:${cardetails.carb}</li>
      
      <li class="list-group-item">Price:${cardetails.carp}</li>
      <li class="list-group-item">Key:${cardetails.cark}</li>

      
    </ul>
    <button onclick=ok() type="button" class="btn btn-primary">OK</button>
  </div>`
   }else{
    alert ('Data not found')
   }
    
    
}
function ok(){
    det.value=""
    result.innerHTML=""
}






// 3.Remove specific record 

function removeRecord(){
     let a=remove.value
    
    if(a in localStorage){
        alert (' ${a} Removed successfully' )
        remove.value=""
        cardetails=JSON.parse(localStorage.removeItem(a))
        
        
    
    }else{
        alert ("Data not found")
        remove.value=""

    }
}


// 4.Clear all Records
function clearRecord(){
    localStorage.clear()
    alert ("All Data cleared successfully")
    brand.value=""
    price.value=""
    nam.value=""
    det.value=""
    remove.value=""

}