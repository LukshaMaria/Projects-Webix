import { global_id } from "./values.js";
const menu = {
    css: "list",
    rows: [
        {
            view: "list",
            id: global_id.list_id,
            css: "list",
            select: true,
            scroll: false,
            autoheight: true,
            on: {
                onAfterSelect: function (id) {
                    $$(id).show();
                }
            },
            data: ["Dashboards", "Users", "Products", "Admin"],
            width: 300
        },
        {},
        { view: "label", css: "connected", align: "center", label: `<span class="webix_icon mdi mdi-check"></span> Connected`, },
    ]
};
export default menu;
