<template>
  <div class="home">
    <div class="wrapper">
      <!-- 
    <HelloWorld msg="principal panel"/> -->
      <h3  v-if="message">{{ message }}</h3>
      <h2>Enter the student details</h2>
      <input placeholder="enter name" v-model="name" type="text" />
      <input placeholder="enter roll number" v-model="roll_no" type="number" />
      <input placeholder="enter mobile number" v-model="mobile" type="number" />
      <button class="btn" v-on:click="hadleSubmit">submit data</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import './home.css'

export default {
  name: 'HomeView',
  data () {
    return {
      name: '',
      roll_no: '',
      mobile: '',
      classId: '660553d4e2ccb37cce1bc3da',
      message: ''
    }
  },
  components: {
    HelloWorld
  },

  methods: {
    async hadleSubmit () {
      const obj = {
        name: this.name,
        roll_no: Number(this.roll_no),
        mobile: Number(this.mobile),
        classId: this.classId
      }
      console.log(obj, 'valmndk')
      try {
        let res = await axios.post(
          'http://localhost:9000/user/studentRegister',
          obj
        )
        console.log(res, 'vaninaa')
        this.message = res.data.message
        setTimeout(() => {
          this.message = ''
        }, 3000)
      } catch (error) {
        console.log(error)
        this.message = 'something went wrong'
      }
    }
  }
}
</script>

<style scoped></style>
