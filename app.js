const { createApp } = Vue

createApp({
    data() {
        return {
            //on initialise un tableau vide qui va contenir nos posts
            postsList: [],
            isActive: false,
        }
    },
    methods: {
        //fonction qui affiche les posts
        show() {
            if (this.isActive === false){
                this.isActive = true;
            }else{
                this.isActive = false;
            }
        },
        //fonction qui ajoute les likes à nos posts
        addLikePost(post) {
            if(post.likes) {
                post.likes++
            } else {
                post.likes = 1
            }
        },
        //fonction qui ajoute les commentaires à nos posts
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
        },
        //fonction qui ajoute les likes à nos commentaires
        addLikeCom(comment) {
            if (comment.likes) {
                comment.likes++
            } else {
                comment.likes = 1
            }
        },
    },
    mounted() {
        //on récupère les données des posts d'une API 
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.postsList.push(...data));   
    }
}).mount('#app')


