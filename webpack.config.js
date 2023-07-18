const path = require('path');

module.exports = {
  entry: './src/index.js', // Il tuo file di input principale
  output: {
    path: path.resolve(__dirname, 'dist'), // La cartella di output
    filename: 'bundle.js', // Il nome del bundle di output
  },
module: {
  rules: [
    {
      test: /\.js$/, // Match dei file JavaScript
      exclude: /node_modules/, // Escludi la cartella "node_modules"
      use: {
        loader: 'babel-loader', // Utilizza il loader Babel
        options: {
          presets: ['@babel/preset-env'], // Usa il preset "@babel/preset-env" per il supporto ES6
        },
      },
    },
  ],
},
};