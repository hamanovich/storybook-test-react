"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@storybook/react");
var ColorButton_1 = require("./ColorButton");
react_1.storiesOf('ColorButton', module)
    .add('red', function () { return React.createElement(ColorButton_1.default, { color: 'red' }); })
    .add('blue', function () { return React.createElement(ColorButton_1.default, { color: 'blue' }); });
//# sourceMappingURL=ColorButton.stories.js.map