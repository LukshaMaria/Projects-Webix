const producttable =
{
    view: "treetable",
    id: "productable1",
    select: true,
    multiselect: "level",
    drag: "move",
    columns: [
        { id: "id", header: "", width: 50 },
        {
            id: "title", header: "Title",
            template: "{common.icon()} {common.folder()} <span>#title#</span>", width: 200
        },
        { id: "price", header: "Price", width: 100 }
    ],
    data: [
        {
            "id": "1", "title": "Cinema", "open": true, "data": [
                { "id": "1.1", "title": "Standard Ticket", "price": 21 },
                { "id": "1.2", "title": "Evening Ticket", "price": 27 }
            ]
        },
        {
            "id": "2", "title": "Cafe", "open": true, "data": [
                { "id": "2.1", "title": "Cola", "price": 10 },
                { "id": "2.2", "title": "Mineral water", "price": 5 },
                { "id": "2.3", "title": "Pop Corn", "price": 7 }
            ]
        },
        {
            "id": "3", "title": "Other", "open": true, "data": [
                { "id": "3.1", "title": "Flowers", "price": 10 },
                { "id": "3.2", "title": "Film CD", "price": 15 }
            ]
        }
    ]
};
export default producttable;
