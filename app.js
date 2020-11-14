// const DOMAIN = 'https://superheroapi.com/'
// const API_KEY = '1743621192472664'
// const BASE_URL = `https://superheroapi.com/api/1743621192472664`

const fakeResponse = {data:
{
  "response": "success",
  "results-for": "ironman",
  "results": [
    {
      "id": "732",
      "name": "Ironman",
      "powerstats": {
        "intelligence": "100",
        "strength": "85",
        "speed": "58",
        "durability": "85",
        "power": "100",
        "combat": "64"
      },
      "biography": {
        "full-name": "Tony Stark",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Iron Knight",
          "Hogan Potts",
          "Spare Parts Man",
          "Cobalt Man II",
          "Crimson Dynamo",
          "Ironman"
        ],
        "place-of-birth": "Long Island, New York",
        "first-appearance": "Tales of Suspence #39 (March, 1963)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'6",
          "198 cm"
        ],
        "weight": [
          "425 lb",
          "191 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Black"
      },
      "work": {
        "occupation": "Inventor, Industrialist; former United States Secretary of Defense",
        "base": "Seattle, Washington"
      },
      "connections": {
        "group-affiliation": "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
        "relatives": "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
      }
    }
  ]
}
}


const cors = 'https://cors-anywhere.herokuapp.com/'

async function getHeroId(id) {
  // removeId()

  // const url = (cors + `https://www.superheroapi.com/api/1743621192472664/search/${id}`)
  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  try {
    // const response = await axios.get(url)
    const response = fakeResponse
    const search = response.data.results
    console.log(search)

    search.forEach((item) => {


      const heroCard = document.querySelector('.hero-id')
      
    
      // Hero or Villain Img & Name
      const img = document.createElement('img')
      img.setAttribute('src', item.image.url)
      img.setAttribute('value', item.id)
      img.className = ('c-img')
      const cImgDiv = document.createElement('div')
      cImgDiv.className = ('c-imgDiv')

      const heroName = document.createElement('h2')
      const hvName = item.name
      heroName.textContent = `${hvName}`
      heroName.className = ('c-hvName')

      cImgDiv.append(heroName)
      cImgDiv.append(img)
      heroCard.append(cImgDiv)
      
      
      // Appearance Info List
      const appearance = item.appearance
      const appearanceDiv = document.createElement('div')
      const appearanceH3 = document.createElement('h3')
      appearanceH3.id = ('appearance-id')
      appearanceH3.innerText = "Appearance"
      console.log(appearance)
      const appearanceUl = document.createElement('ul') 
      for (let key in appearance) {
        const item = document.createElement('li')
        item.innerText = `${key}:`
        appearanceUl.append(item)
      }
      const appearanceUl2 = document.createElement('ol')
      for (let key in appearance) {
        const item = document.createElement('li')
        item.innerText = `${appearance[key]}`
        appearanceUl2.append(item)
      }
      appearanceDiv.append(appearanceH3)
      appearanceDiv.append(appearanceUl)
      appearanceDiv.append(appearanceUl2)
      appearanceDiv.className = ('c-appearance')
      heroCard.append(appearanceDiv)

      // Biography Info List
      const biography = item.biography
      const biographyDiv = document.createElement('div')
      const biographyH3 = document.createElement('h3')
      biographyH3.innerText = "Biography"
      biographyH3.id = ('biography-id')
      console.log(biography)
      const biographyUl = document.createElement('ul')
      for (let key in biography) {
        const item = document.createElement('li')
        item.innerText = `${key}:`
        biographyUl.append(item)
      }
      const biographyUl2 = document.createElement('ol')
      for (let key in biography) {
        const item = document.createElement('li')
        item.innerText = `${biography[key]}`
        biographyUl2.append(item)
      }
      biographyDiv.append(biographyH3)
      biographyDiv.append(biographyUl)
      biographyDiv.append(biographyUl2)
      biographyDiv.className = ('c-biography')
      heroCard.append(biographyDiv)


      // Powerstats Info List
      const powerstats = item.powerstats
      const powerstatsDiv = document.createElement('div')
      const powerstatsH3 = document.createElement('h3')
      powerstatsH3.innerText = "Powerstats"
      powerstatsH3.id = ('powerstats-id')
      console.log(powerstats)
      const powerstatsUl = document.createElement('ul')
      for (let key in powerstats) {
        const item = document.createElement('li')
        item.innerText = `${key}:`
        powerstatsUl.append(item)
      }
      const powerstatsUl2 = document.createElement('ol')
      for (let key in powerstats) {
        const item = document.createElement('li')
        item.innerText = `${powerstats[key]}`
        powerstatsUl2.append(item)
      }
      powerstatsDiv.append(powerstatsH3)
      powerstatsDiv.append(powerstatsUl)
      powerstatsDiv.append(powerstatsUl2)
      powerstatsDiv.className = ('c-powerstats')
      heroCard.append(powerstatsDiv)

      // Work Info List
      const work = item.work
      const workDiv = document.createElement('div')
      const workH3 = document.createElement('h3')
      workH3.innerText = "Work"
      workH3.id = ('work-id')
      console.log(work)
      const workUl = document.createElement('ul')
      for (let key in work) {
        const item = document.createElement('li')
        item.innerText = `${key}:`
        workUl.append(item)
      }
      const workUl2 = document.createElement('ol')
      for (let key in work) {
        const item = document.createElement('li')
        item.innerText = `${work[key]}`
        workUl2.append(item)
      }
      workDiv.append(workH3)
      workDiv.append(workUl)
      workDiv.append(workUl2)
      workDiv.className = ('c-work')
      heroCard.append(workDiv)


      // Connections Info List
      const connections = item.connections
      const connectionsDiv = document.createElement('div')
      const connectionsH3 = document.createElement('h3')
      connectionsH3.innerText = "Connections"
      connectionsH3.id = ('connections-id')
      console.log(connections)
      const connectionsUl = document.createElement('ul')
      for (let key in connections) {
        const item = document.createElement('li')
        item.innerText = `${key}:`
        connectionsUl.append(item)
      }
      const connectionsUl2 = document.createElement('ol')
      for (let key in connections) {
        const item = document.createElement('li')
        item.innerText = `${connections[key]}`
        connectionsUl2.append(item)
      }
      connectionsDiv.append(connectionsH3)
      connectionsDiv.append(connectionsUl)
      connectionsDiv.append(connectionsUl2)
      connectionsDiv.className = ('c-connections')
      heroCard.append(connectionsDiv)

    });
  } catch (error) {
    console.log(error);
  }
}
const button = document.querySelector('#search')
button.addEventListener('click', () => {
  let input = document.querySelector('#input-name').value   
  getHeroId(input)
})

function removeId() {
  const removeId = document.querySelector('.hero-id')
  while (removeId.lastChild) {
    removeId.removeChild(removeId.lastChild)
  }
}

