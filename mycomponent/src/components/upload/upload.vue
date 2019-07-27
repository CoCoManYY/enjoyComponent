<template>
  <div>
    <input class="el-upload__input" type="file" ref="input" name='file' @change=handleChange :multiple="multiple" accept="image/*,application/*" />
    <br>
    <div>上传进度：{{percent}}%</div>
  </div>
</template>

<script>
import ajax from './ajax';
export default {
  name: 'upload',
  data () {
    return {
      multiple:"multiple",
      percent:0
    }
  }, 
  methods:{
    httpRequest:ajax,
    handleChange(e){
      const files=e.target.files;
      console.log(files);
      if(!files){
        return;
      }else{
        this.uploadFile(files);
      }
    },
    uploadFile(files){
      let postFiles=Array.prototype.slice.call(files);
      console.log(postFiles);
      if(!this.multiple){
        postFiles=postFiles.slice(0,1);
      }
      if(postFiles.length==0) return;
      postFiles.forEach(file => {
        this.upload(file);
      });
    },
    upload(file){
      this.$refs.input.value=null;
      if(!this.beforeUpload){
        return this.post(file);
      }
    },
    post(file){
      const {uid}=file;
      console.log(uid);
      const options={
        headers: {},
        withCredentials: false,
        file:file,
        data:{},
        filename:'cocoman',
        action:'http://localhost:8888',
        onProgress: e => {
          console.log(e.percent);
          this.percent=(e.percent).toFixed(2);
        },
        onSuccess: res => {
          console.log('上传成功')
        },
        onError: err => {
          console.log('上传失败');
        }
      }
      const req = this.httpRequest(options);
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
