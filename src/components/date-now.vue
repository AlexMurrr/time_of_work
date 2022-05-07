<template>
    <div>
      <h2>{{`Сегодня ${daysWeek[dateNowC.getDay()].toUpperCase()}`}}</h2>      
      <h2>{{`${dateNowC.getDate()} ${months[dateNowC.getMonth()]} 
      ${dateNowC.getFullYear()}`}}</h2>
    </div>
</template>

<script>

export default {
    name:"date-now",
    components: {},
    props: {},
    data (){
       return {
        dateNow: new Date(),
        daysWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
          'Четверг', 'Пятница', 'Суббота'],
        months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
          'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
       }
    },
    computed: {
      dateNowC(){
        return this.$store.state.dateNow
      }
    },
    methods: {},
    watch: {},
}
</script>

<style>
  
</style>