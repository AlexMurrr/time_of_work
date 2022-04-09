<template>
    <div>
      <h2>{{`Сегодня ${daysWeek[dateNow.getDay()].toUpperCase()}`}}</h2>
      <h2>{{`${dateNow.getDate()} ${months[dateNow.getMonth()]} 
      ${dateNow.getFullYear()}`}}</h2>
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
    computed: {},
    methods: {},
    watch: {},
}
</script>

<style>
  
</style>