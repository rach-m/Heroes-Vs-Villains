const team = JSON.parse(localStorage.addTeam)
console.log(team)

team.forEach((item) => {


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


  // Get To Know Me & Remove Buttons
  const btnDiv = document.createElement('div')
  btnDiv.id = ('btnDiv-id')
  btnDiv.className = ('c-btnDiv')

  function addTeam() {
    console.log(localStorage)
    if (localStorage.addTeam) {
      let teamArr = JSON.parse(localStorage.addTeam)
      console.log(teamArr)
      teamArr.push(item)
      localStorage.addTeam = JSON.stringify(teamArr)
    } else {
      localStorage.addTeam = JSON.stringify([item])
    }
  }
  const addTeambtn = document.createElement('button')
  addTeambtn.id = ('team-btn')
  addTeambtn.className = 'addteam-Btn'
  addTeambtn.addEventListener('click', addTeam)
  addTeambtn.innerText = "Add to Team"

  const knowbtn = document.createElement('button')
  knowbtn.id = ('knowBtn-id')
  knowbtn.className = 'know-Btn'
  knowbtn.addEventListener('click', heroCard)
  knowbtn.innerText = "Get To Know Me"

  
  btnDiv.append(knowbtn)
  btnDiv.append(addTeambtn)
  heroCard.append(btnDiv)
});
