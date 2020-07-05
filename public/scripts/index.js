async function load() {
    const user = await loadUserData(); 
    
    const userName = document.getElementById('user-name')
    const textNome = document.createTextNode(user.name.split(" ")[0]);

    userName.appendChild(textNome)
}

//likezinho show mlk
const like = document.querySelector('.fa-heart')
var button_like = false
let count = 0


like.addEventListener('click', () => {
    if (!button_like) {
        like.classList.remove('far')
        like.classList.add('fas')
        button_like = true

        if(count===0){
            const like = document.getElementById('user-pontos')
            like.innerText = "Pontos: 10";
            count=1;
        }
    }
    else {
        like.classList.add('far')
        like.classList.remove('fas')
        button_like = false
    }
})

const comment = document.getElementsById('comentar')
comment.addEventListener('click', () =>{
    alert('Em manutenção :(');
})