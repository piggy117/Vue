
  var vm = new Vue({
      el:"#app",
      data:{
          msg:'123'
      },
      methods:{
          show(){
              console.log(df)
          }
      },
      beforeCreate(){
        //   这是我们遇到的第一个生命周期函数（创建阶段）
      },
      created(){
        //   这是我们遇到的第二个生命周期函数，还是创建阶段
      },
      beforeMount(){
        //   创建阶段的第三个生命周期，表示，即将挂载
      },
      mounted(){
        //   创建阶段的第四个生命周期函数，表示页面已经完成了渲染，同时，mounted函数的执行，标志着，创建阶段的结束，从此以后，Vue实例门就从创建阶段，进入运行阶段
      },
      beforeUpdate(){
        //   更新之前，（运行阶段）
      },
      updated(){
        //   更新之后
      }
  })  

