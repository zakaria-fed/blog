"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Comment.css");
var Comment = function (_a) {
    var comment = _a.comment;
    return (react_1["default"].createElement("div", { className: "dialogbox" },
        react_1["default"].createElement("div", { className: "body" },
            react_1["default"].createElement("span", { className: "tip tip-left" }),
            react_1["default"].createElement("div", { className: "message" },
                react_1["default"].createElement("span", null,
                    comment,
                    ".")))));
};
exports["default"] = Comment;
