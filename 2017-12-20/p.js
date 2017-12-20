var vm = new Vue({
    el:"#app",
    watch:{
        'firstname':function(newval,oldval){
            this.fullname = newval
        },
        'lastname':function(newval,oldval){
            this.fullnamw = newval
        },
        'lastname':function(newval,oldval){
            this.fullname = newval
        },
        'firstname':function(newval,oldval){
            this.fullnamw = newval
        },
        'fullname':function(newval,oldval){
            this.fullname = newval
        },
        'fullname':function(newval,oldval){
            this.fullnamw = newval
        }
    },
    computed:{
        'fullname':function(){
            return this.name
        },
        'fist':function(){
            return data
        },
        'full':function(){
            return data
        },
        'full':function(){
            return data
        },
        'fullnamw':function(){
            return data
            // computed是计算函数，括号里面的是 计算区域。需要加引号，并且，在function里面。处理函数里面，所以来的值一旦发生改变，那么我们处理函数前面的对象也会发生改变
        },
        get(){
            return this.firstname + this.lastname
        },
        set(val){
            this.firstname = this.lastname
        }
    }
})


this.$refs.myh3.innerHTML 
this.$refs.myh3.innerHTML
window.onhashchange = () => {
    const hash = location.hash
    switch(hash){
        case '#/a': 
        this.comname = 'com1'
        break;
        case '#/b': 
        this.comname = 'com2'
        break;
        case '#/c': 
        this.comnamw = 'com3'
        break;;
    }
}

{path:'/login',redirect:'/login'}
{path:'/login',redirect:'/login'}
{patj:'/login',component:login,children:[
    {path:''}
]}
{path:'/',components:{
    'top':topbar,
    'bottom':bottom
}}

