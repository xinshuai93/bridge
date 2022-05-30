<template lang="">
  <div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books">
        <td v-for="value in item">{{value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      books:[
        {
          id: 1,
          name: '《算法导论》',
          date:'2006-9',
          price:85.00,
          count:1,
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date:'2007-9',
          price:85.00,
          count:1,
        },
        {
          id: 3,
          name: '《编程珠玑》',
          date:'2008-9',
          price:85.00,
          count:1,
        },
        {
          id: 4,
          name: '《代码大全》',
          date:'2009-9',
          price:85.00,
          count:1,
        },
      ]
    }
  }
  
}
</script>
<style scoped>
  @import "./assets/css/my.css";
</style>