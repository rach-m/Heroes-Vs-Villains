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
  heroName.id = ('heroName-id')

  cImgDiv.append(heroName)
  cImgDiv.append(img)

  // Get To Know Me & Remove Buttons - appended to cImgDiv
  function removeTeam() {
    console.log(localStorage)
    if (localStorage.addTeam) {
      let teamArr = JSON.parse(localStorage.addTeam)
      console.log(teamArr)
      teamArr = teamArr.filter((member) => {return member.id != item.id})
      localStorage.addTeam = JSON.stringify(teamArr)
    } else {
      localStorage.addTeam = JSON.stringify([item])
    }
  }


  // const removeTeam = teamArr.filter()

  const removeTeambtn = document.createElement('button')
  removeTeambtn.id = ('remove-btn')
  removeTeambtn.className = 'removeteam-Btn'
  removeTeambtn.addEventListener('click', removeTeam)
  removeTeambtn.innerText = "Remove"

  const knowbtn = document.createElement('button')
  knowbtn.id = ('knowBtn-id')
  knowbtn.className = 'know-Btn'
  knowbtn.addEventListener('click', heroCard)
  knowbtn.innerText = "Get To Know Me"

  cImgDiv.append(knowbtn)
  cImgDiv.append(removeTeambtn)
  heroCard.append(cImgDiv)

});
