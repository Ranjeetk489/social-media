import {gql} from 'apollo-server';


export default gql`
    type Query {
    getUserDetails(userId: ID!): User!

    #follow related queries
    getFollowers(userId: ID!) : [Follow!]!
    getFollowing(userId: ID!): [Follow!]!   
    followerByName(username: String!): [Follow!]
    followingByName(username: String!): [Follow!] 

    #post related queries
    getPosts(userId: ID!): [Post!]!
    getSinglePost(userId: ID!): Post!

    #comment related queries
    getComments(postId: ID!): [Comment!]!
    
    #like related queries
    #

        
    }

    type User {
        userId: ID
        username: String
        email: String
        picture: String
        firstName: String
        lastName: String
        accesstoken: String
        refreshToken: String
        followers: [Follow!]!
        following: [Follow!]!
        posts: [Post!]
    }

    type Follow {
    id: ID!
    userId: ID!
    followerId: ID!
    }

    type FollowPayload {
    follow: Follow!
    }

    type Post {
        postId: ID
        title: String!
        content: String!
        isEdited: Boolean!
        createdAt: String
        editedAt: String!
        location: String
        author: [User]
        userId: String
    }

    type PostLike {
        id: ID!
        userId: ID!
        postId: ID!
        post: [Post]
    }

    type Comment {
        id: String
        content: String
        createdAt: String!
        post: [Post!]!
    }
    type Reblog {
        id: String
        content: String
        createdAt: String
        post: [Post]
    }
    type Mutation {
        loginUser(email:String!, password: String!): User!
        registerUser(username: String!, email: String!, password: String!, firstName: String!, lastName: String!): User!

        #comment related mutations
        addComment(postId: ID!, content: String!): Comment!
        deleteComment(id: ID!, postId: ID!): [Comment!]!

        #likes related mutations
        addLike(postId: ID!): PostLike!
        deleteLike(postId: ID!, id:ID): PostLike!

        #follow related mutations
        createFollow(userId: ID!, followerId: ID!): FollowPayload!
        deleteFollow(id: ID!): FollowPayload!

        #post related mutations
        createPost(title: String!,content: String!, location: String, userId: ID!): Post!
        editPost(postId: ID!, title: String!, content: String!, location: String!): Post!
        deletePost(postId: ID!): [Post!]!
    }
`