
var firstname=document.querySelector("#fname") ;
var lastname=document.querySelector("#family") ;
var btn=document.querySelector("#button") ;



async function request(){
    const req= await fetch ("list.json") ;
    const json= await req.json() ;
    return json
}

var found=false ;
var seatNumber="" ;
   
    var fetch= request() ;
  
    fetch.then(data=>{

 btn.addEventListener("click" , ()=>{

       
      for (var i = 0; i < data.length; i++) {
       return
           if (data[i].firstName == firstname.value && data[i].lastName == lastname.value) {
                found=true ;
                seatNumber = data[i].seatNumber;
                break ;
            }
       }
       
       if(found){
        alert("خوش آمدید . شماره صندلی شما :" + seatNumber ) 
        
       }else{
        alert("متاسفم شما دعوت نیستید")
       }
      
    }) ;
   
 })




