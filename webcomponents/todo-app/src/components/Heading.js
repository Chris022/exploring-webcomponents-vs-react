import BaseComponent from "../prototypes/BaseComponent.js"
import {h,renderChildren} from "../helpers.js"

/**
 * Creates an WC Heading
 *
 * @export
 * @class
 * @constructor
 */
export default class Heading extends BaseComponent {

    /**
     * The style of the Heading
     */
    static css = `
    `

    /**
     * Define properties of the Heading
     */
    props = {
        "text":this.getAttribute("text") || ""
    }

    render() {
        return h("h1",[
            this.props.text
        ])
    }

}