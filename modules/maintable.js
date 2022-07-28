const maintable =
{
    rows: [
        {
            view: "tabbar",
            id: "filter_tabbar",
            value: "listView",
            options: [
                { "id": "1", "value": "All" },
                { "id": "2", "value": "Old" },
                { "id": "3", "value": "Modern" },
                { "id": "4", "value": "New" }
            ],
            on: {
                onChange: function () {
                    $$("datatable1").filterByAll();
                }
            }
        },
        {
            id: "datatable1",
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
                { id: "category", header: "Category", width: 100 },
                { id: "del", template: "{common.trashIcon()}" }
            ],
            scheme: {
            },
            onClick: {
                "wxi-trash": function (e, id) {
                    const list = $$("datatable1");
                    webix.confirm("Do you want to delete this item?", "confirm-warning").then(() => list.remove(id));
                    return false;
                }
            },
            on: {
                onAfterSelect(id) {
                    var item = this.getItem(id);
                    $$("form1").setValues(item);
                }
            }
        }
    ]
};
export default maintable;
