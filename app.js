const DOMAIN = 'https://superheroapi.com/'
const API_KEY = '1743621192472664'
const BASE_URL = `https://superheroapi.com/api/1743621192472664`



const cors = 'https://cors-anywhere.herokuapp.com/'

async function getHeroId(id) {
  const url = cors + `https://www.superheroapi.com/api/1743621192472664/search/${id}`

  try {
    const response = await axios.get(url)
    const search = response.data.results
    console.log(search)

    search.forEach((item) => {
      const heroCard = document.querySelector('.hero-id')
      const img = document.createElement('img')
      img.setAttribute('src', item.image.url)
      heroCard.append(img)

      const info = document.createElement('p')
      // const appearance = item.appearance['gender'] + item.appearance['race'] + item.appearance['height'] + item.appearance['weight'] + item.appearance['eye-color']
      const appearance = item.appearance
      const appearanceSection = document.createElement('section')
      const appearanceH2 = document.createElement('h2')
      appearanceH2.innerText = "appearance"
      console.log(appearance)
      const appearanceUl = document.createElement('ul')
      for (let key in appearance) {
        const item = document.createElement('li')
        item.innerText = `${key}: ${appearance[key]}`
        appearanceUl.append(item)
      }
      appearanceSection.append(appearanceH2)
      appearanceSection.append(appearanceUl)
      heroCard.append(appearanceSection)

      // const biography = item.biography['full-name'] + item.biography['aliases'] + item.biography['place-of-birth']
      // con

      // const image = item.image

      // const powerstats = item.powerstats['intelligence'] + item.powerstats['strength'] + item.powerstats['speed'] + item.powerstats['durability'] + item.powerstats['power']

      // const work = item.work['occupation'] + item.work['base']

      // const connections = item.connections['group-affiliation']

      // info.innerHTML = `${biography} ${powerstats} ${appearance} ${work} ${connections} ${image}`
      // heroCard.append(info)
      

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


