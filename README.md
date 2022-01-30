# renfeiDesign

此项目基于 [Ant Design Pro](https://pro.ant.design) 构建。

此项目是为后端项目 [renfeid](https://github.com/renfei/renfeid) 服务的前端项目。

由于我不是前端专业人员，不打算深入研究自己写，所以选择了 Ant Design Pro 脚手架，快速开发中后台前端项目。

## 注意事项

### 代理

对路径 `/_/api/**` 已经设置代理访问，需要修改请修改 `config/proxy.ts` 文件。

### 菜单部分

菜单部分已经对接后端接口，所以可能不是项目中的路由地址，如果要恢复原始项目中的路由地址，请注释掉`src/app.tsx` 中这部分代码：

```typescript jsx
menu: {
  request: async ()=>{
    const menuTree = await getMenuTreeByUser();
    return menuTree.data;
  },
},
```

## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

## Provided Scripts

Ant Design Pro provides some useful script to help you quick start and build with web project, code style check and test.

Scripts provided in `package.json`. It's safe to modify or add additional script:

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

### Check code style

```bash
npm run lint
```

You can also use script to auto fix some lint error:

```bash
npm run lint:fix
```

### Test code

```bash
npm test
```

## More

You can view full document on our [official website](https://pro.ant.design). And welcome any feedback in our [github](https://github.com/ant-design/ant-design-pro).
