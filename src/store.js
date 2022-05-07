import { createStore } from "vuex";

const store = createStore({    
   
  state: {
    dateNow:new Date(),
    countMsInDay: 86400000,
    startWorkDay: new Date(2022, 3, 14, 8),
    daysWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
      'Четверг', 'Пятница', 'Суббота'], 
  },
  mutations: {
   
    },

    getters:{

    }

  });

  export default store;