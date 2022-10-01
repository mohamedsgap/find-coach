<template>
  <section><coach-filter @change-filter="setFilters"> </coach-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button :link="true" to="/register">
          Register as Coach
        </base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :coach="coach"
        ></coach-item>
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: { CoachItem, CoachFilter },
  computed: {
    filteredCoaches() {
      const chx = this.$store.getters.coaches;
      return chx.filter((c) => {
        if (this.activeFilter.frontend && c.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilter.backend && c.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilter.career && c.areas.includes('career')) {
          return true;
        }
      });
    },
    hasCoaches() {
      return this.$store.getters.hasCoaches;
    },
    isNewCoachAddedd() {
      return this.$store.getters.coaches.length > 2;
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilter = updatedFilters;
    },
  },
  data() {
    return {
      activeFilter: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
