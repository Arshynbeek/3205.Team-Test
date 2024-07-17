<template>
  <div id="app">
    <form @submit.prevent="searchUsers">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" placeholder="example@example.com" required />
      </div>
      <div>
        <label for="number">Number:</label>
        <input type="text" v-model="number" placeholder="## - ## - ##" @input="formatNumber" />
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="users.length > 0">
      <h2>Results:</h2>
      <ul>
        <li v-for="user in users" :key="user.email">{{ user.email }} - {{ user.number }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      number: '',
      users: [],
      loading: false,
      error: ''
    };
  },
  methods: {
    async searchUsers() {
      if (this.loading) return;

      this.loading = true;
      this.error = '';
      this.users = [];
      
      try {
        const response = await axios.post('http://localhost:3000/search', {
          email: this.email,
          number: this.number.replace(/-/g, '')
        });
        this.users = response.data;
      } catch (err) {
        this.error = 'An error occurred while searching.';
      } finally {
        this.loading = false;
      }
    },
    formatNumber() {
      this.number = this.number.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1-').slice(0, 8);
    }
  }
};
</script>

<style>
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 42px;
}

form {
  padding: 24px;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

form div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

input {
  padding: 2px 6px;
}

button {
  cursor: pointer;
  padding: 4px 8px;
  color: white;
  background-color: darkcyan;
  border: none;
  border-radius: 4px;
}
</style>