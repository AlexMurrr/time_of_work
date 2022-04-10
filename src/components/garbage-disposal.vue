<template>
    
</template>

<script>

export default {
    name:"garbage-disposal",
    components: {},
    props: {},
    data (){
       return {
        countMsInDay: 86400000,
        daysWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
          'Четверг', 'Пятница', 'Суббота'],
        startWorkDay: new Date(2021, 10, 22, 8),
       }
    },
    computed: {},
    methods: {
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
       else return 
    },    
    },
    watch: {},
}
</script>

<style>