const { createApp } = Vue

createApp({
    data() {
        return {
            postsList: []
        }
    },
    methods: {
        addLike(post) {
            if(post.likes) {
                post.likes++
            } else {
                post.likes = 1
            }
        },
        addComment(event, post) {
            const { value }  = event.target.elements[0];
            const comment = {
                id: post.comment ? post.comment.length : 1,
                body: value
            }

            if(post.comments){
                post.comments.push(comment)  
            }else {
                post.comments = [comment]
            }
            
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.postsList.push(...data))
    }
}).mount('#app')