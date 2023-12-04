## 简介
这是一个博客的后端，基于nest+mysql+redis实现

## 下载

```bash
$ pnpm install
```

## 启动

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 测试

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## 数据库

### 文章
| 字段名       | 数据类型            | 描述                                       |
|-----------|-----------------|------------------------------------------|
| id        | INT             | 文章唯一标识符                                  |
| title     | String          | 文章标题， 必须字段                               |
| keyword   | String          | 关键字， 必须字段                                |
| descript  | String          | 文章描述， 可选字段                               |
| is_top    | Number          | 文章是否置顶，0为否，1为是，默认 0                      |
| tag       | Array(ObjectId) | 文章标签， 关联到 Tag 模型                         |
| content   | String          | 文章内容， 必须字段                               |
| state     | Number          | 文章状态， 1 为发布， 2 为草稿， 默认 1                 |
| publish   | Number          | 文章公开状态， 1 为公开， 2 为私密， 默认 1               |
| thumb     | String          | 文章缩略图， 可选字段                              |
| type      | Number          | 文章分类， 1 为 code, 2 为 think, 3 为 民谣， 默认为 1 |
| create_at | Date            | 文章创建时间， 默认当前时间                           |
| update_at | Date            | 文章最后修改时间， 默认当前时间                         |
| meta      | Object          | 其他元信息， 包含 views, likes, comments         |

### 标签
| 字段名       | 数据类型   | 描述               |
|-----------|--------|------------------|
| id        | INT    | 文章唯一标识符          |
| name      | String | 标签名称，必须是唯一的，不能为空 |
| descript  | String | 描述信息，可选          |
| create_at | Date   | 创建时间，默认当前时间      |
| update_at | Date   | 更新时间，默认值为空       |
| sort      | Number | 排序，默认值为 0        |

### 评论
| 字段名       | 数据类型    | 描述                  |
|-----------|---------|---------------------|
| id        | INTEGER | 主键，自增               |
| post_id   | Number  | 评论所在的文章_id，0代表系统留言板 |
| pid       | Number  | pid，0代表默认留言         |
| content   | String  | 评论内容                |
| likes     | Number  | 被赞数                 |
| is_top    | Number  | 评论是否置顶，0为否，1为是，默认 0 |
| ip        | String  | 评论者IP地址             |
| city      | String  | IP物理地址              |
| range     | String  | IP物理地址范围            |
| country   | String  | IP物理地址国家            |
| agent     | String  | 用户代理，浏览器类型          |
| state     | Number  | 状态 0待审核 1通过正常 2不通过  |
| create_at | Date    | 评论创建时间              |
| update_at | Date    | 评论最后修改时间            |

### 日记
| 字段名       | 数据类型    | 描述               |
|-----------|---------|------------------|
| id        | INTEGER | 主键，自增            |
| name      | String  | 日记标题             |
| content   | String  | 日记内容             |
| create_at | Date    | 日记创建时间           |
| update_at | Date    | 日记最后修改时间         |
| publish   | Number  | 日记公开状态 1 公开 2 私密 |
| weather   | String  | 天气               |
| likes     | Number  | 日记点赞数            |

### 留言版
| 字段名         | 数据类型    | 描述                        |
|-------------|---------|---------------------------|
| id          | INTEGER | 主键，自增                     |
| name        | String  | 名称                        |
| content     | String  | 内容                        |
| state       | Number  | 状态  0 待审核，1 审核通过， 2 审核不通过 |
| ip          | String  | IP地址                      |
| city        | String  | IP物理地址                    |
| range       | String  | IP物理地址范围                  |
| country     | String  | IP物理地址国家                  |
| agent       | String  | 用户代理，浏览器类型                |
| create_time | Date    | 创建时间                      |

### 友链
| 字段名       | 数据类型    | 描述                |
|-----------|---------|-------------------|
| id        | INTEGER | 主键，自增             |
| name      | String  | 友链名称              |
| url       | String  | 链接地址              |
| create_at | Date    | 创建时间              |
| slogan    | String  | 签名                |
| gravatar  | String  | 头像                |
| email     | String  | 邮箱地址              |
| state     | String  | 是否公开 1表示公开 2表示不公开 |

### 网站配置
| 字段名       | 数据类型    | 描述           |
|-----------|---------|--------------|
| id        | INTEGER | 主键，自增        |
| title     | String  | 网站标题         |
| sub_title | String  | 网站副标题        |
| keyword   | String  | 关键字          |
| descript  | String  | 网站描述         |
| url       | String  | 站点地址         |
| email     | String  | 网站官邮         |
| icp       | String  | 备案号          |
| likes     | Number  | 被喜欢次数，默认值为 0 |

### 用户
| 字段名        | 类型           | 说明                                |
|------------|--------------|-----------------------------------|
| id         | INTEGER      | 主键，自增                             |
| email      | STRING(128)  | 电子邮件地址                            |
| user_name  | STRING(128)  | 用户名                               |
| slogan     | String       | 用户签名                              |
| gravatar   | String       | 用户头像                              |
| password   | String       | 用户密码，通过crypto.createHash("md5")生成 |
| role_ids   | STRING(128)  | 角色ID列表，默认值为空                      |
| info       | STRING(1024) | 用户信息，扩展字段                         |
| deleted    | INTEGER      | 是否删除，默认值为0                        |
| created_at | DATE         | 创建时间                              |
| updated_at | DATE         | 更新时间                              |

