<template>
    <div>
        <h2>{{nowDayOfShedule()}} </h2>
    </div>
</template>

<script>

export default {
    name:"day-shedule",
    components: {},
    props: {},
    data (){
       return {
         countMsInDay: 86400000,
         startWorkDay: new Date(2021, 10, 22, 8),    
       }
    },
    computed: {},
    methods: {
         countMsFromWorkDay(){ return new Date() - this.startWorkDay},
    dayOfSchedule() {
       return Math.floor(this.countMsFromWorkDay() / this.countMsInDay) % 3
       },
    nowDayOfShedule(){
      if (this.dayOfSchedule() === 0) {
                return 'Вы должны быть на работе';
            } else if (this.dayOfSchedule() === 1) {
                return 'Сегодня отсыпной, завтра выходной';
            } else if (this.dayOfSchedule() === 2) {
                return 'Выходной, а завтра на работу';
            }
    }, 
    },
    watch: {},

}
</script>

<style>
  
</style>