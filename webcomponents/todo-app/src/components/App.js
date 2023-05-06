import BaseComponent from "../prototypes/BaseComponent.js"
import {h} from "../helpers.js"


/**
 * Creates an WC App
 *
 * @export
 * @class
 * @constructor
 * @extends BaseComponent
 */
export default class App extends BaseComponent {

    /**
     * The style of the App
     */
    static css = `
        :host {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            height: 100vh;
            width: 100vw;
        }
    `

    /**
     * Define properties of the Button
     */
    props = {}

    /** @type {array} */
    todos = [];

    constructor(){
        super();

        document.addEventListener("add_todo",(event)=>{
            this.todos.push({name:event.detail});
            this.rerender();
        })
    }

    render() {
        var todos_elements =  this.todos.map((todo) => h(`wc-todo text=${todo.name}`))

        return [
            h('wc-heading text=ToDo-Webcomponents'),
            h('wc-card',[
                ...todos_elements,
                h('wc-spacer'),
                h('wc-button id="my-button"',[
                    "Add Todo"
                ])
            ])
        ];
    }
}