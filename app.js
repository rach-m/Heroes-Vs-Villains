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
      img.setAttribute('value', item.id)
      heroCard.append(img)
      
      // Appearance Info List
      const appearance = item.appearance
      const appearanceSection = document.createElement('section')
      const appearanceH2 = document.createElement('h2')
      appearanceH2.innerText = "Appearance"
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

      // Biography Info List
      const biography = item.biography
      const biographySection = document.createElement('section')
      const biographyH2 = document.createElement('h2')
      biographyH2.innerText = "Biography"
      console.log(biography)
      const biographyUl = document.createElement('ul')
      for (let key in biography) {
        const item = document.createElement('li')
        item.innerText = `${key}: ${biography[key]}`
        biographyUl.append(item)
      }
      biographySection.append(biographyH2)
      biographySection.append(biographyUl)
      heroCard.append(biographySection)


      // Powerstats Info List
      const powerstats = item.powerstats
      const powerstatsSection = document.createElement('section')
      const powerstatsH2 = document.createElement('h2')
      powerstatsH2.innerText = "Powerstats"
      console.log(powerstats)
      const powerstatsUl = document.createElement('ul')
      for (let key in powerstats) {
        const item = document.createElement('li')
        item.innerText = `${key}: ${powerstats[key]}`
        powerstatsUl.append(item)
      }
      powerstatsSection.append(powerstatsH2)
      powerstatsSection.append(powerstatsUl)
      heroCard.append(powerstatsSection)

      // Work Info List
      const work = item.work
      const workSection = document.createElement('section')
      const workH2 = document.createElement('h2')
      workH2.innerText = "Work"
      console.log(work)
      const workUl = document.createElement('ul')
      for (let key in work) {
        const item = document.createElement('li')
        item.innerText = `${key}: ${work[key]}`
        workUl.append(item)
      }
      workSection.append(workH2)
      workSection.append(workUl)
      heroCard.append(workSection)


      // Connections Info List
      const connections = item.connections
      const connectionsSection = document.createElement('section')
      const connectionsH2 = document.createElement('h2')
      connectionsH2.innerText = "Connections"
      console.log(connections)
      const connectionsUl = document.createElement('ul')
      for (let key in connections) {
        const item = document.createElement('li')
        item.innerText = `${key}: ${connections[key]}`
        connectionsUl.append(item)
      }
      connectionsSection.append(connectionsH2)
      connectionsSection.append(connectionsUl)
      heroCard.append(connectionsSection)

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
