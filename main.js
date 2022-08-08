import userchart from './modules/charts.js';
import mainform from './modules/forms.js';
import {maintable, category_collection} from './modules/maintable.js';
import menu from './modules/menu.js';
import producttable from './modules/producttable.js';
import toolbar from './modules/toolbar.js';
import {usertable, user_collection} from './modules/userlist.js';
import admintable from './modules/admin.js';
import { global_id } from "./modules/values.js";
const label = {
    view: "label",
    label: "The software is provided by <a href='#'>https://webix.com</a>. All right reserved (c)",
    align: "center"
};
const mainpart = {
    cells: [
        { id: "Dashboards", cols: [maintable, mainform] },
        { id: "Users", rows: [usertable, userchart] },
        { id: "Products", cols: [producttable] },
        { id: "Admin", cols: [admintable] }
    ]
};
webix.ready(function () {
    webix.ui({
        view: "popup",
        id: global_id.popup_id,
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
    
    $$(global_id.chart_id).sync($$(global_id.userdatatable_id), function () {
        this.group({
            by: "country",
            map: {
                age: ["age", "count"]
            }
        })
        this.sort({
            by: "#age#",
            dir: "asc",
            as: "int"
        })
    });
    $$(global_id.maindatatable_id).registerFilter(
        $$(global_id.tabbar_id),
        {
            columnId: "year", compare: function (value, filter, item) {
                let year = value;
                switch (filter) {
                    case '1': return true;
                    case '2': return (year < 1980);
                    case '3': return (year > 1980 && year < 2000);
                    case '4': return (year > 2000);
                }
            }
        },
        {
            getValue: function (view) {
                return view.getValue();
            },
            setValue: function (view, value) {
                view.setValue(value);
            }
        }
    );
    var list = $$("category").getPopup().getList();
    list.define("template", "#value#");

    $$(global_id.list_id).select("Dashboards");
    list.sync(category_collection);
    $$(global_id.admintable_id).sync(category_collection);
    $$(user_collection).sync($$(global_id.userdatatable_id));
    $$(user_collection).sync($$(global_id.userdatatable_id));
    $$(global_id.maindatatable_id).bind(global_id.form_id);
    $$(global_id.admintable_id).bind(global_id.adminform_id);
});
