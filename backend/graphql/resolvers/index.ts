import authResolver from "./authResolver"
import commentResolver from "./commentResolver"
import followResolver from "./followResolver"
import likeResolver from "./likeResolver"
import postResolver from "./postResolver"

export default {
    Query: {
        ...authResolver.Query,
        ...postResolver.Query,
        ...followResolver.Query,
        ...commentResolver.Query
    },
    Mutation: {
        ...authResolver.Mutation,
        ...postResolver.Mutation,
        ...followResolver.Mutation,
        ...commentResolver.Mutation,
        ...likeResolver.Mutation,
    }   
}