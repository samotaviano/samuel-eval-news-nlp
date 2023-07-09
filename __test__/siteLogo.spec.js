import SiteLogo from '../src/client/js/siteLogo'

describe('Testing the insert logo functionality', () => {
    test('Check if createLogo is defined correctly', () => {

        const testLogo = new SiteLogo;

        expect(testLogo.createLogo).toBeDefined();
    })
})