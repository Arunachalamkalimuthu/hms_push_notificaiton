import dotenv from 'dotenv';

dotenv.config();
const config = {
    clientId: process.env.HMS_CLIENT_ID,
    appSecret: process.env.HMS_APP_SECRET,
    projectId: process.env.HMS_PROJECT,
};


export default config;