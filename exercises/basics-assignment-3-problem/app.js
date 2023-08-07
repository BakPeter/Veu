const app = Vue.createApp({
  data() {
    return {
      number: 0,
      reset: true,
      //   result: '',
    };
  },
  watch: {
    number() {
      if (this.reset) {
        this.reset = false;
        const that = this;
        setTimeout(() => {
          that.number = 0;
          that.reset = true;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.number < 37) return 'Not there yet';
      if (this.number === 37) return '37';
      return 'To much!';
    },
  },
  methods: {
    addValue(value) {
      this.number += value;
      console.log(this.number);
    },
  },
});
app.mount('#assignment');
