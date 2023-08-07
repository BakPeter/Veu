const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      console.log('Submitted...');
      alert('Submitted');
    },
    setName(event, lastName, age) {
      this.name = event.target.value + ' ' + lastName + ', ' + age;
    },
    add() {
      this.counter++;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#events');
