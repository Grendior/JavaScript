const app = Vue.createApp({
    data() {
        return {
            name: 'Szymon',
            age: 23,
            // randomNumber: Math.random(0,1),
            imageUrl: 'https://images.unsplash.com/photo-1642466311141-7bed50c8696b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1882&q=80',
            fullName: 'Szymon Fiedorowicz'
        };
    },
    computed: {
        randomNumber() {
            return Math.floor(Math.random());
        }
    }
});


app.mount('#assignment');


