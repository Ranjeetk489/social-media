import { config } from 'dotenv';
const jwt = require('jsonwebtoken');

function getClaims(token) {
    let user;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return err;
        }
        user = decoded.userId;
    });
    return user;
}

export default getClaims;



