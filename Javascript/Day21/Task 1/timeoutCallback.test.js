const fun = require('./timeoutCallback');

describe('fun', () => {
    jest.useFakeTimers();  

    it('should call the callback function after the specified delay', () => {
        const callback = jest.fn(); 
        
        fun(2000, callback); 

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(2000);

        expect(callback).toBeCalled(); 
        expect(callback).toHaveBeenCalledTimes(1); 
    });
});


