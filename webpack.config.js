module.exports = function(env) {
    let suffix = "dev";
    if(env && env.env){
        suffix = env.env;
    }
    return require(`./webpack.${suffix}.js`)(env);
};