"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _actions = _interopRequireDefault(require("./routes/actions.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // settings

app.set('port', process.env.PORT || 4000); // routes

//middlewares
app.use(_express["default"].json());
app.use(_index["default"]);
app.use('/action', _actions["default"]);
var _default = app;
exports["default"] = _default;