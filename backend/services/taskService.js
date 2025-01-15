const validateTask = {
    isEmpty: async(param) => {
        const param = param;
        if(!param){
            return
        }
        if(param && param.body && param.body.name){
            param = param.body.name;
        }

    }
};
module.exports = validateTask;