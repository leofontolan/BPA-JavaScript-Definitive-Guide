class NPromise{

    constructor(executor){
        if(typeof executor !== 'function'){
            throw new TypeError('Promise resolver undefined is not a function');
        }
        
        this.state = 'pending';
        this.value = undefined;
        this.onFulfillChain  = [];
        this.onRejectCallChain = [];

    }
}

module.exports = NPromise;