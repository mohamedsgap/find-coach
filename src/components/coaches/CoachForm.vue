<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname"> Firstname</label>
      <input
        @blur="clearValidity('firstName')"
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
      />
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname"> Lastname</label>
      <input
        @blur="clearValidity('lastName')"
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
      />
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description"> Description</label>
      <textarea
        @blur="clearValidity('description')"
        rows="5"
        id="description"
        v-model.trim="description.val"
      />
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate"> Hourly Rate</label>
      <input
        @blur="clearValidity('rate')"
        type="number"
        id="rate"
        v-model.number="rate.val"
      />
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Ecpertise</h3>
      <div>
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input
          @blur="clearValidity('areas')"
          type="checkbox"
          value="career"
          id="career"
          v-model="areas.val"
        />
        <label for="career">Career</label>
      </div>
    </div>
    <p v-if="!isFormValid">there is an error in you form</p>
    <base-button @click="submitForm">Register</base-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      firstName: { val: '', isValid: true },
      lastName: { val: '', isValid: true },
      description: { val: '', isValid: true },
      rate: { val: null, isValid: true },
      areas: { val: [], isValid: true },
      isFormValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.isFormValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.isFormValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.isFormValid = false;
      }
      if (this.firstName.val === '') {
        this.firstName.isValid = false;
        this.isFormValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isFormValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.isFormValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.isFormValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        hourlyRate: this.rate.val,
        areas: this.areas.val,
        id: new Date().toISOString() || 'c3',
      };
      console.log(formData);
      this.$store.dispatch('addCoach', formData);
      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
