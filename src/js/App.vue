<template>
  <div>
    <h2>Welcome to my vue starter</h2>
    <!-- <img src="./assets/images/i5.png" alt=""> -->
  </div>
</template>

<script>
export default {
  created() {
    this.$toasted.show("Toasted !!", {
      theme: "bubble",
      position: "top-center",
      duration: 5000
    });
  }
};
</script>
<style scoped>
h2 {
  color: red;
}
</style>
