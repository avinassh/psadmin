"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function (Handler) {
// if you want clean URLs (or URLs without hashes, pass Router.HistoryLocation)
// Router.run(routes, Router.HistoryLocation, function (Handler)
    React.render(<Handler />, document.getElementById('app'));
});