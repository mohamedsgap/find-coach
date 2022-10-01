<template>
  <section>
    <base-card>
      <h2>
        {{ this.selectedCoach.firstName + '' + this.selectedCoach.lastName }}
      </h2>
      <h3>${{ this.selectedCoach.hourlyRate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now</h2>
        <base-button link :to="`/coaches/${this.id}/contacts`"
          >Contact</base-button
        >
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in this.selectedCoach.areas"
        :key="area"
        :type="area"
        :title="area"
      >
      </base-badge>
      <p>{{ this.selectedCoach.description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from '../../components/UI/BaseBadge.vue';
import BaseButton from '../../components/UI/BaseButton.vue';
export default {
  components: { BaseBadge, BaseButton },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters.coaches.find(
      (c) => c.id === this.id
    );
    console.log('this.selectedCoach', this.selectedCoach);
  },
  computed: {
    contactLink() {
      console.log('contactLink', this.$route.path + '/contacts');
      // return this.$route.path + '/' + this.id + '/contacts';
      return this.$route.path + '/contacts';
    },
  },
};
</script>

<style></style>
