<template>
    <div class="container">
      <h2>Accounts</h2>
  
      <h2>Driver</h2>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Driver ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in result" v-bind:key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone_number1 }}</td>
            <td>{{ getStatusDisplay(user.account_status) }}</td>
            <td>View</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script> //Bawal tanggaling ung script tag para makita pa rin display kasi part sya ng default code
  import axios from "redaxios";
  
  export default {
    name: "User",
    data() {
      return {
        result: {}, // Empty object as a placeholder for data
        user: {
          id: "",
          first_name: "",
          middle_name: "",
          last_name: "",
          birth_date: "",
          gender: "",
          marital_status: "",
          age: "",
          user_type: "",
          email: "",
          phone_number1: "",
          phone_number2: "",
          account_status: "",
        },
      };
    },
    created() {
      this.UserLoad();
    },
    mounted() {
      console.log("mounted() called.......");
    },
  
    methods: {
      UserLoad() {
        var page = "http://127.0.0.1:8000/api/user";
        axios.get(page).then(({ data }) => {
          console.log(data);
          this.result = data;
        });
      },
      getStatusDisplay(accountStatus) {
        // Convert integer status to display text
        switch (accountStatus) {
          case 0:
            return "Pending";
          case 1:
            return "Onboarding";
          case 2:
            return "Active";
          default:
            return accountStatus; // Return status as is if not matched
        }
      },
    },
  };
  </script>
  