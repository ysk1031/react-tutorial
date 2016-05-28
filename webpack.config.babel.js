import path from 'path';

const src = path.resolve(__dirname, 'public/src');
const dist = path.resolve(__dirname, 'public/dist');

export default {
  entry: `${src}/app.js`,

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [src],
        loader: 'babel'
      }
    ]
  }
};
