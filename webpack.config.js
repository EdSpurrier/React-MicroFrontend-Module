// remote/webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const { dependencies } = require("./package.json");

const localRemotes = {
  host          : 'host@http://localhost:3000/remoteEntry.js',
  nav           : 'nav@http://localhost:4200/moduleEntry.js',
}

const devRemotes = {
  host          : 'host@https://edspurrier.com/remoteEntry.js',
  nav           : 'nav@https://edspurrier.com/nav/moduleEntry.js',
}

module.exports = {
  entry: "./src/index",
  mode: "development",
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 4100,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: true,
        },
        type: 'javascript/auto',
      },

    ],

  },
  plugins: [
    new ModuleFederationPlugin({
      name: "boilerplate",
      filename: "moduleEntry.js",
      exposes: {
        './routes': './src/routes',
      },
      remotes: localRemotes,
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.ico',
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: "web",
};