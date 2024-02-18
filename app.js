let series = {
    'poster' : 'poster.webp',
    'name' : 'Как я встретил вашу маму',
    'country' : 'USA',
    'slogan' : '"A love story in reverse"',
    'year' : 2005,
    'finished' : true,
    'actors' : [
        {
            'name' : 'Josh Radnor',
            'role' : 'Ted Mosby',
            'photo' : 'ted.webp'
        },
        {
            'name' : 'Neil Patrick Harris',
            'role' : 'Barney Stinson',
        },
        {
            'name' : 'Cobie Smulders',
            'role' : 'Robin Scherbatsky',
        },
        {
            'name' : 'Jason Segel',
            'role' : 'Marshall Eriksen',
        },
        {
            'name' : 'Alyson Hannigan',
            'role' : 'Lily Aldrin',
        }
    ]
}


let loadButtonElement = document.getElementById('loadButton') 
loadButtonElement.onclick = function(){
    console.log('load')

    let imgElement = document.getElementById('poster')
    imgElement.src = series.poster

    let nameElement = document.getElementById('name')
    nameElement.innerText = series.name

    let countryElement = document.getElementById('country')
    countryElement.innerText =  `Страна: ${series.country}`

    let sloganElement = document.getElementById('slogan')
    sloganElement.innerText =  `Слоган: ${series.slogan}`
   
    let yearElement = document.getElementById('year')
    yearElement.innerText =  `Год выпуска: ${series.year}`

    let finishedElement = document.getElementById('finished')
    finishedElement.innerText =  `Завершен: ${series.finished}`

    let actorsElement = document.getElementById('actors')
    let actorsString = ''
    for (const actor of series.actors) {
        actorsString += `
        <div>Актер: ${actor.name}</div>
        <div>Роль: ${actor.role}</div>
        ` 
    }
    actorsElement.innerHTML = actorsString

    loadButtonElement.classList.toggle('display-none')

    let aboutElement = document.getElementById('about')
    aboutElement.classList.toggle('display-none') 

    let starringTextElement = document.getElementById('starringText')
    starringTextElement.classList.toggle('display-none')
}

