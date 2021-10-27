import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Zijie Design',
  mode: 'site',
  // more config: https://d.umijs.org/config,
  logo:"/gongpai.png",
  favicon:"/gongpai.png",
  themeConfig: {
    carrier: 'dumi', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      // [{ mode: 'vw', options: [100, 750] }],
      // 禁用高清方案
      // rules: [],
      // // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  },
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
.__dumi-default-search{
  margin-right:10px;
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