<template>

    <div class="findStd_wrapper">
      <label for="">select the class</label>
<select  v-model="standard" >
  <option  value=1>CLASS 1</option>
  <option value=2>CLASS 2</option>
  <option value="3">CLASS 3</option>
  <option value="4">CLASS 4</option>
  <option value="5">CLASS 5</option>
</select>
<button v-on:click="handleSubmit" class="btn">submit</button>
<div class="item_w">
     <p href="">Name</p>
    <p href="">Roll number</p>
    <p href="">Mobile number</p>
    <p href="">Updation</p>
</div>

<div class="item_w"  v-for="item of content" :key="item.id ">
    <p href="">{{item.name}}</p>
    <p href="">{{item.roll_no}}</p>
    <p href="">{{item.mobile}}</p>
    <div class="btn_Wrap">
    <button v-on:click="handleDelete(item._id)">delete</button>
      <button v-on:click="getId(item._id)">update</button>
    </div>

</div>
    <div class="update" v-show="visible">
    <h2>update student class</h2>
    <h3 v-if="message">{{message}}</h3>
    <div class="updateWrap">
    <input  v-model="studentData.standard" placeholder="enter the standart" type="text">
    <input v-model="studentData.division" placeholder="enter the divison" type="text">
    <button v-on:click="handleUpdate" >update</button>
    </div>
</div>
 </div>
</template>

<script>
import axios from 'axios'
  import './findstudent.css'
export default {
  data() {
    return {
      message: "",
      content:[],
       standard: 0,
       studentData: {
        standard: 0,
        division: "",  
      },
      Id:null,
     visible:false,
    }
  },
    mounted() {
   
  },
  methods:{
  async handleSubmit(){
  try {
    const  standard = this.standard
    console.log(standard,"mmm");
    const res = await axios.get('http://localhost:9000/user/getStudentBasedOnStandard', {
      params: {standard}
    });
    console.log(res.data.students,"ugyhhjhjhg");
    this.content =res.data.students
    this.message = res.data.message;
    setTimeout(() => {
      this.message = "";
    }, 3000);
  } catch (error) {
    console.log(error);
    this.message = "something wrong";
  }
},
handleDelete(id){
  console.log(id);
  
    axios.delete(`http://localhost:9000/user/deleteStudent/${id}`)

   this.content = this.content.filter(item => item._id !== id);
},
getId(id){
console.log(id);
this.Id = id
this.visible =true
},
async handleUpdate(){
  try {
      const id = this.Id
        const data = this.studentData
      console.log("data",data,id);
      const  res = await axios.post(`http://localhost:9000/user/updateStudentClass/${id}`,data)
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



