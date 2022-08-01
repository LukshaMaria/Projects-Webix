const userchart = {
    id: "userchart",
    view: "chart",
    type: "bar",
    value: "#age#",
    yAxis: {
        start: 0,
        step: 5,
        end: 10,
        template: function (value) {
            return (value % 5 ? "" : value);
        }
    },
    xAxis: {
        template: "#country#"
    }
};
export default userchart;
