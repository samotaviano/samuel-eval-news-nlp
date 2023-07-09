import { handleSubmit } from './js/formHandler'
import SiteLogo from './js/siteLogo'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/results.scss'

const logoInst = new SiteLogo

logoInst.createLogo()

export {
    handleSubmit
}