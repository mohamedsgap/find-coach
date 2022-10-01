import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactsCoach from './pages/requests/ContactsCoach.vue';
import RequestsRecived from './pages/requests/RequestsRecived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        {
          path: 'contacts',
          component: ContactsCoach,
        },
      ],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsRecived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
