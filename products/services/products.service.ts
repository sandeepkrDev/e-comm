import { Context } from "moleculer"

const { useGetProductByPkQuery } = require("../src/generated/graphql.ts")

module.exports = {
    name: "products",
    action: {
        getProductByPK: {
            rest: "getproductbypk",
            async handler(ctx: Context<any>) {
                const { id } = ctx.params.req.body?.input

                const { data, loading, error } = useGetProductByPkQuery(id)

                console.log(data, loading, error)
            }
         }
    }
}