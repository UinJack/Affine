/**
 * by Jack
 * depend on sylvester.j
 * calculate 2nd order polynomial by Gauss elimination
 * */

function MatrixCalc(arr) {

    var abc = [
        [arr[0].from[0], arr[0].from[1], 1, arr[0].to[0]],
        [arr[1].from[0], arr[1].from[1], 1, arr[1].to[0]],
        [arr[2].from[0], arr[2].from[1], 1, arr[2].to[0]]
    ]

    var def = [
        [arr[3].from[0], arr[3].from[1], 1, arr[3].to[1]],
        [arr[4].from[0], arr[4].from[1], 1, arr[4].to[1]],
        [arr[5].from[0], arr[5].from[1], 1, arr[5].to[1]]
    ]

    var equationsABC = $M(abc);
    var eqnsABC = equationsABC.toRightTriangular();

    var c = eqnsABC.e(3, 4) / eqnsABC.e(3, 3);
    var b = (eqnsABC.e(2, 4) - eqnsABC.e(2, 3) * c) / eqnsABC.e(2, 2);
    var a = (eqnsABC.e(1, 4) - eqnsABC.e(1, 3) * c - eqnsABC.e(1, 2) * b) / eqnsABC.e(1, 1);


    var equationsDEF = $M(def);
    var eqnsDEF = equationsDEF.toRightTriangular();

    var f = eqnsDEF.e(3, 4) / eqnsDEF.e(3, 3);
    var e = (eqnsDEF.e(2, 4) - eqnsDEF.e(2, 3) * f) / eqnsDEF.e(2, 2);
    var d = (eqnsDEF.e(1, 4) - eqnsDEF.e(1, 3) * f - eqnsDEF.e(1, 2) * e) / eqnsDEF.e(1, 1);

    this.A = a;
    this.B = b;
    this.C = c;
    this.D = d;
    this.E = e;
    this.F = f;

}

MatrixCalc.prototype = {
    to_target: function (x, y) {
        var targetX = this.A * x + this.B * y + this.C;
        var targetY = this.D * x + this.E * y + this.F;
        return {x: targetX, y: targetY};
    },
    to_orgin: function (x, y) {
        var oX = (this.E * (x - this.C) - this.B * y + this.B * this.F) / (this.A * this.E - this.B * this.D);
        var oY = (this.D * (x - this.C) - this.A * y + this.A * this.F) / (this.B * this.D - this.A * this.E);
        return {x: oX, y: oY};
    }
}








