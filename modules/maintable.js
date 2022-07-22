const maintable =
{
    id: "datatable1",
    hover: "myhover",
    view: "datatable",
    url: "./data/data.js",
    scroll: "y",
    select:true,
    form:"form1",
    columns: [
        { id: "id", css: "colls_css", header: "Id", width: 50 },
        { id: "title", header: [{ text: "Title" }, { content: "textFilter" }], fillspace: true, sort: "string", width: 250 },
        { id: "year", header: ["Released", { content: "numberFilter" }], width: 100, sort: "int" },
        { id: "rating", header: "Rating", width: 100 },
        { id: "votes", header: ["Votes", { content: "numberFilter" }], width: 100, sort: "int" },
        { id: "rank", header: "Rank", width: 50 },
        { id: "category", header: "Category", width: 100 },
        { id: "del", template: "{common.trashIcon()}" }
    ],
    onClick: {
        "wxi-trash": function (e, id) {
            const list = $$("datatable1");
            webix.confirm("Do you want to delete this item?", "confirm-warning").then(function () {
                list.remove(id);
                return false;
       });
    },
    ready(){
        $$("datatable1").attachEvent("onAfterSelect", function(id){
            var item = this.getItem(id);
            $$("form1").setValues(item);
        })
    }
};
export default maintable;
