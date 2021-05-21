/**
 * @jest-environment jsdom
 */
import { pushToHistory } from '../scripts/router.js'
describe('Testing pushToHistory', () => {
    test('settings', () => {
        expect(pushToHistory('settings',2).state['page']).toBe('settings');
    });
    test('entry', () => {
        expect(pushToHistory('entry', 2).state['page']).toBe("entry2");
    });
    test('default', () => {
        expect(pushToHistory('default', 1).state['page']).toBe(undefined);
    });

});


