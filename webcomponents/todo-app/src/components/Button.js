import BaseComponent from "../prototypes/BaseComponent.js"
import {h} from "../helpers.js"


/**
 * Creates an WC Button
 *
 * @export
 * @class
 * @constructor
 * @extends BaseComponent
 */
export default class Button extends BaseComponent {

    /**
     * The style of the Button
     */
    static css = `
        button{
            background-color: #282c34;
            color: white;
            border: none;
            border-radius: 20px;
            width: fit-content;
            padding: 10px 15px 10px 15px;
            text-transform: uppercase;
        }
        
        button:hover{
            background-color: #454c5b;
        }
        
        button:active{
            scale: 0.95;
        }
    `

    /**
     * Define properties of the Button
     */
    props = {}

    constructor(){
        super();


        this.addEventListener("click", () => {
            var add_todo = new CustomEvent("add_todo",{detail: window.prompt("Todo:","")}); //
            document.dispatchEvent(add_todo);
        })
    }

    render() {
        return h("button",[
            h("span",[
                this.textContent
            ])
        ])
    }
}