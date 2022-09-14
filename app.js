const { createApp } = Vue

createApp({
    data() {
        return {
            postsList: []
        }
    },
    mounted() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.postsList.push(...data))
    }
}).mount('#app')