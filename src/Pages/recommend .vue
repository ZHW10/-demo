<template>
  <div>recommend</div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        categoryId:'',
        subCateList:[]
      }
    },
    mounted(){
      
    },
    watch:{
      '$route':'fetchid'    
    },
    methods:{
      async fetchid(){
        console.log(categoryId)
        this.categoryId=this.$route.query.categoryId
        if(!categoryId){
          
          this.subCateList=[]
          console.log(this.categoryItems,this.subCateList)
        }else{
          this.subCateList=await this.$API.indexNav().subCateList
          this.categoryItems={}
          console.log(this.categoryItems,this.subCateList)
        }
      }
    },
  }
</script>

<style scoped>
</style>
