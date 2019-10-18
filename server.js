"use strict";

require("@babel/polyfill");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

_dotenv["default"].config();

var app = (0, _express["default"])();
var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 5000;
app.use((0, _cors["default"])());

app.use(_express["default"]["static"](_path["default"].join(__dirname, "/public")));

app.listen(port, function() {
	console.log("Server running on: http://localhost:".concat(port));
});
