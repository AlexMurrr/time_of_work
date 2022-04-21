<template>

 <input class="inputFuture" type="text" 
          v-bind:placeholder="placeholderDate"
          v-model="inputDate"
          @input="inputDateEmit" 
          v-on:keypress.enter="numberDayOfWorkToFuture"         
      />
           <br><br>      
    
</template>

<script>

export default {
    name:"input-date-future",
    components: {},
    props: {},
    data (){
       return {
          placeholderDate: '0000-00-00',
          startWorkDay: new Date(2021, 10, 22, 8),    
          inputDate: '',
          showMessege:''
       }
    },
    computed: {},
    methods: {
      getInputDate(event){
         return this.inputDate = event.target.value         
    },
      inputDateEmit(){
         this.$emit('inputDate', this.inputDate)
      }
    },
    watch: {},

}
</script>

<style>
  .inputFuture {
  font-size: 25px;
  padding: 10px;
  margin: 10px 0; 
  border-radius:10px;
  color: #2c3e50;
  border-color: #84919e;
  outline: 0 !important;
}
</style>