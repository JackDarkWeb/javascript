class Dom{
    /**
     *
     * @param name
     * @returns {HTMLElement}
     */
    static getId(name){
        return document.getElementById(name);
    }

    /**
     *
     * @param name
     * @returns {HTMLCollectionOf<Element>}
     */
    static getClass(name){
        let classes = [] ;
        classes = document.getElementsByClassName(name);
        return classes;
    }

    /**
     *
     * @param name
     * @returns {HTMLCollectionOf<HTMLElementTagNameMap[*]>}
     */
    static getTag(name){
        let tags = [];
        tags = document.getElementsByTagName(name);
        return tags;
    }

    /**
     *
     * @param tagName
     * @returns {any}
     */
    static getQuerySelector(tagName){
        return document.querySelector(tagName);
    }

    /**
     *
     * @param tagName
     * @param parent
     * @returns {any | ActiveX.IXMLDOMNode}
     */
    static create(tagName, parent){
        const elt = document.createElement(tagName);
        return parent.appendChild(elt);
    }

    /**
     *
     * @param name
     * @param text
     * @returns {*}
     */
    static html(name, text = null){
        return this.getId(name).innertHTML = text;
    }

    /**
     * @param idName
     * @returns {*}
     */
    static getValueSelect(idName){
        const id = this.getId(idName);
       return id.value;
    }

    /**
     *
     * @param idName
     * @returns {*}
     */
    static getValuesSelects(idName){
        const id = this.getId(idName);
        return id.value;
    }

    /**
     *
     * @param idNames
     * @returns {[]}
     */
    static getValuesCheckedBox(idNames = []){
        const values = [];
        for(const idName of idNames){
            const id = this.getId(idName);
            if(id.checked === true){
                values.push(id.value);
            }
        }
        return values;
    }

    /**
     *
     * @param idNames
     * @returns {string}
     */
    static getValueCheckedRadio(idNames = []){
        let values = '';
        for(const idName of idNames){
            const id = this.getId(idName);
            if(id.checked === true){
                values = id.value;
            }
        }
        return values;
    }
    static getValuesSelectsMultiple(idName){
        const id = this.getId(idName);
        alert(typeof id.value.selected);
    }

    /**
     *
     * @param name
     * @returns {number}
     */
    static getClassCount(name){
        return this.getClass(name).length;
    }

    /**
     *
     * @param name
     * @returns {number}
     */
    static getTagsCount(name){
        return this.getTag(name).length;
    }
}