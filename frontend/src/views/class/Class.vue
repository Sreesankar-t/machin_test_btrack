

<template>
  <div class="class">
    <div class="Class_wrapper">
      <h3 v-if="message">{{message}}</h3>
      <h2>create class</h2>
  <label for="">select the class</label>
      <select  v-model="classDetails.standard" >
  <option  value=1>CLASS 1</option>
  <option value=2>CLASS 2</option>
  <option value="3">CLASS 3</option>
  <option value="4">CLASS 4</option>
  <option value="5">CLASS 5</option>
</select>
 
      <input v-model="classDetails.division" placeholder="enter the division" type="text">
      <button v-on:click="handdleSubmit" class="btn">Submit</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
  import './class.css'
export default {
  data() {
    return {
      message: "",
      classDetails: {
        standard: 0,
        division: ""
      }
    }
  },
  methods:{
  async  handdleSubmit(){
      try {
        
        const data = this.classDetails
        console.log("data",data);
      const  res = await axios.post('http://localhost:9000/user/classCreation',data)
        this.message = res.data.message
        setTimeout(() => {
          this.message=""
        }, 3000);
      } catch (error) {
        console.log(error);
        this.message ="something wrong"
      }
    }
  }
}
</script>
