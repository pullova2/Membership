// const rspack = require("@rspack/core");
// const refreshPlugin = require("@rspack/plugin-react-refresh");
// const isDev = process.env.NODE_ENV === "development";
// const path = require("path");

// const printCompilationMessage = require("./compilation.config.js");

// /**
//  * @type {import('@rspack/cli').Configuration}
//  */
// module.exports = {
//   context: __dirname,
//   entry: {
//     main: "./src/index.ts",
//     output: {
//       filename: "main.js",
//       path: path.resolve(__dirname, "dist"),
//     },
//   },

//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//     watchFiles: [path.resolve(__dirname, "src")],
//     onListening: function (devServer) {
//       const port = devServer.server.address().port;

//       printCompilationMessage("compiling", port);

//       devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
//         setImmediate(() => {
//           if (stats.hasErrors()) {
//             printCompilationMessage("failure", port);
//           } else {
//             printCompilationMessage("success", port);
//           }
//         });
//       });
//     },
//   },

//   resolve: {
//     extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.svg$/,
//         type: "asset",
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         type: "asset",
//         parser: {
//           dataUrlCondition: {
//             maxSize: 8 * 1024,
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: {
//                   tailwindcss: {},
//                   autoprefixer: {},
//                 },
//               },
//             },
//           },
//         ],
//         type: "css",
//       },
//       {
//         test: /\.(jsx?|tsx?)$/,
//         use: [
//           {
//             loader: "builtin:swc-loader",
//             options: {
//               sourceMap: true,
//               jsc: {
//                 parser: {
//                   syntax: "typescript",
//                   tsx: true,
//                 },
//                 transform: {
//                   react: {
//                     runtime: "automatic",
//                     development: isDev,
//                     refresh: isDev,
//                   },
//                 },
//               },
//               env: {
//                 targets: [
//                   "chrome >= 87",
//                   "edge >= 88",
//                   "firefox >= 78",
//                   "safari >= 14",
//                 ],
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new rspack.container.ModuleFederationPlugin({
//       name: "membership",
//       filename: "remoteEntry.js",
//       exposes: {},
//       remotes: {
//         remote: "homebeauty@http://localhost:3001/remoteEntry.js",
//       },
//       shared: {
//         react: { eager: true },
//         "react-dom": { eager: true },
//         "react-router-dom": { eager: true },
//       },
//     }),
//     new rspack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
//     }),
//     new rspack.ProgressPlugin({}),
//     new rspack.HtmlRspackPlugin({
//       template: "./src/index.html",
//     }),
//     isDev ? new refreshPlugin() : null,
//   ].filter(Boolean),
// };

// rspack.config.js
const rspack = require("@rspack/core");
const refreshPlugin = require("@rspack/plugin-react-refresh");
const isDev = process.env.NODE_ENV === "development";
const path = require("path");
const printCompilationMessage = require("./compilation.config.js");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", // This is important for routing
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    watchFiles: [path.resolve(__dirname, "src")],
    onListening: function (devServer) {
      const port = devServer.server.address().port;
      printCompilationMessage("compiling", port);
      devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
        setImmediate(() => {
          if (stats.hasErrors()) {
            printCompilationMessage("failure", port);
          } else {
            printCompilationMessage("success", port);
          }
        });
      });
    },
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
        type: "css",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: {
                targets: [
                  "chrome >= 87",
                  "edge >= 88",
                  "firefox >= 78",
                  "safari >= 14",
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.container.ModuleFederationPlugin({
      name: "membership",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        remote: "homebeauty@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true },
        "react-router-dom": { singleton: true, eager: true },
      },
    }),
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    isDev ? new refreshPlugin() : null,
  ].filter(Boolean),
};
