const usertable =
{
    id: "usertable1",
    view: "datatable",
    url: "http://localhost/Projects-Webix/data/users.js",
    select: true,
    columns: [
        { id: "id", header: "Id", width: 50 },
        { id: "name", header: [{ text: "Name" }, { content: "textFilter" }], fillspace: true, sort: "string", width: 200 },
        { id: "age", header: ["Age", { content: "numberFilter" }], sort: "int", width: 50 },
        { id: "country", header: [{ text: "Country" }, { content: "textFilter" }], fillspace: true, sort: "string", width: 150 },
        { id: "Delete", template: "{common.trashIcon()}" }
    ],
    onClick: {
        "wxi-trash": function (e, id) {
            this.remove(id);
            return false;
        }
    },
    scheme: {
        $change: function (item) {
            {
                if (item.id < 6) {
                    item.$css = "highlight";
                }
            }
        }
    }
};