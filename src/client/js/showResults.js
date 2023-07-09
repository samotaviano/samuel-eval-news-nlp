const updateUI = function (data) {
    const mainArea = document.querySelector('main')

    const resultsSection = document.createElement('section')

    const polarity = data.score_tag

    resultsSection.innerHTML = `
    <h2></h2>
    <h1>RESULTS</h1>
                <div class="results-box text-snippet">
                    <h2>Here is a small text snippet</h2>   
                    <p>${data.sentence_list[0].text}</p>  
                </div>
                <div class="analysis">
                    <div class="results-box polarity">
                        <h2>Polarity</h2>   

                    </div>
                    <div class="results-box subjectivity">
                        <p>The text is <strong>${data.subjectivity}</strong></p>  
                    </div>
                </div>
    
    `

    mainArea.appendChild(resultsSection)

    setPolarity(data.score_tag)
}

function setPolarity (pol) {
    
    const polField = document.querySelector('.polarity')

    const polLabel = document.createElement('div')
    
    polLabel.classList.add('label')
    
    const label = document.querySelector('.label')

    if (pol === 'NONE') {

        polField.appendChild(polLabel)

        polLabel.innerHTML = `
        <div class="label">
            <p>The text has no polarity</p>
        </div>
        `

    } else {


        const polBar = document.createElement('div')

        polBar.classList.add('bar')

        polBar.innerHTML = `
            <div class="step" data-pol="N+"></div>
            <div class="step" data-pol="N"></div>
            <div class="step" data-pol="NEU"></div>
            <div class="step" data-pol="P"></div>
            <div class="step" data-pol="P+"></div>
        `

        polLabel.innerHTML = `
        <div class="label">
            <p>NEGATIVE</p>
            <p>NEUTRAL</p>
            <p>POSITIVE</p>
        </div>
        `

        polField.appendChild(polBar)

        polField.appendChild(polLabel)

        const steps = document.querySelectorAll('.step')

        for (let i = 0; i < steps.length; i++) {
            
            const currentStep = steps[i]

            if ( currentStep.dataset.pol === pol ) {
                currentStep.classList.add('active')
            }
            
        }

    }

    return polField.innerHTML

}

export { updateUI }