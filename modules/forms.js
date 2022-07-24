const form = {
    view: "form",
    id: "form1",
    width: 400,
    elements: [
        { type: "section", template: "EDIT FILMS" },
        { view: "text", name: "title", label: "Title" },
        { view: "text", name: "year", label: "Year", invalidMessage: "Enter year between 1700 and 2022" },
        { view: "text", name: "rating", label: "Rating" },
        { view: "text", name: "votes", label: "Votes" },
        { view: "text", name: "rank", label: "Rank" },
        { view: "text", name: "category", label: "Category" },
        {
            margin: 5, cols: [
                {
                    view: "button", value: "Save", css:"webix_primary", click: function () {
                        const list = $$("datatable1");
                        const form = $$("form1");
                        if (form.validate()) {
                            const item_data = form.getValues();
                            if(item_data.id)
                            {
                                list.updateItem(item_data.id, item_data);
                                webix.message("Information was changed to datatable!");
                            }
                            else
                            {
                                list.add({id:list.getLastId()+1, 
                                    title: item_data.title,
                                    year: item_data.year,
                                    rating: item_data.rating,
                                    votes: item_data.votes,
                                    rank: item_data.rank,
                                    category: item_data.category

                                });
                                webix.message("Information was added to datatable!");
                            }
                        }
                        else{
                            webix.message("Information wasn't added to datatable!");
                        }

                    }
                },
                                {
                    view: "button", value: "Clear", click: function () {
                        const form = $$("form1");
                        webix.confirm({
                            title: "Clear form",
                            text: "Do you want to clear information in form?"
                        }).then(
                            function () {
                                webix.message("Confirmed");
                                form.clear();
                                form.clearValidation();
                            },
                            function () {
                                webix.message("Rejected");
                            }
                        );
                    }
                },
            ]
        },
        {},
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        year: (value) => (value > 1700) && (value < 2022),
        votes: (value) => value < 100000,
        rating: webix.rules.isNotEmpty,
        rating: (value) => (value != 0),
    },
    on: {
        onValidationError: function (key, data) {
            webix.message({ text: key + " field is incorrect", type: "error" });
        }
    }
};
export default form;
