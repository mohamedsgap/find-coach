<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Recivied</h2>
      </header>
      <ul v-for="request in requests" :key="request.id">
        <Li>
          <div>
            <a :href="`mailto:${request.email}`">{{ request.email }}</a>
          </div>
          <p>{{ request.message }}</p>
        </Li>
      </ul>
      <h3 v-if="!hasRequests">You have not recivied any request</h3>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    requests() {
      return this.$store.getters.requests;
    },
    hasRequests() {
      return this.$store.getters.requests.length > 0;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
