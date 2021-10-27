import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Zijie Design',
  mode: 'site',
  // more config: https://d.umijs.org/config,
  logo:"/gongpai.png",
  favicon:"/gongpai.png",
  // publicPath:"/public/",
  styles:[
    `
.__dumi-default-layout-hero {
  padding:40px 0 !important; 
}
.__dumi-default-layout-hero button{
  display:none;
}
.__dumi-default-layout-features{
  padding-bottom:10px !important;
}
    `
  ]
});
