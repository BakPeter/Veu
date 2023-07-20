const app = Vue.createApp({
  data() {
    return {
      name: 'Peter B',
      age: 42,
      imageUrl:
        'https://st3.depositphotos.com/2171279/13485/v/600/depositphotos_134852656-stock-illustration-watercolor-drawing-of-black-angry.jpg',
    };
  },
  methods: {
    newAge() {
      return this.age + 5;
    },
    getUserDescription() {
      return this.name + ', ' + this.age;
    },
  },
});
app.mount('#assignment');
