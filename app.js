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
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.postsList.push(...data))
    }
}).mount('#app')