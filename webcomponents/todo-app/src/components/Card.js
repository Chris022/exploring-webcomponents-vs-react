import BaseComponent from "../prototypes/BaseComponent.js"
import {h,renderChildren} from "../helpers.js"

/**
 * Creates an WC Card
 *
 * @export
 * @class
 * @constructor
 */
export default class Card extends BaseComponent {

    /**
     * The style of the Card
     */
    static css = `
        div {
            height: 300px;
            width: 300px;
            background-color: white;
            border-radius: 10px;
        
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding:20px
        }
    `

    /**
     * Define properties of the Card
     */
    props = {}

    render() {
        return h("div",[
            ...renderChildren(this.childNodes)
        ])
    }

}