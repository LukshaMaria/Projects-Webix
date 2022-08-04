import {global_id} from "./values.js";

const collection = new webix.DataCollection({
    url: "./data/categories.js"
});

const maintable =
{
   rows: [
        {
            view: "tabbar",
            id: global_id.tabbar_id,
            value: "listView",
            options: [
                { "id": "1", "value": "All" },
                { "id": "2", "value": "Old" },
                { "id": "3", "value": "Modern" },
                { "id": "4", "value": "New" }
            ],
            on: {
                onChange: function () {
                    $$(global_id.maindatatable_id).filterByAll();
                }
            }
        },
        {
            id: global_id.maindatatable_id,
            view: "datatable",
            url: "./data/data.js",
            select: true,
            scroll: "y",
            hover: "myhover",
            form: "form1",
            columns: [
                { id: "id", css: "colls_css", header: "Id", width: 50 },
                { id: "title", header: [{ text: "Title" }, { content: "textFilter" }], fillspace: true, sort: "string", width: 250 },
                { id: "year", header: "Year", width: 100 },
                { id: "rating", header: "Rating", width: 100 },
                { id: "votes", header: ["Votes", { content: "numberFilter" }], width: 100, sort: "int" },
                { id: "rank", header: "Rank", width: 50 },
                { id: "category", header: "Category", width: 100, collection: collection },
                { id: "delete", template: "{common.trashIcon()}" }
            ],
            scheme: {
                $init: function (obj) {
                    obj.category = Math.floor(Math.random() * (5 - 1) + 1);
                }
            },
            onClick: {
                "wxi-trash": function (e, id) {
                    const list = $$(global_id.maindatatable_id);
                    webix.confirm("Do you want to delete this item?", "confirm-warning").then(() => list.remove(id));
                    return false;
                }
            },
            on: {
                onAfterSelect(id) {
                    var item = this.getItem(id);
                    $$(global_id.form_id).setValues(item);
                }
            }
        }
    ]
};
export default maintable;
