const app = Vue.createApp({
    data() {
        return {
            valueInputed: '',
            confirmedName: '',
            enteredName: '',
        };
    },
    methods:{
        alertClicked(){
            alert('*click*');
        },
        setInput(event){
            this.valueInputed = event.target.value;
        },
        enterInput(event){
            this.enteredName = event.target.value;
        }
    }
});


app.mount('#assignment')



