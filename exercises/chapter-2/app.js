const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'AAAA - Finish the courewdwed',
      courseGoalB: 'BBBB - Finish the courewdwed',
      courseGoalH: '<h2 style="color:red">HHHH - Finish the courewdwed</>',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const n = Math.random();
      if (n < 0.5) return this.courseGoalA;
      else return this.courseGoalB;
    },
    outputGoalH() {
      const n = Math.random();
      if (n < 0.5) return this.courseGoalB;
      else return this.courseGoalH;
    },
  },
});

app.mount('#user-goal');
