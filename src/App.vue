<template>
  <div id ='app'>  
      <hello/>         
      <h2>{{`Сегодня ${daysWeek[dateNow.getDay()].toUpperCase()}`}}</h2>
      <h2>{{`${dateNow.getDate()} ${months[dateNow.getMonth()]} 
        ${dateNow.getFullYear()}`}}</h2>
      <h2>{{nowDayOfShedule()}} </h2>
      <h2>{{garbageDisposal()}}</h2>
       <h2>Введите дату год-месяц-число, для которой хотите узнать </h2>    
       <input type="text" 
          v-bind:placeholder="placeholderDate"
          v-bind:value="inputDate"
          v-on:input="getInputDate" 
          v-on:keypress.enter="numberDayOfWorkToFuture"         
      />
           <br><br>
       <button class="btnShowRes" @click="numberDayOfWorkToFuture">Показать результат</button>
       <br><br>
       <h2>{{showMessege}}</h2>  
              
  </div>
  
</template>

<script>

import hello from './components/v-h.vue'

export default {
  name: 'App',
  components: {
    hello
  },
  data (){
    return {
    dateNow: new Date(),
    daysWeek: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 
    'Четверг', 'Пятница', 'Суббота'],
    months: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
    placeholderDate: '0000-00-00',
    startWorkDay: new Date(2021, 10, 22, 8),    
    inputDate: '',
    showMessege:''
    }  
  },
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
    numberDayOfWorkToFuture() {
       const dayOfWork = Math.floor(
        (new Date(this.inputDate).getTime() + 
        this.countMsInDay/ 3 - this.startWorkDay)
        / this.countMsInDay) % 3
        if (dayOfWork === 0) {
              this.showMessege = 'В этот день вы должны быть на работе'
          } if (dayOfWork === 1) {
              this.showMessege = 'Этот день - отсыпной';
          } else if (dayOfWork === 2) {
            this.showMessege = 'Этот день - выходной';
      }      
  },
        
    getInputDate(event){
     return this.inputDate = event.target.value         
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
  computed: {
    countMsInDay(){
      return 24 * 60 * 60 * 1000 
    },
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

input[type=text] {
  font-size: 25px;
  padding: 10px;
  margin: 10px 0; 
  border-radius:10px;
  color: #2c3e50;
  border-color: #84919e;
  outline: 0 !important;
}

.btnShowRes {
    color: #4a4e4c;
    position: relative;
    place-content: center;
    place-items: center;
    width: fit-content;
    border-radius: 50% 20% / 10% 40%;
    letter-spacing: 0.05em;
    border: 4px solid #48504c;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    outline: none;
    background: #fff;
    transition: all 0.22s;
}
.btnShowRes:hover {
    cursor: pointer;
    opacity: 0.8;
}

.btnShowRes:disabled {
    cursor: not-allowed;
    opacity: 1!important;
    background: #eee!important;
    border-color: #ddd!important;
    color: #999!important;
}

.btnShowRes:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.btnShowRes.primary {
    background: #42b983;
    color: #fff;
}

</style>

