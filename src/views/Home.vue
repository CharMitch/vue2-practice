<template>
  <div class="home">
    <h1>Welcome to my homepage!</h1>
    
    <br>
    
    <label>What is your name?</label><br>
    <input class="input" type="text">
    <p>Oh... So your name is <!-- Add bound user property here... -->!</p>
    
    <br>
    
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
      </ul>
    </div>

    <br>

    <div>Words to live by: <em>We should never take things for granite.</em></div>

    <br>

    <div>Dad Joke of the Day: <em><!-- The suspense is killing me... --></em></div>

  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      hobbies: [
        "Cheese rolling",
        "Astral projection",
        "Electric fencing"
      ],
      randomDadJoke: ""
    }
  }
};
</script>

<style scoped>
  .input {
    border: 1px solid black;
  }
</style>