const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: '',
    };
  },
  watch: {
    counter() {
      if (this.counter > 50) {
        const that = this;
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(newValue, oldValue) {
    //   console.log('new value: ' + newValue);
    //   console.log('old value: ' + oldValue);
    // },
    // name(newValue) {
    //   console.log('new value: ' + newValue);
    // },
    // name(value) {
    //   if (value === '') this.fullName = '';
    //   else this.fullName = value + ' ' + this.lastName;
    // },
  },
  computed: {
    fullName() {
      if (this.name === '') return '';
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      if (this.name === '') return '';
      return this.name + ' ' + this.lastName;
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