### 角色
| 字段名        | 类型          | 说明            |
|------------|-------------|---------------|
| id         | INTEGER     | 主键，自增         |
| name       | STRING(255) | 角色名称          |
| describe   | STRING(255) | 描述            |
| parent_id  | INTEGER     | 父ID，不允许为空     |
| serial_num | INTEGER     | 排序，默认值为null   |
| menu_ids   | STRING(255) | 菜单权限，默认值为null |
| created_at | DATE        | 创建时间          |
| updated_at | DATE        | 更新时间          |

### 菜单
| 字段名           | 类型          | 说明               |
|---------------|-------------|------------------|
| id            | INTEGER     | 主键，自增            |
| name          | STRING(255) | 菜单名称             |
| parent_id     | INTEGER     | 父ID，不允许为空        |
| icon          | STRING(255) | 图标               |
| show          | INTEGER     | 是否显示，默认值为1       |
| component     | STRING(255) | 组件               |
| redirect      | STRING(255) | 重定向              |
| permission    | STRING(255) | 权限标识             |
| serial_num    | INTEGER     | 排序，默认值为null      |
| path          | INTEGER     | 路径，默认值为null      |
| hide_children | INTEGER     | 是否隐藏子节点，默认值为0    |
| type          | INTEGER     | 菜单类型，1目录，2页面，3按钮 |
| created_at    | DATE        | 创建时间             |
| updated_at    | DATE        | 更新时间             |

## 接口

### 用户相关
| 接口路径                  | 请求方式 | 描述       |
|-----------------------|------|----------|
| /user/register        | post | 用户注册     |
| /user/login           | post | 用户登录     |
| /user/logout          | get  | 用户登出     |
| /user/send_mail       | post | 发送邮箱验证码  |
| /user/update          | post | 更新用户信息   |
| /user/update_password | post | 更新用户密码   |
| /user/list            | get  | 获取用户列表   |
| /user/delete          | get  | 根据id删除用户 |
| /user/get_user_menu   | get  | 获取用户对应菜单 |
| /user/:id             | get  | 获取指定用户   |

### 角色相关
| 接口路径                    | 请求方式 | 描述     |
|-------------------------|------|--------|
| /role/add               | post | 新增角色   |
| /role/delete            | get  | 删除角色   |
| /role/update            | post | 更新角色   |
| /role/list              | get  | 获取角色列表 |
| /role/get_role_tree     | get  | 获取角色树  |
| /role/update_permission | post | 更新角色点  |
| /role/:id               | get  | 获取指定角色 |

### 菜单相关
| 接口路径                | 请求方式 | 描述     |
|---------------------|------|--------|
| /menu/add           | post | 新增菜单   |
| /menu/delete        | get  | 删除菜单   |
| /menu/update        | post | 更新菜单   |
| /menu/list          | get  | 获取菜单列表 |
| /menu/get_menu_tree | get  | 获取菜单树  |
| /menu/:id           | get  | 获取指定菜单 |

### 标签相关
| 接口路径        | 请求方式 | 描述     |
|-------------|------|--------|
| /tag/list   | get  | 获取标签列表 |
| /tag/add    | post | 添加标签   |
| /tag/:id    | get  | 获取指定标签 |
| /tag/update | post | 修改标签   |
| /tag/delete | get  | 删除标签   |

### 留言墙相关
| 接口路径          | 请求方式 | 描述      |
|---------------|------|---------|
| /board/list   | get  | 获取留言墙列表 |
| /board/add    | post | 添加留言墙   |
| /board/update | post | 修改留言墙状态 |
| /board/delete | get  | 删除留言墙   |

### 文章相关
| 接口路径                   | 请求方式 | 描述     |
|------------------------|------|--------|
| /article/list          | get  | 获取文章列表 |
| /article/add           | post | 添加文章   |
| /article/update        | post | 修改文章   |
| /article/delete        | get  | 删除文章   |
| /article/:id           | get  | 文章详情   |
| /article/update_status | get  | 修改文章状态 |
| /article/all           | get  | 获取所有文章 |

### 日记相关
| 接口路径                 | 请求方式 | 描述     |
|----------------------|------|--------|
| /diary/list          | get  | 获取日记列表 |
| /diary/add           | post | 添加日记   |
| /diary/update        | post | 修改日记   |
| /diary/delete        | get  | 删除日记   |
| /diary/:id           | get  | 日记详情   |
| /diary/update_status | get  | 修改日记状态 |

### 友链相关
| 接口路径                | 请求方式 | 描述     |
|---------------------|------|--------|
| /link/list          | get  | 获取友链列表 |
| /link/add           | post | 添加友链   |
| /link/:id           | get  | 获取指定友链 |
| /link/update        | post | 修改友链   |
| /link/delete        | get  | 删除友链   |
| /link/update_status | get  | 修改友链状态 |

### 评论相关
| 接口路径            | 请求方式 | 描述     |
|-----------------|------|--------|
| /comment/list   | get  | 获取评论列表 |
| /comment/add    | post | 添加评论   |
| /comment/delete | get  | 删除评论   |
| /comment/update | get  | 修改评论状态 |

### 网站配置相关
| 接口路径            | 请求方式 | 描述     |
|-----------------|------|--------|
| /comment        | get  | 网站配置相关 |
| /comment/add    | post | 添加网站配置 |
| /comment/update | get  | 修改网站配置 |

### 网站配置相关
| 接口路径           | 请求方式 | 描述     |
|----------------|------|--------|
| /option        | get  | 网站配置相关 |
| /option/add    | post | 添加网站配置 |
| /option/update | get  | 修改网站配置 |

### 点赞接口
| 接口路径  | 请求方式 | 描述         |
|-------|------|------------|
| /like | post | 点赞文章、评论、日记 |
