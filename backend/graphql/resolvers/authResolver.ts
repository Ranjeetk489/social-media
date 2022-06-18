import prisma from '../../prisma/prisma';
import bcrypt from 'bcryptjs';
const jwt = require('jsonwebtoken');

const loginUser = async (parent, args) => {
    const { email, password } = args;
    const user = await prisma.user.findFirst({ where: { email } });
    if (!user) {
        throw new Error('No user found');
    }
    const isMatch = await bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        throw new Error('Password is incorrect');
    }
    const { userId, firstname, lastname, username, bio, picture } = user;
    const accessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "5s" });
    const refreshToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return { accessToken, refreshToken,  userId, firstname, lastname, username, bio, picture  };
}


const registerUser = async (parent, args) => {
    const { username, email, password, firstname, lastname } = args;
    const userExists = await prisma.user.findFirst({ where: { email } });
    if (userExists) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            firstname,
            lastname,
        }
    });
    const accessToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "15min" });
    const refreshToken = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
    const { picture, userId } = user;
    return {
        accessToken,
        refreshToken,
        userId,
        picture,
        firstname,
        lastname,
        username,
        bio: user.bio,
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

