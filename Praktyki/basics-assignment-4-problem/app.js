const app = Vue.createApp({
    data() {
        return{
            usr: '',
            user1Bool: false,
            bCUserChoice: ''
        }
    },
    computed: {
        userBool(){
            return {
                visible: this.user1Bool,
                hidden: !this.user1Bool
            }
        }
    },
    methods: {
        toggleVisibility(){
            this.user1Bool = !this.user1Bool
        }
    }
});

app.mount('#assignment');