<template>
  <div>
  {{garbageDisposal()}}  
  </div>    
</template>

<script>

export default {
    name:"garbage-disposal",
    components: {},
    props: {},
    data (){
       return {                  
       }
    },
    computed: {
      countMsInDay(){
            return this.$store.state.countMsInDay;
        },
        startWorkDay(){
            return this.$store.state.startWorkDay;
        },
         daysWeek(){
           return this.$store.state.daysWeek;
         }
    },
    methods: {
        workTimeOnShift(){
          return this.dateNow.getTime() - this.countMsInDay / 3
        }, // get name work shift from 00:00
        dateWorkTime() {
          return new Date(this.workTimeOnShift)
        },
        countMsFromWorkDay(){ return new Date() - this.startWorkDay},
        dayOfSchedule() {
          return Math.floor(this.countMsFromWorkDay() / this.countMsInDay) % 3
        },
        dayOfWork(){
          return this.dateWorkTime.getDay()
      },
        garbageDisposal(){
      if ((this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 
      'Суббота') || (this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 
      'Понедельник') || 
        (this.dayOfSchedule === 0 && this.daysWeek[this.dayOfWork] === 'Четверг')) {
       return 'Вывезти мусор'
      }
       else return 'not'
    },    
    },
    watch: {},
}
</script>

