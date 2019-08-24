class Validator extends Dom{

    /**
     * @param idName
     * @returns {[]}
     */
    static isValidName(idName){

        const getId = Dom.getId(idName);
        const name = getId.value;
        const results = [];
        const bool = /^[a-zA-Z]+$/.test(name);
        results.push(bool, name);
        return results;
    }

    /**
     * @param idName
     * @returns {[]}
     */
    static isValidUser(idName){
        const getId = Dom.getId(idName);
        const name = getId.value;
        const results = [];
        const bool = /^[a-zA-Z0-9]+$/.test(name);
        results.push(bool, name);
        return results;
    }

    /**
     * @param idName
     * @returns {[]}
     */
    static isValidMail(idName){
        const getId = Dom.getId(idName);
        const name = getId.value;
        const results = [];
        const bool = /(^[a-z0-9]+)@([a-z0-9])+(\.)([a-z]{2,4})/.test(name);
        results.push(bool, name);
        return results;
    }

    /**
     * @param idName
     * @returns {[]}
     */
    static isValidNumber(idName){
        const getId = Dom.getId(idName);
        const name = getId.value;
        const results = [];
        const bool = /^(\+)[0-9]{11,12}/.test(name);
        results.push(bool, name);
        return results;
    }


}
