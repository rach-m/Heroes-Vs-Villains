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
      const name = item.name
      const image = item.image
      const powerstats = item.powerstats
      const appearance = item.appearance
      const biography = item.biography['full-name']
      const work = item.work['occupation']
      const connections = item.connections
      info.textContent = `${name} ${powerstats} ${appearance} ${biography} ${work} ${connections}`
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


