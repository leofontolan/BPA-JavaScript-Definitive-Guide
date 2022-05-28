const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

class NPromise{
    
    constructor(executor){
        if(typeof executor !== 'function'){
            throw new Error('Promise executor must be a function');
        }

        this.state = STATE.PENDING;
        this.value = undefined;
        this.onFulfillChain = [];
        this.onRejectCallChain = [];

        executor(this.resolve.bind(this), this.reject);
    }

    resolve(res){
        if(this.state !== STATE.PENDING){
            return;
        }

        this.state = STATE.FULFILLED;
        this.value = res;
    }

    reject(){

    }


}

module.exports = NPromise;