class NPromise{
    
    constructor(executor){
        if(typeof executor !== 'function'){
            throw new Error('Promise executor must be a function');
        }

        this.state = 'pending';
        this.value = undefined;
        this.onFulfillChain = [];
        this.onRejectChain = [];
    }
}

module.exports = NPromise;