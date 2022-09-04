function loadUsers2() {
    fetch(' https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayUsers2(data.data.news_category))
}

function displayUsers2(data) {
    const ul = document.getElementById('users-list')
    for (const user of data) {
        // console.log(user.category_name);
        const li = document.createElement('li');
        li.classList.add('style')
        li.innerText = user.category_name;
        ul.appendChild(li)
    }
}
loadUsers2()