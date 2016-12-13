$(function () {
    var orginMap = initOrginMap();
    var targetMap = initTargetMap();
    var tools = new Tools(orginMap, targetMap);

    $("#brow").click(function () {
        $("#file").click();
    });
    $("#save").click(function () {
        tools.makeArray();
    });
    $("#check").click(function () {
        tools.check();
    });
    $("#reverseCheck").click(function () {
        tools.reverseCheck()
    });
    $("#file").click(function () {
        tools.handleFiles(this.files);
    });
    $("#file").change(function () {
        tools.handleFiles(this.files);
    });
    $("#tbody").click(function () {
        tools.tableClick();
    });


});