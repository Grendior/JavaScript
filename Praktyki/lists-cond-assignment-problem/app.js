const app = Vue.createApp({
    data() {
        return {
            goals: [],
            inputTask: '',
            counter: 0,
            HideShow: true
        }
    },
    computed: {
        toggleVision() {
            return this.HideShow ? "Hide" : "Show";
        }
    },
    methods: {
        addTask() {
            this.goals.push(this.inputTask);
            console.log(this.goals[this.counter]);
            this.counter++;
        },
        btnHideShow() {
            this.HideShow = !this.HideShow;
        }

    }
});
app.mount('#assignment')