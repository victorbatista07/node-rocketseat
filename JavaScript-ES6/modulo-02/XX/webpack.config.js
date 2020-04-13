module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};

// O entry serve para indicar o arquivo principal do projeto
// O output é o arquivo de saída da configuração do webpack
// O modules->rulers dita as regras necessárias para testar, excluir e carregar os arquivos de configuraçõa do webpack
// contentBase serve para indicar o caminho de irá abrir o servidor da aplicação
