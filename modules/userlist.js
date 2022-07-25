const userlist =
{
    rows: 
    [
    {
        cols: [
            {view:"text", id:"list_filter", 
            on: {
                onTimedKeyPress: function(){ 
                    var value = this.getValue().toLowerCase();
                    $$("userlist1").filter("#name#", value);
                }
            }},
            { view:"button", value:"Sort asc", click:function(){
                $$('userlist1').sort('#age#','asc');
            } },
            { view:"button", value:"Sort desc", click:function(){
                $$('userlist1').sort('#age#','desc');
            }},
          ]
    },
    {
        id: "userlist1",
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
                        $$("userlist1").remove(id);
                        webix.message("Deleted");
                    },
                    function () {
                        webix.message("Error");
                    }
                );
                return false;
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
export default userlist;
