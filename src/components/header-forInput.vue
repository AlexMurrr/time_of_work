<template>
    <div>
        <h2>{{headerForInput}}</h2>
    </div>
</template>
    
<script>

export default {
    name:"header-forInput",
    components: {},
    props: {},
    data (){
       return {
          headerForInput: 'Введите дату год-месяц-число, для которой хотите узнать',
       }
    },
    computed: {},
    methods: {},
    watch: {},

}
</script>

<style>

</style>