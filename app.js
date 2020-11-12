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
      const heroId = document.querySelector('.hero-id')
      const idDiv = document.createElement('div')
      idDiv.className = 'id-div'
      heroId.append(idDiv)


      const info = document.createElement('p')
      
      const appearance = item.appearance['gender'] + item.appearance['race'] + item.appearance['height'] + item.appearance['weight'] + item.appearance['eye-color']
      const biography = item.biography['full-name'] + item.biography['aliases'] + item.biography['place-of-birth']
      const image = item.image
      const powerstats = item.powerstats['intelligence'] + item.powerstats['strength'] + item.powerstats['speed'] + item.powerstats['durability'] + item.powerstats['power']
      const work = item.work['occupation'] + item.work['base']
      const connections = item.connections['group-affiliation']
      info.textContent = `${biography} ${powerstats} ${appearance} ${work} ${connections} ${image}`
      idDiv.append(info)
      
      const img = document.createElement('img')
      img.setAttribute('src', item.image.url)
      idDiv.append(img)

    });
  } catch (error) {
    console.log(error);
  }
}
const button = document.querySelector('#search')
button.addEventListener('click', () => {
  let input = document.querySelector('#blank').value
  getHeroId(input)
})

function removeId() {
  const removeId = document.querySelector('.hero-id')
  while (removeMovie.lastChild) {
    removeId.removeChild(removeId.lastChild)
  }
}


