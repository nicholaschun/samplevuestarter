<template>
  <div>
    <h2>Welcome to my vue starter with firefox</h2>
   <img src="./assets/images/i5.png" alt="logo">
  </div>
</template>

<script>
import utils from "./../js/utils";
import "./assets/css/style.css";
export default {
  
  created() {
    this.$toasted.show("Toasted !!", {
      theme: "bubble",
      position: "top-center",
      duration: 5000
    });

    const mes = new utils();
    console.log(mes.conststructSomeMessage("add message"));
  }
};
</script>

<style scoped>
h2{
    color: green;
}
</style>
