import { handleSubmit } from '../src/client/js/formHandler'

describe('Testing the Submit functionality', () => {
    test('Check if handleSubmit is defined correctly', () => {
        expect(handleSubmit).toBeDefined();
    })
})