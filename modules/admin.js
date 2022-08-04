import { global_id } from "./values.js";

const admintable = {
    cols: [
        {
            id: global_id.admintable_id,
            view: "datatable",
            columns: [
                { id: "id", header: "Id" },
                { id: "value", header: "Type", 
                template:"#value# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>", width:650}
            ],
            url: "./data/categories.js",
            select: true,
            scroll: "y",
            onClick:{
                "remove-icon":function(e, id){
                    webix.confirm({
                        title:"Delete data",
                        text:"Do you want to delete this category"
                    }).then(
                        function(){
                            $$(global_id.admintable_id).remove(id);
                            webix.message("Category deleted");
                        },
                        function(){
                            webix.message("Error");
                        }
                    )
                }
            },
            on:{
                onAfterSelect(id){
                    var item=this.getItem(id);
                    $$(global_id.adminform_id).setValues(item);
                }
            }
        },
        {
            view: "form",
            id: global_id.adminform_id,
            width: 450,
            elements: [
                { type: "section", template: "EDIT CATEGORIES" },
                { view: "text", name: "value", label: "Title" },
                {
                    margin: 5, cols: [
                        {
                            view: "button", value: "Add", css: "webix_primary", click: function () {
                                const list = $$(global_id.admintable_id);
                                const form = $$(global_id.adminform_id);
                                if (form.validate()) {
                                    const item_data = form.getValues();
                                        list.add({
                                            value: item_data.value,
                                        });
                                        webix.message("Information was added to datatable!");
                                }
                                else {
                                    webix.message("Information wasn't added to datatable!");
                                }

                            }
                        },
                        {
                            view: "button", value: "Update", click: function () {
                                const list = $$(global_id.admintable_id);
                                const form = $$(global_id.adminform_id);
                                if (form.validate()) {
                                    const item_data = form.getValues();
                                    if (item_data.id) {
                                        list.updateItem(item_data.id, item_data);
                                        webix.message("Information was changed to datatable!");
                                    }
                                    else {
                                        webix.message("Information wasn't changed to datatable!");
                                    }
                                }
                                else {
                                    webix.message("Information wasn't changed to datatable!");
                                }

                            }
                        },
                        {
                            view: "button", value: "Clear", click: function () {
                                const form = $$(global_id.adminform_id);
                                webix.confirm({
                                    title: "Clear form",
                                    text: "Do you want to clear information in form?"
                                }).then(
                                    function () {
                                        webix.message("Confirmed");
                                        form.clear();
                                        form.clearValidation();
                                    },
                                    function () {
                                        webix.message("Rejected");
                                    }
                                );
                            }
                        },
                    ]
                },
                {},
            ],
            rules: {
               value: webix.rules.isNotEmpty
            },
            on: {
                onValidationError: function (key, data) {
                    webix.message({ text: key + " field is incorrect", type: "error" });
                }
            }
        }
    ]
};
export default admintable;