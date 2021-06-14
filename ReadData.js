console.log("called");
function jk() {
    console.log("inside fun");
   var fName=document.getElementById("fName").value
   var lName=document.getElementById("lName").value
   var gender=document.getElementById("gender").value
   var mNo=document.getElementById("mNo").value
   var age=document.getElementById("age").value
   var uState=document.getElementById("uState").value
   var add=document.getElementById("add").value
   
   document.getElementById("tdFname").innerHTML = fName;
   document.getElementById("tdlName").innerHTML = lName;
   document.getElementById("tdgender").innerHTML = gender;
   document.getElementById("tdmNo").innerHTML = mNo;
   document.getElementById("tdage").innerHTML = age;
   document.getElementById("tduState").innerHTML = uState;
   document.getElementById("tdadd").innerHTML = add;
  
}
function contactForm() {
    var contactData={};
    contactData["contact"] =document.getElementById("contact").value
    contactData["email"]=document.getElementById("email").value
    contactData["mNo"]=document.getElementById("mNo").value
    contactData["reason"]=document.getElementById("reason").value  
    console.log(contactData)
    
    document.getElementById("json_para").innerHTML=contactData;
}