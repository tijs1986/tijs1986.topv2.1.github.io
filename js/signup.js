
const aaa = document.querySelector('#signup');
aaa.addEventListener('submit', (e)=>{
    e.preventDefault();
 
    const gfirstname = document.querySelector('#firstname').value
    const glastname = document.querySelector('#lastname').value
    const gemail = document.querySelector('#email').value
    const gsex = document.querySelector('#sex').value
    const gpassword = document.querySelector('#password').value

    if (gemail.trim() === '') {
                alert('Por favor ingresa correctamente todos tus datos')

    } else {

        const User = JSON.parse(localStorage.getItem('users'))||[]
        const isRegistered = User.find(user =>user.email === gemail)
        if(isRegistered){
            return alert('ya esta registrado')
        }
            User.push({
                firstname:gfirstname,
                lastname:glastname,
                email:gemail,
                sex:gsex,
                password:gpassword})
        
        localStorage.setItem('users',JSON.stringify(User))
        alert('registro exitoso')
                window.location.href = '../index.html'
    }
    
})




