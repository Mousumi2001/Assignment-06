function loadUsers2() {
    fetch(' https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayUsers2(data.data.news_category))
}