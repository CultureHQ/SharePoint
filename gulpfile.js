"use strict";

const gulp = require("gulp");
const webpack = require("webpack");
const build = require("@microsoft/sp-build-web");

build.initialize(gulp);

// Extend webpack to auto-replace `process.env.NODE_ENV` with the production
// environment so that the client knows to fetch from production.
build.configureWebpack.mergeConfig({
  additionalConfiguration: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    )

    return config;
  }
});
