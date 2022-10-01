import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      userId: 'c1',
      coaches: [
        {
          id: 'c1',
          firstName: 'Mohamed',
          lastName: 'Abdelnasser',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Mohamed and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30,
        },
      ],
      requests: [],
    };
  },
  actions: {
    addCoach(context, payload) {
      context.commit('addCoach', payload);
    },
    sendCoachMessage(context, payload) {
      context.commit('sendCoachMessage', payload);
    },
  },
  mutations: {
    addCoach(state, payload) {
      state.coaches.push(payload);
      const coaches = JSON.parse(localStorage.getItem('coaches') || '[]');
      coaches.push(payload);
      localStorage.setItem('coaches', JSON.stringify(coaches));
    },
    sendCoachMessage(state, payload) {
      state.requests.push(payload);
      const requests = JSON.parse(localStorage.getItem('requests') || '[]');
      requests.push(payload);
      localStorage.setItem('requests', JSON.stringify(requests));
    },
  },
  getters: {
    coaches() {
      // localStorage.setItem('coaches', JSON.stringify(state.coaches));
      const coaches = JSON.parse(localStorage.getItem('coaches') || '[]');
      return coaches;
    },
    hasCoaches(state) {
      return state.coaches && state.coaches.length > 0;
    },
    requests(state, getters) {
      const requests = JSON.parse(localStorage.getItem('requests') || '[]');
      return requests.filter((req) => req.coachId === getters.currentUserId);
    },
    currentUserId(state) {
      return state.userId;
    },
  },
});

export default store;
// localStorage.setItem("users", JSON.stringify(users));
// users = JSON.parse(localStorage.getItem("users") || "[]");
