import {global_id} from "./values.js";
webix.protoUI({
    name: "edittree",
    defaults: {
        template: "{common.icon()} {common.folder()} #title#", width: 200
    }
}, webix.EditAbility, webix.ui.tree);

const producttable = {
    view: "edittree",
    editable: true,
    editor: "text",
    editValue: "title",
    url: "./data/products.js",
    rules: {
        title: webix.rules.isNotEmpty,
    },
    on: {
        onValidationError: function (key, data) {
            webix.message({ text: key + " field is incorrect", type: "error" });
        }
    }
};
export default producttable;
