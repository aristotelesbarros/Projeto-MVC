const { post } = require("../src/routes")

let posts = []

const postModel = {
    getallposts(){
        return posts
    },

    getpostbyid(id){
        return posts.find(post => post.id === id)
    },

    creatpost(title, content){
  const post = {
    id: Date.now().toString(),
    title:title,
    content: content,
    createat: new Date(),
    updateat: new Date()
  }
    },

    savepost(post){
        posts.push(post)
    },

    updatepost(id, updatepost){
        const index = posts.findIndex(post => post.id === id)
        posts[index] = {...posts[index],... updatepost, updateat: new Date()}

    },

    deletepost(id){
  posts = posts.filter(post => post.id !== id)
    }
}

module.exports = postModel