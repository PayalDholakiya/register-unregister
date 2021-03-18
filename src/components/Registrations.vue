<template>
  <div id="registrations">
    <div>
      <h3>Registrations</h3>
    </div>
    <hr />
    <h5>Total: {{ total }}</h5>
    <div class="row" v-for="registration in registrations">
      <h4>{{ registration.name }}</h4>
      <span @click="unregister(registration)">Unregister</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      total: 'totalRegistrations',
      registrations: 'registrations',
    }),
  },
  methods: {
    unregister(registration) {
      this.$store.commit({
        type: 'unregister',
        userId: registration.userId,
      })
    },
  },
}
</script>
<style scoped>
#registrations {
  height: 30vh;
  padding: 20px;
  width: 50%;
  background: rgb(246, 244, 244);
  border: 1px solid gray;
}
.row {
  display: flex;
  flex-direction: row;
  text-align: center;
  margin-bottom: 10px;
}
.row h4 {
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 0 0 10px 0;
}
span {
  cursor: pointer;
  color: red;
}
</style>
