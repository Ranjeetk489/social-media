import prisma from '../../prisma/prisma';


//Queries
const getFollowers = async (parent, args, context) => {
    const user = await prisma.user.findFirst({
        where: {
            userId:  args.userId,
        },
        include: {
        followers: true,
        },
    });
    return user?.followers
    }

const getFollowing = async (parent, args, context) => {
    const user = await prisma.user.findFirst({
        where: {
            userId: args.userId,
        },
        include:{
            following: true,
        }
    });
    return user?.following;
}

const followerByName = async (parent, {username}, context) => {
    const user = await prisma.user.findFirst({
        where : {
            username,
        },
        include : {
            followers: true,
        }
    });
    return user?.followers;
}

const followingByName = async (parent, {username}, context) => {
    const user = await prisma.user.findFirst({
        where : {
            username,
        },
        include : {
            following: true,
        }
    });
    return user?.following;
}

//Mutations

const createFollow = async (parent, args, context) => {
    const { userId, followerId } = args;
    const follow = await prisma.follow.create({
        data: {
            user : {
                connect :{
                    userId,
                }
            },
            follower : {
                connect : {
                    userId: followerId
                }
            }
        }
    });
    return {follow};
}

const deleteFollow = async (parent, args, context) => {
    const { id} = args;
    const follow = await prisma.follow.delete({
        where: {
            id,
        }
    });
    return true;
}


export default {
    Query: {
        getFollowers,
        getFollowing,
        followerByName,
        followingByName,
    },
    Mutation: {
        createFollow,
        deleteFollow,
    }

}