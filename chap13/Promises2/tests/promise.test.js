const NPromise = require('./new_promise');

describe("Promise", () => {

    it('should create a new Promise with pending state', () => {
        const promise = new NPromise(() => {});
        expect(promise.state).toBe('pending');
        expect(promise.value).toBe(undefined);
    });
});


describe("When fulfilled", () => {
    
});