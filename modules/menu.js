const menu = {
    css: "list",
    rows: [
        {
            view: "list",
            id: "list1",
            css: "list",
            select: true,
            scroll: false,
            autoheight: true,
            on: {
                onAfterSelect: function (id) {
                    $$(id).show();
                }
            },
            data: ["Dashboards", "Users", "Products", "Locations"],
            width: 300
        },
        {},
        { view: "label", css: "connected", align: "center", label: `<span class="webix_icon mdi mdi-check"></span> Connected`, },
    ]
};