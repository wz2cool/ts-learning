"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleDemo = /** @class */ (function () {
    function SimpleDemo() {
    }
    SimpleDemo.prototype.delay = function (milliseconds, count) {
        return new Promise(function (resolve) {
            setTimeout(function () {
            }, milliseconds);
        });
    };
    return SimpleDemo;
}());
exports.SimpleDemo = SimpleDemo;
