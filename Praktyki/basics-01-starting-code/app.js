const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish',
            coursegoalB: '<h2>Hello There</h2>',
            courseGoal: 'Finish Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            }else {
                return this.coursegoalB;
            }
        }
    }
});

app.mount('#user-goal');