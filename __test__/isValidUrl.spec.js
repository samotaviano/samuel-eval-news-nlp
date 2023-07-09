import { isValidUrl } from '../src/client/js/isValidUrl'

describe('Testing the Url validity functionality', () => {
    test('Check if isValidUrl is defined correctly', () => {
        expect(isValidUrl).toBeDefined();
    })
})