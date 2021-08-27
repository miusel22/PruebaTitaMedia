const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `https://dummyapi.io/data/v1/`

const resolvers = {
    Query: {
        list: () => {
          return fetch(`${baseURL}user?limit=10`, {headers: {
            'app-id': '6126a500a66bd7eb968e9ba5'
          }}).then(res => res.json())
          .then(data => data)
        },
        user: (root, args, context) => {
            return fetch(`${baseURL}/user/${args.id}`, {headers: {
                'app-id': '6126a500a66bd7eb968e9ba5'
              }}).then(res => res.json())
              .then(data => data)
        },
        listPost: () => {
          return fetch(`${baseURL}post?limit=10`, {headers: {
              'app-id': '6126a500a66bd7eb968e9ba5'
            }}).then(res => res.json())
            .then(data => data)
      },
      listComment: (root, args, context) => {
        return fetch(`${baseURL}post/${args.id}/comment`, {headers: {
            'app-id': '6126a500a66bd7eb968e9ba5'
          }}).then(res => res.json())
          .then(data => data)
    }, 
     listTag: (root, args, context) => {
      return fetch(`${baseURL}tag?limit=10`, {headers: {
          'app-id': '6126a500a66bd7eb968e9ba5'
        }}).then(res => res.json())
        .then(data => data)
  }
  , 
     getTags: (root, args, context) => {
      return fetch(`${baseURL}/tag/${args.tag}/post?limit=10`, {headers: {
          'app-id': '6126a500a66bd7eb968e9ba5'
        }}).then(res => res.json())
        .then(data => data)
      
  },

    }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))