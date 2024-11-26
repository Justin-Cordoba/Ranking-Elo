const takeScreenShot = () => {
  const element = document.getElementById('divToTakeScreenShot')
  if (!element) {
    return
  }

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
    name: 'Justin Cordoba Sevilla',
    elo: 1499,
    change: 99,
    color: 'gold'
  },
  { rank: 2, name: 'John Doe', elo: 1450, change: 50, color: 'blue' },
  { rank: 3, name: 'Jane Smith', elo: 1400, change: 30, color: 'red' },
  { rank: 4, name: 'Alice Brown', elo: 1350, change: 20, color: 'gray' },
  { rank: 5, name: 'Bob White', elo: 1300, change: 10, color: 'gray' }
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
    eloP.classList.add('line-name', 'elo-player')
    eloP.textContent = player.elo

    const changeDiv = document.createElement('div')
    changeDiv.classList.add(
      'change',
      player.change > 0 ? 'positive' : 'negative'
    )

    const changeImg = document.createElement('img')
    changeImg.src = '/Arrow.png'
    changeImg.alt = ''

    const changeSpan = document.createElement('span')
    changeSpan.classList.add('elo-player')
    changeSpan.textContent = player.change

    changeDiv.appendChild(changeImg)
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
