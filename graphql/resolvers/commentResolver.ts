import prisma from "../../prisma/prisma";

const addComment = async (parent, args, context) => {
    const { postId, content, userId } = args;
    const comment = await prisma.comment.create({
        data: {
            postId, 
            content,
            userId: String(context.claims),
        },
    });
    return comment;
}

const deleteComment = async (parent, args, context) => {
    const comment = await prisma.comment.delete({
        where: {
            id: args.id,
        },
    });
    const updatedComments = await prisma.comment.findMany({
        where: {
            postId: args.postId,
        },
    });
    return updatedComments;
}

const getComments = async (parent, args, context) => {
    const comments = await prisma.comment.findMany({
        where: {
            postId: args.postId,
        },
    });
    return comments;
}


export default {
    Mutation: {
        addComment,
        deleteComment,
    },
    Query: {
        getComments,
    }

}