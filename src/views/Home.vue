<template>
  <div class="home">
    <h1>Welcome to my homepage!</h1>
    <label>What is your name?</label><br>
    <input class="input" type="text">
    <p>Oh... So your name is <!-- Add bound user property here -->!</p>
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
      </ul>
    </div>
    <div><span>Words to live by: <span>We should never take things for granite.</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      user: "",
      hobbies: [
        "Cheese rolling",
        "Astral projection",
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