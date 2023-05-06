import BaseComponent from "../prototypes/BaseComponent.js"
import {h} from "../helpers.js"


/**
 * Creates an WC Spacer
 *
 * @export
 * @class
 * @constructor
 * @extends BaseComponent
 */
export default class Spacer extends BaseComponent {

    /**
     * The style of the Spacer
     */
    static css = `
        :host {
            flex:1
        }
    `

    /**
     * Define properties of the Spacer
     */
    props = {}

    render() {
        return '';
    }
}