const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"沟通类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGoutong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"增加类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKehujifen"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"线索类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKehuxiansuo"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "导入导出",
                            "删除"
                        ],
                        "menu":"沟通记录管理",
                        "menuJump":"列表",
                        "tableName":"goutong"
                    }
                ],
                "menu":"沟通记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "导入导出",
                            "删除"
                        ],
                        "menu":"客户管理",
                        "menuJump":"列表",
                        "tableName":"kehu"
                    }
                ],
                "menu":"客户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "导入导出",
                            "删除"
                        ],
                        "menu":"客户积分管理",
                        "menuJump":"列表",
                        "tableName":"kehujifen"
                    }
                ],
                "menu":"客户积分管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "导入导出",
                            "删除"
                        ],
                        "menu":"客户线索管理",
                        "menuJump":"列表",
                        "tableName":"kehuxiansuo"
                    }
                ],
                "menu":"客户线索管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"沟通记录管理",
                        "menuJump":"列表",
                        "tableName":"goutong"
                    }
                ],
                "menu":"沟通记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客户管理",
                        "menuJump":"列表",
                        "tableName":"kehu"
                    }
                ],
                "menu":"客户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除"
                        ],
                        "menu":"客户积分管理",
                        "menuJump":"列表",
                        "tableName":"kehujifen"
                    }
                ],
                "menu":"客户积分管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客户线索管理",
                        "menuJump":"列表",
                        "tableName":"kehuxiansuo"
                    }
                ],
                "menu":"客户线索管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
]
    }
}
export default menu;