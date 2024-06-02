const path = require('path');

module.exports = {
  // Punto de entrada para la aplicación
  entry: './src/index.js',
  // Configuración de salida
  output: {
    // Directorio de salida
    path: path.resolve(__dirname, 'dist'),
    // Nombre del archivo de salida
    filename: 'bundle.js'
  },
  // Configuración de módulos
  module: {
    rules: [
      {
        // Regla para archivos JavaScript y JSX
        test: /\.(js|jsx)$/,
        // Excluir la carpeta 'node_modules'
        exclude: /node_modules/,
        // Utilizar Babel para transpilar
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // Regla para archivos Sass
        test: /\.scss$/,
        // Utilizar los loaders de Sass
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  // Configuración para resolver extensiones de archivos
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // Configuración del servidor de desarrollo
  devServer: {
    // Directorio base del servidor
    contentBase: './dist'
  }
};
