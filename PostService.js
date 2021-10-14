const Post = require('./Post');
const FileService = require('./fileService');

class PostService {
    async create(post, picture){
        const fileName = FileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture:fileName});
        return createdPost;
    }

    async getAll(){
        const posts = await Post.find();
        return posts
    }

    async getOne(id){
        if(!id){
            throw new  Error('Have no Id')
        }
        const post = await Post.findById(id);
        return post;
    }


    async update(post){
        if(!post.id){
            throw  new Error('Have no Id');
        }
        const updatePost = await  Post.findByIdAndUpdate(post._id, post, {new: true});
        return updatePost;
    }

    async delete(id){
       if(!id){
           res.status(400).json({message: "Id not exist"})
       }
       const post = await  Post.findOneAndDelete(id);
       return post;
    }
}

module.exports  = new PostService();