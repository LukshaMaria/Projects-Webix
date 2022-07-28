import userchart from './modules/charts.js';
import form from './modules/forms.js';
import maintable from './modules/maintable.js';
import menu from './modules/menu.js';
import producttable from './modules/producttable.js';
import toolbar from './modules/toolbar.js';
import userlist from './modules/userlist.js';
const label = {
    view: "label",
    label: "The software is provided by <a href='#'>https://webix.com</a>. All right reserved (c)",
    align: "center"
};
const mainpart = {
    cells: [
        { id: "Dashboards", cols: [maintable, form] },
        { id: "Users", rows: [userlist, userchart] },
        { id: "Products", cols: [producttable] },
        { id: "Admin", template: "" }
    ]
};
webix.ready(function () {
    webix.ui({
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
    $$("userchart").sync($$("usertable1"), function () {
        this.group({
            by: "country",
            map: {
                age: ["age", "sum"]
            }
        });
    });
    $$("list1").select("Dashboards");
    $$("datatable1").registerFilter(
        $$("filter_tabbar"),
        {
            columnId: "year", compare: function (value, filter, item) {
                let year = value;
                if (filter == 1) return year;
                else if (filter == 2) return (year < 1980);
                else if (filter == 3) return (year > 1980 && year < 2000);
                else if (filter == 4) return year > 2000;
            }
        },
        {
            getValue: function (node) {
                return node.getValue();
            },
            setValue: function (node, value) {
                node.setValue(value);
            }
        }
    );
});
