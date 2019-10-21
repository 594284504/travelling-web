const CONTACT_API = {
    getContactList:{
        //此方法是 获取联系人列表
        method:'get',
        url:'/contactList'
    },
    addNewContactPerson:{
        // 添加新建联系人到库，post 系添加作用
        method:'post',
        url:'/contact/new/json'
    },
    editContact:{
        //修改并保存联系人信息，put 系更新作用，是把该编辑页面的信息全推送到后端
        method:'put',
        url:'/contact/edit'
    },
    delContact:{
        //删除联系人
        method:'delete',
        url:'/contact'
    }
}

export default CONTACT_API