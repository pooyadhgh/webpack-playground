const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pages = [
  {
    title: "Hello world",
    path: "index",
  },
  {
    title: "About us",
    path: "about",
  },
];

const entries = {};
pages.forEach((page) => {
  entries[page.path] = `/src/pages/${page.path}.js`;
});

const htmlWebpackPlugins = pages.map((page) => {
  return new HtmlWebpackPlugin({
    filename: `${page.path}.html`,
    chunks: [page.path],
    title: page.title,
  });
});

const webpackConfiguration = {
  entry: entries,

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "",
  },

  mode: "none",

  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },

  // Asset modules
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3KB
          },
        },
      },

      // Loaders
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Babel
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(),
    ...htmlWebpackPlugins,
  ],
};

module.exports = webpackConfiguration;
