"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    function Sorter(collection /*TODO: fix me*/) {
        this.collection = collection;
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var len = this.collection.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var temp = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = temp;
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
