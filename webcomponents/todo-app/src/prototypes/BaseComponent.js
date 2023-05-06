export default class BaseComponent extends HTMLElement {

    config = { attributes: true, childList: true, subtree: true };

    constructor() {
        super()

        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow_style = document.createElement("style");
        this.shadow_style.setAttribute('protected', 'true');
        this.shadow.appendChild(this.shadow_style);

        this.observer = new MutationObserver(this.update(this));

        this.observer.observe(this, this.config);
    }

    connectedCallback() {
        this.shadow_style.textContent = this.constructor.css;
        this.html = this.render()
    }

    update(element){
        return (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type !== "attributes") continue;
                //if an atribute was changed, update the atribute list
                element.props[mutation.attributeName] = element.getAttribute(mutation.attributeName)
            }
            //trigger the rerender
            element.rerender();
        }
    }

    rerender(){
        this.html = this.render()
    }

    /**
     * Returns th html of a component
     * @abstract
     * @return {string}
     */
    render() {
        throw new Error('must be implemented by subclass!');
    }

    set html(innerHTML) {
        this.shadow.innerHTML = ''
        this.shadow.appendChild(this.shadow_style)
        if (typeof innerHTML === 'string') {
            if (innerHTML) {
                /**
                 * this div is used to render string to childNodes and avoids:
                 * "this.root.innerHTML = this.root.innerHTML + innerHTML"
                 * the above would re-initiate (newly construct) already set childNodes, which is bad for performance but also destroys references
                 *
                 * @type {HTMLElement}
                 */
                const div = document.createElement('div')
                div.innerHTML = innerHTML
                innerHTML = div.childNodes
            }
        }
        if (innerHTML.length === undefined) innerHTML = [innerHTML]
        // @ts-ignore
        Array.from(innerHTML).forEach(node => {
            if (node) this.shadow.appendChild(node)
        })
    }
}