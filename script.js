const takeScreenShot = () => {
  const element = document.getElementById('ranking-elo')

  html2canvas(element)
    .then((canvas) => {
      let image = canvas.toDataURL('image/jpg')
      const a = document.createElement('a')
      a.href = image
      a.download = 'Ranking-Elo.jpg'
      a.click()
    })
    .catch((err) => {
      console.error(err)
    })
}

// Datos del ranking
const players = [
  {
    rank: 1,
    name: 'Nuñez Vargas, Medelyn Nicole',
    elo: 1499,
    change: 84,
    color: 'gold'
  },
  {
    rank: 2,
    name: 'Diaz Charpentier, Ashley Valeria',
    elo: 1747,
    change: 61,
    color: 'blue'
  },
  {
    rank: 3,
    name: 'Ortega Canisales, Aaden Josue',
    elo: 1492,
    change: 60,
    color: 'red'
  },
  { rank: 4, name: 'Francia, Victor', elo: 1615, change: 55, color: 'gray' },
  {
    rank: 5,
    name: 'Marin Aguirre, Fabian Osvaldo',
    elo: 1484,
    change: 55,
    color: 'gray'
  }
]

// Seleccionar el contenedor donde se insertará el ranking
const rankingList = document.querySelector('.ranking-list')

// Función para crear el ranking dinámicamente
function createRanking() {
  players.forEach((player) => {
    // Crear el contenedor del ítem
    const rankingItem = document.createElement('div')
    rankingItem.classList.add('ranking-item')

    // Contenedor de rango
    const rankDiv = document.createElement('div')
    rankDiv.classList.add('rank', `bg-${player.color}`)
    const rankP = document.createElement('p')
    rankP.textContent = player.rank
    rankDiv.appendChild(rankP)

    // Contenedor de detalles
    const detailsDiv = document.createElement('div')
    detailsDiv.classList.add('details', player.color)

    // Nombre del jugador
    const nameP = document.createElement('p')
    nameP.classList.add('name')
    nameP.textContent = player.name

    // Puntuación
    const scoreDiv = document.createElement('div')
    scoreDiv.classList.add('score')

    const eloP = document.createElement('p')
    eloP.classList.add('elo-player')
    eloP.textContent = player.elo

    const changeDiv = document.createElement('div')
    changeDiv.classList.add('change')

    // SVG flecha
    const changeSvg = document.createElement('div')
    changeSvg.classList.add('arrow')
    changeSvg.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M112 244l144-144 144 144M256 120v292"></path>
      </svg>
    `

    const changeSpan = document.createElement('span')
    changeSpan.classList.add('elo-player')
    changeSpan.textContent = player.change

    changeDiv.appendChild(changeSvg)
    changeDiv.appendChild(changeSpan)

    scoreDiv.appendChild(eloP)
    scoreDiv.appendChild(changeDiv)

    detailsDiv.appendChild(nameP)
    detailsDiv.appendChild(scoreDiv)

    // Agregar rango y detalles al ítem del ranking
    rankingItem.appendChild(rankDiv)
    rankingItem.appendChild(detailsDiv)

    // Agregar el ítem al contenedor principal
    rankingList.appendChild(rankingItem)
  })
}

// Llamar a la función para generar el ranking
createRanking()
