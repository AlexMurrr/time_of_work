<template>
  <div id ='app'>  
      <hello/> 
      <date-now/>      
      <day-shedule/>
      <header-for-input/>
      <btn-future/>          
       
              
  </div>
  
</template>

<script>

import hello from './components/v-h.vue'
import dateNow from './components/date-now.vue'
import dayShedule from './components/day-shedule.vue'
import headerForInput from './components/header-forInput.vue'
import btnFuture from './components/btn-future-work.vue'
export default {
  name: 'App',
  components: {
    hello,
    dateNow,
    dayShedule,
    headerForInput,
    btnFuture,
  },
  data (){
    return {    
    placeholderDate: '0000-00-00',
    startWorkDay: new Date(2021, 10, 22, 8),    
    inputDate: '',
    showMessege:''
    }  
  },
  methods: {    
   
    garbageDisposal(){
      if ((this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 
      'Суббота') || (this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 
      'Понедельник') || 
        (this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 'Четверг')) {
       return 'Вывезти мусор'
      }
       else return 
    },    
  },
  computed: {  
      
    workTimeOnShift(){
      return this.dateNow.getTime() - this.countMsInDay / 3
    }, // get name work shift from 00:00
    dateWorkTime() {
      return new Date(this.workTimeOnShift)
   },
    dayOfWork(){
      return this.dateWorkTime.getDay()
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>

