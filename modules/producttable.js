webix.protoUI({
    name: "edittree",
    defaults: {
            template: "{common.icon()} {common.folder()} #title#", width: 200
     }
    // columns: [
    //     { id: "id", header: "", width: 50 },
    //     {
    //         id: "value", header: "Title",
    //         template: "{common.icon()} {common.folder()} <span>#value#</span>", width: 200
    //     },
    //     { id: "price", header: "Price", width: 100 }
    // ],
}, webix.EditAbility, webix.ui.tree);

var producttable = {
    view: "edittree",
    editable: true,
    editor: "text",
    editValue: "title",
    url: "./data/products.js",
    rules: {
        value: webix.rules.isNotEmpty,
        value: (value) => (value.isNotNumber),
    },
    on: {
        onValidationError: function (key, data) {
            webix.message({ text: key + " field is incorrect", type: "error" });
        }
    }
};
export default producttable;
