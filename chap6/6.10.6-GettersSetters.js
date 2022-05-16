let o = {

    dataProp: 1,

    get accessorProp() { 
        return this.dataProp; 
    },

    set accessorProp(value) { 
        this.dataProp = value; 
    }
};

console.log(o.accessorProp = 2);