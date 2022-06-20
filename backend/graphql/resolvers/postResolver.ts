import { AuthenticationError } from 'apollo-server-express';
import prisma from '../../prisma/prisma';

const getPosts = async (parent, args, context) => {
    if(!context.claims) {
        throw new AuthenticationError('You are not logged in');
    }
    const posts = await prisma.post.findMany({
        where: {
            userId: args.userId,
        },
    });
    return posts;
}

const getSinglePost = async (parent, args, context) => {
    const post = await prisma.post.findFirst({
        where: {
            postId: args.postId
        }
    });
    return post;
}


//mutations

const createPost = async (parent, args, context) => {
    const { title, content,location } = args;
    const post = await prisma.post.create({
        data: {
            userId: context.claims,
            title,
            content,
            location,
        },
    });
    return post;
}


const editPost = async (parent, args, context) => {
    const { postId, title, content, isEdited,location } = args;
    const post = await prisma.post.update({
        where: {
            postId
        },
        data: {
            title,
            content,
            location,
            isEdited,
        }
    });
    return post;
}

const deletePost = async (parent, args, context) => {
    const post = await prisma.post.delete({
        where: {
            postId: args.postId
        }
    });
    const updatedPosts = await prisma.post.findMany({
        where: {
            userId: context.claims
        }
    });
    return updatedPosts;
}





export default {
    Query: {
        getPosts,
        getSinglePost,
    },
    Mutation: {
        createPost,
        editPost,
        deletePost
    }
}