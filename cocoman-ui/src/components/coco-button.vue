<template>
    <div>
        <button :class="['button',childType,allowed]" @click="emitClick"><slot></slot></button>
    </div>
</template>
<script>
export default {
    name:'coco-button',
    props:{
       type:{
            type:String,
            default:'default' 
       },
       disabled:Boolean 
    },
    computed:{
        childType(){
            switch(this.type){
                case 'primary': return 'button-primary';
                case 'success': return 'button-success';
                case 'info': return 'button-info';
                case 'warn': return 'button-warn';
                case 'danger': return 'button-danger';
                default: return '';
            }
        },
        allowed(){
            switch(this.disabled){
                case true: return 'not-allowed';
                default: return '';
            }
        }
    },
    methods:{
        emitClick(evt){
            if(!this.disabled){
                this.$emit('click',evt);
            }
        }
    }
}
</script>
<style>
.button{
    color: white;
    border: none;
    border-radius: 2px;
    padding: 6px 12px;
    cursor: pointer;
    margin: 4px;
}
.button:hover{
    opacity: .9;
}
.button-primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button-success{
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.button-info{
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.button-danger{
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.button-warn{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.not-allowed{
    cursor:not-allowed;
    opacity: .6;
}
</style>

