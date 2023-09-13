<template>
  <div class="home">
    <h1>{{ header }}</h1>
    
    <br>
    
    <label>What is your name?</label><br>
    <input class="input" type="text" v-model="user">
    <p>Oh... So your name is {{ user }}!</p>
    
    <br>
    
    <div>
      <p>Hobbies:</p>
      <ul id="hobbies">
        <li v-for="hobby in hobbies" v-bind:key="hobby.id">{{ hobby }}</li>
      <!-- can also do... <li v-for="(hobby, index) in hobbies" v-bind:key="index">{{ hobby }} {{ index }}</li> -->
      </ul>
    </div>

    <br>

    <div>Words to live by: <em>{{ $store.state.wordsToLiveBy }}</em></div>

    <br>

    <div>Dad Joke of the Day: <em>{{ randomDadJoke }}</em></div>
    <button v-on:click="generateRandomDadJoke()">Make Me Laugh</button>
  </div>
</template>

<script>
import dadJokeService from '../services/DadJokeService.js';

export default {
  name: "home",
  data() {
    return {
      header: "Welcome to Charlene's Fabulous Dad Joke Page!",
      user: "",
      hobbies: [
        "Cheese rolling",
        "Astral projection",
        "Electric fencing"
      ],
      randomDadJoke: ""
    }
  },
  created(){
    this.generateRandomDadJoke();
  },
  methods:{
  generateRandomDadJoke(){
    dadJokeService.getRandomDadJoke().then(response =>{
        this.randomDadJoke = response.data;

    });
  }
}

};
</script>

<style scoped>
  .input {
    border: 1px solid black;
  }
</style>