const maintable =
{
    id: "datatable1",
    hover: "myhover",
    view: "datatable",
    url: "http://localhost/Projects-Webix/data/data.js",
    scroll: "y",
    select: true,
    autoConfig: true,
    topSplit: 2,
    navigation: true,
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
            this.remove(id);
            return false;
        }
    },
};