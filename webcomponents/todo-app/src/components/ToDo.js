import BaseComponent from "../prototypes/BaseComponent.js"
import {h} from "../helpers.js"


/**
 * Creates an WC ToDo
 *
 * @export
 * @class
 * @constructor
 * @extends BaseComponent
 */
export default class ToDo extends BaseComponent {

    /**
     * The style of the ToDo
     */
    static css = `
        :host{
            display: flex;
            flex-direction: row;
            width: 100%;
        }
        
        div{
            padding-left: 20px;
            color: black
        }
    `

    /**
     * Define properties of the ToDo
     */
    props = {
        "text":this.getAttribute("text") || "",
        "done":this.getAttribute("done") || "false",
    }

    render() {
        var input = h("input type=checkbox")
        input.addEventListener("change",(e)=>{
            alert("Todo Completed");
        });
        return [
            input,
            h("div",[
                this.props.text
            ])
        ]
    }
}