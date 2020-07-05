//nav active
const active_feed = document.querySelector('.feed')
const active_line = document.querySelector('.line')

window.addEventListener('load', () => {
    let path = window.location.pathname.replace('/', '#')
    if (path.length == 1) {
        path += 'feed'
    }
    addClassActive(path)
})
//adicionando classe
function addClassActive(id) {
    ['#feed', '#shop'].forEach((e) => {
        const element = document.querySelector(e)
        const line = document.getElementById(`line${e}`)
        if (e == id) {
            element.classList.add('active')
            line.classList.add('active')
        }
        else {
            element.classList.remove('active')
            line.classList.remove('active')
        }
    })
}

//logout
const logout = document.getElementById('logout')

logout.addEventListener("click", () => {
    createGist(`${window.location.origin}/api/logout`)
})

async function deleteAccount() {
    return await new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/api/user/delete`, { method: 'DELETE' }).then(resolve);
    });
}

document.getElementById('delete-account')
    .addEventListener('click', async () => {
        const success = await deleteAccount();

        if (success) {
            window.location.reload();
        } else alert('Erro ao deletar a conta');
    });