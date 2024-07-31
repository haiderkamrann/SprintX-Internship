const localScopeFunction = require('./localScopeFunction');

describe('Testing localScopeFunction', () => {
    it('should return the local variable value', () => {
        const result = localScopeFunction();

        expect(result).toBe('Haider Kamran: This is local scope!');
    });

    it('should not affect the global variable', () => {
        let myName = 'Haider: This is global scope';

        localScopeFunction();

        expect(myName).toBe('Haider: This is global scope');
    });
});
