<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email"> Your Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <div class="form-control">
      <p v-if="!isFormValid">Please complete you form fields</p>
      <base-button @click="submitForm">Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      email: '',
      message: '',
      isFormValid: true,
    };
  },
  methods: {
    submitForm() {
      if (
        this.email === '' ||
        this.message === '' ||
        !this.email.includes('@')
      ) {
        this.isFormValid = false;
      } else {
        this.$store.dispatch('sendCoachMessage', {
          email: this.email,
          message: this.message,
          coachId: this.$route.params.id,
          id: new Date().toISOString(),
        });
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
