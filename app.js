const express = require('express');
const dotenv = require('dotenv');
const transporter = require('./config/transporter');
const { deployHook } = require('./controllers/deploy');
const { mailDeploy } = require('./controllers/mail');
dotenv.config();

const app = express();
app.use(express.json());

const deployRoute = process.env.PIPELINE_DEPLOY_ROUTE || '/deploy';

app.post(`${deployRoute}/mail`, mailDeploy);
app.post(deployRoute, deployHook);

app.listen('3000');
