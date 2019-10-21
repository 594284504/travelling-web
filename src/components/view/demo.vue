<template>
    <div>
    <van-contact-list
    
    :list="list"
    @add="onAdd"
    @edit="onEdit" 

  />

    <van-popup v-model="showEdit" position="bottom">
  <van-contact-edit
    :contact-info="editingContact"
    :is-edit="isEdit"
    @save="onSave"
    @delete="onDelete"
  />
    </van-popup>
 
    </div>
</template>

<script>
import { ContactList, ContactEdit,Popup,Toast } from 'vant';
 
 
export default {
    components:{
        [ContactList.name]:ContactList,
        [ContactEdit.name]:ContactEdit,
        [Popup.name]:Popup
    },
    data(){
        return {
          list:[]  ,
          instance:null,
          //弹出编辑页面是否显示
          showEdit:false,
          //编辑界面的联系人相关信息
          editingContact:{},
          //true为编辑，false为新建
          isEdit:false

        }
        
    },
    created(){
     
        this.getList()
    },
    methods:{
       async getList(){
           let res=await
            this.$Http.getContactList()
          this.list=res.data
        },
        onAdd(){
            this.editingContact={id:this.list.length}
            this.showEdit=true,
            this.isEdit=false
        },
        onEdit(info){
           this.showEdit=true,//展示弹窗
            this.isEdit=true
            this.editingContact=info
        },
        //保存联系人
       async onSave(info){
          if(this.isEdit){
                  let res=await
                this.$Http.editContact(info)
                    if(res.code===200){
                     Toast('新建联系人成功')
                 this.showEdit=false
                 this.getList()
                    }
        //     this.instance.put('/contact/edit',info)
        //     .then(res=>{
        //          if(res.data.code===200){
        //             Toast('保存联系人成功')
        //         this.showEdit=false
        //         this.getList()
        //          }
           // })
          
          }else{
              let res=await
                this.$Http.addNewContactPerson(info)
                    if(res.code===200){
                     Toast('新建联系人成功')
                 this.showEdit=false
                 this.getList()
                    }
            //    this.instance.post('/contact/new/json',info)
            // .then(res=>{
            //     if(res.data.code===200){
            //         Toast('新建联系人成功')
            //     this.showEdit=false
            //     this.getList()
            //     }
            // }).catch(err=>{
            //     console.log(err)
            //     Toast('Add newContact-person failed')
            // })
          }
        },
        //删除联系人
       async onDelete(info){
          let res=await
                this.$Http.delContact({id:info.id})
                    if(res.code===200){
                       Toast('删除成功')
                   this.getList()
                  this.showEdit=false
                    }
        //  this.instance.delete('/contact',{
        //      params:{
        //          id:info.id
        //      }
        //  }).then(res=>{
        //      if(res.data.code===200){
        //          Toast('删除成功')
        //          this.getList()
        //          this.showEdit=false
        //      }
        //  })
        }
    }
    
}
</script>

<style  scoped>
.van-contact-list__add{
    z-index: 0
}
.van-popup{
  height:80%;
}
</style>