let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

let indexCateModule=require('./datas/indexCateModule.json');
let index=require('./datas/index.json');
let cateNavDatas=require('./datas/cateNavDatas.json');
let indexCacateListsteModule=require('./datas/cateLists.json');
router.get('/indexCateModule', (ctx, next) => {
  ctx.body = indexCateModule
});
router.get('/index', (ctx, next) => {
  ctx.body = index
});
router.get('/cateNavDatas', (ctx, next) => {
  ctx.body = cateNavDatas
});
router.get('/indexCacateListsteModule', (ctx, next) => {
  ctx.body = indexCacateListsteModule
});
app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
