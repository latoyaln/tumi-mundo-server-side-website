// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

// Maak een GET route voor de index
app.get('/', async function (request, response) {

    // Haal alle stories uit de API op
    const storiesData = await fetchJson('https://fdnd-agency.directus.app/items/tm_story');
    // Haal alle playlists uit de API op
    const playlistsData = await fetchJson('https://fdnd-agency.directus.app/items/tm_playlist');

    // Render index.ejs uit de views map en geef de opgehaalde data mee als variabelen, genaamd stories en playlists
    response.render('index', { stories: storiesData.data, playlists: playlistsData.data });

})


// Maak een POST route voor de index
app.post('/', function (request, response) {
  // Er is nog geen afhandeling van POST, redirect naar GET op /
  response.redirect(303, '/')
})


// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})