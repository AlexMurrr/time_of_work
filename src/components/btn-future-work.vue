<template>
     <input-date-future
        @inputDate = 'inputDate'
     />
     <button class="btnShowRes"
      @click="numberDayOfWorkToFuture"      
     >
     Показать результат</button>
       <br><br>
       {{showMessege}}
</template>

<script>

import inputDateFuture from './input-date-future.vue'

export default {
    name:"btn-future-work",
    components: {
        inputDateFuture,
    },
    props: {},
    data (){
       return {        
         showMessege:'', 
         inputDate1:'',
       }
    },
    computed: {
         countMsInDay(){
            return this.$store.state.countMsInDay; 
         },
         startWorkDay(){
            return this.$store.state.startWorkDay;
        }
    },
    methods: {
        numberDayOfWorkToFuture() {
       const dayOfWork = Math.floor(
        (new Date(this.inputDate1).getTime() +          
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
       inputDate(date){
         return  this.inputDate1 = date
       }
    },
    watch: {},

}
</script>

<style>
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