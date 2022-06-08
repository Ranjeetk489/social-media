import prisma from "../../prisma/prisma";

const addLike = async (parent, args, context) => {
    const { postId } = args;
    const like = await prisma.postLike.create({
        data: {
            postId,
            userId: String(context.claims),
        },
    });
    const totalLikes = await prisma.postLike.count({
        where: {
            postId,
        },
    });
    return totalLikes;
}

const deleteLike = async (parent, args, context) => {
    const { id, postId } = args;
    const like = await prisma.postLike.delete({
        where: {
            id: args.id,
        },  
    });
    const totalLikes = await prisma.postLike.count({
        where: {
            postId,
        },
    });
    return totalLikes;
}

export default {
    // Query: {

    // },
    Mutation: {
        addLike,
        deleteLike,
    }
}