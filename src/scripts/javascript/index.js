import { menu } from "./utils/navbar.js"

async function url() {
    const response = await fetch('https://loteriascaixa-api.herokuapp.com/v2/api-docs')
    const json = await response.json()
    
}
url()

menu()