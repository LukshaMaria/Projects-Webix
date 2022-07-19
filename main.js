const label = {
    view: "label",
    label: "The software is provided by <a href='#'>https://webix.com</a>. All right reserved (c)",
    align: "center"
};
const mainpart = {
    cells: [
        { id: "Dashboards", cols: [maintable, form] },
        { id: "Users", cols: [usertable, userchart] },
        { id: "Products", cols: [producttable] },
        { id: "Locations", template: "" }
    ]
};
webix.ready(function () {
    const popup1 = webix.ui({
        view: "popup",
        id: "popup1",
        width: 200,
        body: {
            view: "list",
            data: [
                { id: "1", title: "Settings" },
                { id: "2", title: "Log out" }
            ],
            template: "#title#",
            autoheight: true,
            select: true
        }
    });
    webix.ui({
        id: "app",
        rows: [
            toolbar,
            { cols: [menu, { view: "resizer" }, mainpart] },
            label,
        ]
    });
    $$("list1").select("Dashboards");
    $$("form1").bind("datatable1");
})