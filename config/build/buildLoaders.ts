import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[] {
    const typescriptsLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [ typescriptsLoaders ]
}