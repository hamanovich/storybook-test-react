"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.default = (function (props) {
    var color = props.color, onClick = props.onClick;
    return (React.createElement("button", { style: { color: color }, onClick: function () { return onClick && onClick(color); } }, "Color Button"));
});
//# sourceMappingURL=ColorButton.js.map