function Tools(om, tm) {
    this.i = 0;
    this.matrix;
    this.orgin_map = om;
    this.target_map = tm;
}

Tools.prototype = {
    tableClick: function () {
        var orginCenter = this.orgin_map.getCenter();
        var targetCenter = this.target_map.getCenter();

        $('#table tbody:eq(0) tr:eq(' + this.i + ') td:eq(1)').html(orginCenter.lng);
        $('#table tbody:eq(0) tr:eq(' + this.i + ') td:eq(2)').html(orginCenter.lat);
        $('#table tbody:eq(0) tr:eq(' + this.i + ') td:eq(3)').html(targetCenter.lng);
        $('#table tbody:eq(0) tr:eq(' + this.i + ') td:eq(4)').html(targetCenter.lat);

        if (this.i <= 5) {
            this.i++;
        } else {
            this.i = 0;
        }
    },
    //Download properties
    makeArray: function () {
        var data = [];
        for (var j = 0; j <= 5; j++) {
            data.push({
                from: [
                    Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(1)').html()),
                    Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(2)').html())],
                to: [
                    Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(3)').html()),
                    Number($('#table tbody:eq(0) tr:eq(' + j + ') td:eq(4)').html())]
            })


        }
        var blob = this.stringToBlob(JSON.stringify(data));
        this.download('data.json', blob);

        this.matrix = new MatrixCalc(data);
    },
    //Check Properties By Orgin Point
    check: function () {
        var orginCenter = this.orgin_map.getCenter();
        var point = matrix.to_target(orginCenter.lng, orginCenter.lat);
        this.target_map.setView([point.y, point.x]);
    },
    //Check Properties By Target Points
    reverseCheck: function () {
        var targetCenter = this.target_map.getCenter();
        var point = matrix.to_orgin(targetCenter.lng, targetCenter.lat);
        this.orgin_map.setView([point.y, point.x]);
    },
    //Open file and read
    handleFiles: function (files) {
        if (files.length) {
            var file = files[0];
            var reader = new FileReader();
            if (file.type == "application/json") {
                debugger;
                reader.onload = function () {
                    var data = JSON.parse(this.result);
                    matrix = new MatrixCalc(data);

                    for (var j = 0; j <= 5; j++) {

                        $('#table tbody:eq(0) tr:eq(' + j + ') td:eq(1)').html(data[j].from[0]);
                        $('#table tbody:eq(0) tr:eq(' + j + ') td:eq(2)').html(data[j].from[1]);


                        $('#table tbody:eq(0) tr:eq(' + j + ') td:eq(3)').html(data[j].to[0]);
                        $('#table tbody:eq(0) tr:eq(' + j + ') td:eq(4)').html(data[j].to[1]);


                    }
                }
                reader.readAsText(file);
            }
        }
    },
    download: function (fileName, blob) {
        var aLink = document.createElement('a');
        var evt = document.createEvent("MouseEvents");
        evt.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        aLink.dispatchEvent(evt);
    },
    //String to Blob for save
    stringToBlob: function (text) {
        var u8arr = new Uint8Array(text.length);
        for (var i = 0, len = text.length; i < len; ++i) {
            u8arr[i] = text.charCodeAt(i);
        }
        var blob = new Blob([u8arr]);
        return blob;
    }
}







