const valid=()=>{
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;

    if(!user,!email,!pass,!cpass){
        alert('data incomplete')
        
    }

    if(pass!==cpass){
        alert('Password not matching');
       
    }
    if(pass.length<=6){
        alert('password must be 6 character long')
    }
    if(!email.includes('@')){
        alert('Email is not valid')
    }
    if(!user.match(/^[a-zA-Z0-9]+$/)){
        alert('Username must be alpha numeric')
    }

    
}