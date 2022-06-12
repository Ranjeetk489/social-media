import prisma from "../../prisma/prisma";


const createPicture = async (parent, args, context, info) => {
    if (context.claims) {
        throw new Error("Unauthorized");
    }
    const { userId, picture } = args;
    const user = await prisma.user.update({
        where: {
            userId
        },
        data: {
            picture
        }
    })
    return user.picture;
}

