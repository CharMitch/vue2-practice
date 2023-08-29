<template>
  <div class="home">
    <h1>Welcome to my webpage!</h1>
    <label>What is your name?</label><br>
    <input class="input" type="text">
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      hobbies: [
        "Opera singing",
        "Hot air balooning",
        "Electric fencing"
      ]
    }
  }
};
</script>

<style scoped>
  .input {
    border: 1px solid black;
  }
</style>