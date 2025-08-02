const valid=()=>{
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    if (!user) {
        document.getElementById("use").innerHTML = 'Please fill the Username field!';
        return;
    }
    if (!email) {
        document.getElementById("demo").innerHTML = 'Please fill the Email field!';
        return;
    }
    if (!pass) {
        document.getElementById("pas").innerHTML = 'Please fill the Password field!';
        return;
    }
    if (!cpass) {
        document.getElementById("cp").innerHTML = 'Please Retype Password!';
        return;
    }
    if(user.length>=10){
        document.getElementById("use").innerHTML = 'username must be less than 10 haracter';
        
    }  
 

    if(pass!==cpass){
        document.getElementById('cp').innerHTML = 'password is not matching';
       
    }
    if(pass.length<=6){
        document.getElementById('pas').innerHTML = "password must be 6 character long";
    }
    if(!email.includes('@')){
    
        document.getElementById('demo').innerHTML = 'incorrect email adress';
    }
    if(!user.match(/^[a-zA-Z0-9]+$/)){
        
        document.getElementById('use').innerHTML = 'username must be alpha numeric';
    }
    
    
}
document.getElementById("user").onclick = () =>{
    document.getElementById("use").innerHTML = "";
    document.getElementById("user").style.border ="1px solid black";
};
document.getElementById("email").onclick = () =>{
    document.getElementById("demo").innerHTML = "";
    document.getElementById("email").style.border ="1px solid black";
};
document.getElementById("pass").onclick = () =>{
    document.getElementById("pas").innerHTML = "";
    document.getElementById("pass").style.border ="1px solid black";

};
document.getElementById("cpass").onclick = () =>{
    document.getElementById("cp").innerHTML = "";
    document.getElementById("cpass").style.border ="1px solid black";
};
