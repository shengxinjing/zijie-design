import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Zijie Design',
  mode: 'site',
  // // more config: https://d.umijs.org/config,
  logo:"/gongpai.png",
  favicon:"/gongpai.png",
  menus:{
    // '/guide':[{title:'彩蛋',path:"test/info.md"}]
  },
  // navs: {
  //   'en-US': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/shengxinjing/zijie-design' },
  //   ],
  //   'zh-CN': [
  //     null,
  //     { title: 'GitHub', path: 'https://github.com/shengxinjing/zijie-design' },
  //   ],
  // },
  scripts:[
`
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2695c2b4efe74b00a59f038590429c05";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

`

  ],
  // publicPath:"/public/",
  styles:[
    `

.__dumi-default-layout-hero button{
  display:none;
}
.__dumi-default-navbar-tool{
  margin-left:10px !important; 
}
.__dumi-default-search + span{
  margin-right:-20px;
}
.__dumi-default-search + span{
  display:none !important; 
}
.__dumi-default-layout-features{
  padding-bottom:10px !important;
}
.__dumi-default-layout-features>dl dt{
  font-weight:bold !important;
}
    `
  ]
});

// .__dumi-default-layout-hero {
//   padding:40px 0 !important; 
// }