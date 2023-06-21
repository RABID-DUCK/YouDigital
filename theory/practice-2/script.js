function openModal(){
    document.getElementById('modal').classList.remove('hide');
    document.querySelector('body').style.cssText = 'background-color: #ABABAB;';

}

function closeModal(){
    document.getElementById('modal').classList.add('hide');
    document.querySelector('body').style.cssText = 'background-color: #fff;';
}

function submit(){
    if(!document.getElementById('name').value) alert("Заполните поле названия!")
    if(!document.getElementById('number').value) alert("Заполните поле номера телефона!")
    if(!document.getElementById('email').value) alert("Заполните поле почты!")
    if(!document.getElementById('activity').value) alert("Выберите деятельность!")
    if(!document.getElementById('url').value) alert("Заполните поле ссылки!")
    
}

function getData(){
    fetch('https://you-digital.ru/works/posts')
    .then(response => response.json())
    .then(data => {
        document.getElementById('table').classList.remove('hide');
        let tbody = document.querySelector('#table tbody');
        

        data.forEach(elem => {
            tbody.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${elem.id}</td>
                <td>${elem.userId}</td>
                <td>${elem.title}</td>
                <td>${elem.body}</td>
            </tr>
            `)
        });
    })
}
