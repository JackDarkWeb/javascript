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
     * @param name
     * @param parent
     * @returns {any | ActiveX.IXMLDOMNode}
     */
    static create(name, parent){
        const elt = document.createElement(name);
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