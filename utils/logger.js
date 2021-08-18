// Description -soon-

module.exports = function logger() {
    let debug = console.log;
    let off = ()=>{};
    
    
    function loggerOff() {
        this.debug = off;
    }

    function loggerOn() {
        this.debug = console.log;
    }

    return {loggerOn,loggerOff,debug};

}