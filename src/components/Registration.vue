<template>
  <div id="registration">
    <h3>Register here</h3>
    <hr />
    <div class="row" v-for="user in users">
      <h4>{{ user.name }}</h4>
      <button @click="registerUser(user)">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters.unregisteredUsers
    },
  },
  methods: {
    registerUser(user) {
      console.log(user.id)
      this.$store.dispatch('Register', user.id)
    },
  },
}
</script>
<style scoped>
button {
  height: 3vh;
  width: 20vh;
}
.row {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 10px;
}
#registration {
  padding: 20px;
  width: 50%;
  height: 30vh;
  border: 1px solid gray;
  margin-right: 5px;
  background: rgb(246, 244, 244);
}
.row h4 {
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 0 0 10px 0;
}
button {
  border: none;
  font-size: inherit;
  cursor: pointer;
  background: rgb(151, 224, 151);
}
button:hover {
  background: green;
}
</style>
