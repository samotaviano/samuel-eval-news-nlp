import { updateUI } from "./showResults"
import { isValidUrl } from "./isValidUrl"

function handleSubmit(event) {
    event.preventDefault()

    if (document.querySelector('.error')) {
        document.querySelector('.error').remove()
    }

    const mainArea = document.querySelector('main')

    const mainAreaSections = mainArea.querySelectorAll('section')

    if ( mainAreaSections.length === 2) {

        mainAreaSections[1].remove()

    } 

    let meaningCloud = 'https://api.meaningcloud.com/sentiment-2.1'
    let formText = document.getElementById('name')    
    let formTextVAlue = formText.value    

    console.log("::: Form Submitted :::")

    if (isValidUrl(formTextVAlue)) {

        getAPI()

        .then(function(res) {
            getResults(`${meaningCloud}?key=${res.key}&lang=auto&url=${formTextVAlue}`)
        })

    } else if ( formTextVAlue === "" || !isValidUrl(formTextVAlue) ) {

        printErrorMessage("Please enter a valid URL that starts with \"http://\" or \"https://\"")

    }

    function printErrorMessage (message) {
        const errorBox = document.createElement('p')

        errorBox.classList.add('error')

        errorBox.textContent = message

        formText.after(errorBox)
    }
  

    
    
   async function getAPI() {
        const req = await fetch('http://localhost:3000/analisys')
        try {
            const apiData = await req.json()

            return apiData

        } catch (error) {
            console.log("error", error)
        }
    }

    async function getResults(url) {

        const response = await fetch(url)

        const result = await response.json()
        
        if (result.status.msg === 'OK') {
            updateUI(result)
        } else {
            printErrorMessage("There was an error or no content to analyze. Try another url.")         
        }
      }
}

export { handleSubmit }
