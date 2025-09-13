


import Jwt from 'jsonwebtoken';

const  jwtkey= 'univer';

function verifyToken(req, resp, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1]; 
        Jwt.verify(token, jwtkey, (err, valid) => {
            if (err) {
                resp.send({ result: "Please provide valid token" });
            } else {
                req.user = valid;
                next();
            }
        });
    } else {
        resp.send({ result: "Please add token with header" });
    }
}

export default verifyToken;