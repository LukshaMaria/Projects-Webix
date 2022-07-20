const userchart = {
    view: "chart",
    url: "./data/users.js",
    type: "bar",
    value: "#age#",
    yAxis: {
        start: 0,
        step: 10,
        end: 100,
        template: function (value) {
            return (value % 20 ? "" : value);
        }
    },
    xAxis: {
        template: "#age#"
    }
};
