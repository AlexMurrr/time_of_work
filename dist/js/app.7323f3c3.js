(function(){"use strict";var e={656:function(e,t,n){var r=n(963),o=n(252),u=n(577);const a={id:"app"},i=(0,o._)("h1",null,"Привет!",-1),s=(0,o._)("h2",null,"Введите дату год-месяц-число, для которой хотите узнать ",-1),l=["placeholder","value"],h=(0,o._)("br",null,null,-1),f=(0,o._)("br",null,null,-1),c=(0,o._)("br",null,null,-1),d=(0,o._)("br",null,null,-1);function y(e,t,n,y,p,D){return(0,o.wg)(),(0,o.iD)("div",a,[i,(0,o._)("h2",null,(0,u.zw)(`Сегодня ${p.daysWeek[p.dateNow.getDay()].toUpperCase()}`),1),(0,o._)("h2",null,(0,u.zw)(`${p.dateNow.getDate()} ${p.months[p.dateNow.getMonth()]} \n        ${p.dateNow.getFullYear()}`),1),(0,o._)("h2",null,(0,u.zw)(D.nowDayOfShedule()),1),(0,o._)("h2",null,(0,u.zw)(D.garbageDisposal()),1),s,(0,o._)("input",{type:"text",placeholder:p.placeholderDate,value:p.inputDate,onInput:t[0]||(t[0]=(...e)=>D.getInputDate&&D.getInputDate(...e)),onKeypress:t[1]||(t[1]=(0,r.D2)(((...e)=>D.numberDayOfWorkToFuture&&D.numberDayOfWorkToFuture(...e)),["enter"]))},null,40,l),h,f,(0,o._)("button",{class:"btnShowRes",onClick:t[2]||(t[2]=(...e)=>D.numberDayOfWorkToFuture&&D.numberDayOfWorkToFuture(...e))},"Показать результат"),c,d,(0,o._)("h2",null,(0,u.zw)(p.showMessege),1)])}var p={name:"App",components:{},data(){return{dateNow:new Date,daysWeek:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],months:["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"],placeholderDate:"0000-00-00",startWorkDay:new Date(2021,10,22,8),inputDate:"",showMessege:""}},methods:{countMsFromWorkDay(){return new Date-this.startWorkDay},dayOfSchedule(){return Math.floor(this.countMsFromWorkDay()/this.countMsInDay)%3},nowDayOfShedule(){return 0===this.dayOfSchedule()?"Вы должны быть на работе":1===this.dayOfSchedule()?"Сегодня отсыпной, завтра выходной":2===this.dayOfSchedule()?"Выходной, а завтра на работу":void 0},numberDayOfWorkToFuture(){const e=Math.floor((new Date(this.inputDate).getTime()+this.countMsInDay/3-this.startWorkDay)/this.countMsInDay)%3;0===e&&(this.showMessege="В этот день вы должны быть на работе"),1===e?this.showMessege="Этот день - отсыпной":2===e&&(this.showMessege="Этот день - выходной")},getInputDate(e){return this.inputDate=e.target.value},garbageDisposal(){return 0===this.dayOfSchedule&&"Суббота"===this.daysWeek[this.dayOfWork]||0===this.dayOfSchedule&&"Понедельник"===this.daysWeek[this.dayOfWork]||0===this.dayOfSchedule&&"Четверг"===this.daysWeek[this.dayOfWork]?"Вывезти мусор":void 0}},computed:{countMsInDay(){return 864e5},workTimeOnShift(){return this.dateNow.getTime()-this.countMsInDay/3},dateWorkTime(){return new Date(this.workTimeOnShift)},dayOfWork(){return this.dateWorkTime.getDay()}}},D=n(744);const w=(0,D.Z)(p,[["render",y]]);var k=w;(0,r.ri)(k).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,u){if(!r){var a=1/0;for(h=0;h<e.length;h++){r=e[h][0],o=e[h][1],u=e[h][2];for(var i=!0,s=0;s<r.length;s++)(!1&u||a>=u)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,u<a&&(a=u));if(i){e.splice(h--,1);var l=o();void 0!==l&&(t=l)}}return t}u=u||0;for(var h=e.length;h>0&&e[h-1][2]>u;h--)e[h]=e[h-1];e[h]=[r,o,u]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,u,a=r[0],i=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var h=s(n)}for(t&&t(r);l<a.length;l++)u=a[l],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(h)},r=self["webpackChunktime_of_work"]=self["webpackChunktime_of_work"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(656)}));r=n.O(r)})();
//# sourceMappingURL=app.7323f3c3.js.map