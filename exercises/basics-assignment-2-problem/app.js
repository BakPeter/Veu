const app = Vue.createApp({
  data() {
    return { counter: 0, userInput: '', inputToShow: 'OUTPUT' };
  },
  methods: {
    showInput1(event) {
      this.inputToShow = event.target.value;
    },
    showInput() {
      this.inputToShow = this.userInput;
    },
    onUserInput(event) {
      this.userInput = event.target.value;
    },
    showAlert() {
      this.counter++;
      alert('ALERT!!!' + this.counter + ', ' + this.userInput);
    },
  },
});
app.mount('#assignment');
