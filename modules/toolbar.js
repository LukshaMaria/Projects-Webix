import { global_id } from "./values.js";
const toolbar = {
    view: "toolbar",
    css: "webix_dark",
    elements: [
        {
            view: "label",
            css: "label_toolbar", label: "My App"
        },
        {},
        {
            view: "button",
            css: "webix_transparent",
            type: "icon",
            icon: "mdi mdi-account",
            label: "Profile",
            width: 100,
            click() {
                const node = this.getNode();
                $$(global_id.popup_id).show(node);
            }
        },
    ]
};
export default toolbar;
