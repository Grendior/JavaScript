const app = Vue.createApp({
    data() {
        return {
            value: 0,
            resultText: '',
        };
    },
    computed: {
        resultTextMeth() {
            if (this.value < 37) {
                return this.resultText = "Not there yet";
            } else if (this.value > 37) {
                return this.resultText = "Too much!";
            } else {
                return this.resultText = "Yes its 37"
            }
        }
    },
    watch:{
        value() {
            that = this;
            setTimeout(function () {
                that.value = 0;
            }, 5000);
        }
    },
    methods: {
        add(num){
            this.value += num;
        }
    }
});

app.mount('#assignment');