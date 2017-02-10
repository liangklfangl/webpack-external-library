var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: 
  {
    main:process.cwd()+'/example1/main.js',
  },
  output: {
    path:process.cwd()+'/dest/example1',
    filename: '[name].js',
	// export itself to a global var
	  libraryTarget: "commonjs",
	// name of the global var: "Foo"
	  library: "Foo"

  },
	// externals: {
	//     // require("jquery") is external and available
	//     //  on the global var jQuery
	//     // "jquery": "jQuery"
	// },

  externals:["abc", "def"],

  plugins: [
   new CommonsChunkPlugin({
       name:"chunk",
       minChunks:2
   }),
    new  HtmlWebpackPlugin()
  ]
};

