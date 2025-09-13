





// require("dotenv").config();
import express from 'express';
import cors from 'cors';
import '../db/config/page.js';
import users from '../db/user/page.js';
import contact from '../db/contact/page.js';
import cour from '../db/cour/page.js';
import verifyToken from'../authMiddleware/page.js'
import Jwt from 'jsonwebtoken';
const jwtkey = 'univer';

const adminRoute = (await import('../admin-router/page.js')).default;


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", adminRoute);



app.post("/register", async (req, resp) => {
    let User = new users(req.body);
    let result = await User.save();
    result = result.toObject();
    delete result.password

    Jwt.sign({ result }, jwtkey, { expiresIn: "30d" }, (err, token) => {
        if (err) {
            resp.send({ result: 'something went wrong, Please try after sometime' })
        }
        resp.send({ result, auth: token })
    })
});

app.post("/login", async (req, resp) => {
    console.log(req.body)
    if (req.body.password && req.body.email) {
        let user = await users.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtkey, { expiresIn: "30d" }, (err, token) => {
                if (err) {
                    resp.send({ result: 'something went wrong, Please try after sometime' })
                }
                resp.send({ user, auth: token })
            })

        } else {
            resp.send({ result: 'NO user found' })
        }
    } else {
        resp.send({ result: 'NO user found' })
    }
});



app.post("/add",  async (req, resp) => {
    let courses = new cour(req.body);
    let result = await courses.save();
    resp.send(result);
});

app.get("/getcourse", async (req, resp) => {
    let coursedata = await cour.find();
    if (coursedata.length > 0) {
        resp.send(coursedata)
    } else {
        resp.send({ result: "no course data found" })
    }
});



app.post("/contact", verifyToken, async (req, resp) => {
    try {
        let contacts = new contact(req.body);
        let result = await contacts.save();

        Jwt.sign({ result }, jwtkey, { expiresIn: "30d" }, (err, token) => {
            if (err) {
                return resp.send({ result: 'Something went wrong, please try again later' });
            }
            resp.send({ result, auth: token });
        });
    } catch (error) {
        resp.status(500).send({ result: 'Error saving contact: ' + error.message });
    }
});



app.listen(5000);
