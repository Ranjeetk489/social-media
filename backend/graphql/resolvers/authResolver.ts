import prisma from '../../prisma/prisma';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

const loginUser = async (parent, args, { res }) => {
    const { email, password } = args;
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
        throw new Error('No user found');
    }
    const isMatch = await bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        throw new Error('Password is incorrect');
    }
    const accessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "15min" });
    const refreshToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return {
        user,
        accessToken,
        refreshToken
    }
}


const registerUser = async (parent, args, context) => {
    const { username, email, password, firstName, lastName } = args;
    const userExists = await prisma.user.findFirst({ where: { email } });
    console.log(args)
    console.log(userExists)
    if (userExists) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
        }
    });
    const accesstoken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "15min" });
    const refreshToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return {
        accesstoken: accesstoken,
        refreshToken: refreshToken,
    }
}


export default {
    Mutation: {
        loginUser,
        registerUser

    },
    Query: {
        // getUserDetails
    }
}

