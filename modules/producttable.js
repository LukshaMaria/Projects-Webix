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
    url: "./data/products.js",
};
export default producttable;
