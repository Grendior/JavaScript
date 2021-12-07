const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    resetInput(){
      this.name = '';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value; //+ ' ' + lastName;
    },
    add(num) {
      this.counter += num;
    },
    decrese(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
