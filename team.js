function showTeam() {
  const heroCard = document.querySelector('.hero-id')
  heroCard.innerHTML = null

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

    // Hidden Hero/Villain info only revealed when "Get To Know Me" button is clicked
    const knowMe = document.createElement('div')
    knowMe.className = ("knowMe hidden")

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
          item.innerText = `${key}: ${appearance[key]}`
          appearanceUl.append(item)
        }
       
        appearanceDiv.append(appearanceH3)
        appearanceDiv.append(appearanceUl)
        appearanceDiv.className = ('c-appearance')
        knowMe.append(appearanceDiv)

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
          item.innerText = `${key}: ${biography[key]}`
          biographyUl.append(item)
        }
        
        biographyDiv.append(biographyH3)
        biographyDiv.append(biographyUl)
        biographyDiv.className = ('c-biography')
        knowMe.append(biographyDiv)


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
          item.innerText = `${key}: ${powerstats[key]}`
          powerstatsUl.append(item)
        }
       
        powerstatsDiv.append(powerstatsH3)
        powerstatsDiv.append(powerstatsUl)
        powerstatsDiv.className = ('c-powerstats')
        knowMe.append(powerstatsDiv)

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
          item.innerText = `${key}: ${work[key]}`
          workUl.append(item)
        }
       
        workDiv.append(workH3)
        workDiv.append(workUl)
        workDiv.className = ('c-work')
        knowMe.append(workDiv)


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
          item.innerText = `${key}: ${connections[key]}`
          connectionsUl.append(item)
        }

        connectionsDiv.append(connectionsH3)
        connectionsDiv.append(connectionsUl)
        connectionsDiv.className = ('c-connections')
        knowMe.append(connectionsDiv)
    

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
      showTeam()
    }

    const removeTeambtn = document.createElement('button')
    removeTeambtn.id = ('remove-btn')
    removeTeambtn.className = 'removeteam-Btn'
    removeTeambtn.addEventListener('click', removeTeam)
    removeTeambtn.innerText = "Remove Me"

    const knowbtn = document.createElement('button')
    knowbtn.id = ('knowBtn-id')
    knowbtn.className = 'know-Btn'
    knowbtn.addEventListener('click', () => knowMe.classList.toggle('hidden'))
    knowbtn.innerText = "Get To Know Me"

    cImgDiv.append(knowbtn)
    cImgDiv.append(removeTeambtn)
    cImgDiv.append(knowMe)
    heroCard.append(cImgDiv)

  });
} 
showTeam()