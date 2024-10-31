const display=(data)=>{
    srn.value+=data  
  console.log(data);
    
   
}
const clearData=()=>{
    srn.value=" "
   
}
const backSpace=()=>{
   let enteredValue=srn.value
   srn.value=enteredValue.slice(0,-1)
 
}
const calculate=()=>{
    //to handle runtime errors
  try {
    srn.value = eval(srn.value); //code with chance of error
  } catch (error) {  //way to handle error
    srn.value=""
    srn.placeholder = "SyntaxError";
  }

}