<template>
  <div>
    <h2>TS_tutorials page</h2>
    <p>{{text}}</p>
    <p>{{greeterMsg}}</p>
    <p>{{greeterSay}}</p>
    <p>{{greeterHelloMsg}}</p>
  </div>
</template>
<script>
import { Greet, greeterHello } from "../lib/greeter.ts";
export default {
  data() {
    return {
      greet: {},
      username: "USER NAME",
      text: 'Hello TS_tutorials Page',
    }
  },
  created(){
    this.greet = new Greet(this.username);
  },
  computed:{
      greeterMsg(){ return this.greet.introduceMySelf() },
      greeterSay(){ return this.greet.greeter("test") },
      greeterHelloMsg(){ return greeterHello(this.username) },    
  }
};
</script>

<style scoped>

</style>