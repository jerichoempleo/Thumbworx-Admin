<template>
  <div class="row">
    <div class="col-sm-4">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group" >
          <label>Email</label>
          <input type="email" v-model="email" class="" placeholder="Email" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'redaxios';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        });

        if (response.data.status === true) {
          alert("Login Successfully");

          // Make sure to define the route in your router setup
          this.$router.push({ name: 'Dashboard' }); //this is for
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.error('Error:', error);
        alert("Error, please try again");
      }
    },
  },
};
</script>
