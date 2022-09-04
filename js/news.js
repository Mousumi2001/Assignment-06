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

const loadCard = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCard(data.data))
}

const displayCard = cards => {
    const cardContainer = document.getElementById('card');
    cards.forEach(card => {
        // console.log(card)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('row');
        cardDiv.classList.add('border-0');
        cardDiv.classList.add('shadow');
        cardDiv.classList.add('mb-5');

        cardDiv.innerHTML = `
            <div class="col-md-3  col-xs-6 p-0 border-0">
                            <img src="${card.thumbnail_url}" class="img-fluid rounded-start p-2" alt="...">
                        </div>
                        <div class="col-md-9 col-xs-12 p-0 border-0">
                            <div class="card-body">
                                <h5 class="card-title">${card.title}</h5>
                                <p class="card-text">${card.details}</p>                                
                            </div>
                            <div class="d-flex justify-content-around align-items-center">
                              <div class="d-flex">
                              <div >
                                <img class="img-fluid rounded-circle border border-2" src="...">
                              </div>
                                <div>
                                    <p class="fs-6">${card.author.published_date}</p >
                                    <p class="fs-6">${card.author.name}</p >
                                 </div>
                                 </div>
                                 <div>
                                 <p>view: ${card.rating.number}M</p>
                                 </div>
                                 <div>
                                 <button onclick="modalDetails()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">click</button>
                                 
                                 </div>
                            </div>
                        </div >
    `;
        cardContainer.appendChild(cardDiv);
    })
}

const modalDetails = cards => {
    console.log(cards)
}