import Logo from "../img/nlp-logo.svg"

class SiteLogo {
    
    createLogo() {

        const siteLogoImg = document.createElement('img')

        siteLogoImg.src = Logo

        const siteLogo = document.querySelector('.site-logo')

        siteLogo.appendChild(siteLogoImg)

    }

}

export default SiteLogo