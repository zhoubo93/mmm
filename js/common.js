// 复用的解析地址栏参数的方法
function getSearch(k) {
  // 获取地址栏参数
  var str = location.search; // ?key=%E9%B9%8F&age=18&desc=%E5%B8%85

  // 转码成中文
  str = decodeURI(str);   // "?key=鹏&age=18&desc=帅"

  // slice(start, end);
  // 从start开始, 截取到end结束, 包含start, 不包含end
  // 如果不传 end, 表示截取到最后
  // 去掉 ?
  str = str.slice(1);     // "key=鹏&age=18&desc=帅"

  // 根据 & 分割
  var arr = str.split("&");   // ["key=鹏", "age=18", "desc=帅"]

  var obj = {};
  // 遍历数组
  arr.forEach(function (v, i) { // v => "age=18"   i 下标
    var key = v.split("=")[0];  // age
    var value = v.split("=")[1]; // 18
    // 中括号 和 . 语法的区别在于, 中括号可以解析里面的变量
    obj[key] = value;
  })

  return obj[k];
}

// 点击返回按钮，动画返回顶部
$(".backTop").click(function () {
  $("html,body").stop().animate({ scrollTop: 0 }, 1000);

})

//发送第一个ajax时添加进度条
$(document).ajaxStart(function () {
  // 开启进度条
  NProgress.start();
});

// 最后一个ajax发送完成后,隔一秒后关闭进度条
$(document).ajaxStop(function () {
  // 设置延迟器延时执行
  setTimeout(function () {
    NProgress.done();
  }, 500)
});
