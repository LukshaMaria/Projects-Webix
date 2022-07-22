const usertable =
{
    rows: 
    [
    {
        cols: [
            {view:"text", id:"list_filter", 
            on: {
                onTimedKeyPress: function(){ 
                    var value = this.getValue().toLowerCase();
                    $$("usertable1").filter("#name#", value);
                }
            }},
            { view:"button", value:"Sort asc", click:function(){
                $$('usertable1').sort('#age#','asc');
            } },
            { view:"button", value:"Sort desc", click:function(){
                $$('usertable1').sort('#age#','desc');
            }},
          ]
    },
    {
        id: "usertable1",
        view: "list",
        url: "./data/users.js",
        template:"#name# from #country# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>",  
        select: true,
        onClick: {
            "remove-icon": function (e, id) {
                webix.confirm({
                    title: "Delete data",
                    text: "Do you want to delete information?"
                }).then(
                    function () {
                        $$("usertable1").remove(id);
                        return false;
                        webix.message("Deleted");
                    },
                    function () {
                        webix.message("Error");
                    }
                );
            }
        },
        ready(){
            for(let i=0; i<5; i++)
            {
                const id=this.getIdByIndex(i);
                this.addCss(id, "highlight");
            }
        }
    }]
};
export default usertable;
