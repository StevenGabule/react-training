const Joi = require("joi");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
/*
GITHUB ACCOUNT
const config = {
    client_id: "764dd31d34cccae6e40e",
    redirect_uri: "http://localhost:3000/login",
    client_secret: "47d43aea6e15328b84dd1508c75156ab971caf44",
    proxy_url: "http://localhost:5000/authenticate"
};*/

/*GITLAB*/
const config = {
    client_id: "6e9ed022b1c6d3c035f6ae1f55cc57daa77b59276690ba346ab363fd9fd75f45",
    client_secret: "e94cfe8795fc56e5b06938b85111a4c2a33303f9a37c1f949d2666caa36662ea",
    redirect_uri: "http://localhost:3000/login",
    proxy_url: "http://localhost:5000/authenticate"
};

const envVarsSchema = Joi.object({
    client_id: Joi.string().required(),
    redirect_uri: Joi.string().required(),
    client_secret: Joi.string().required(),
    proxy_url: Joi.string().required()
});

const { error } = envVarsSchema.validate(config);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = config;
