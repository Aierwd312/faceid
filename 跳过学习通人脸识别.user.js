// ==UserScript==
// @name         跳过学习通人脸识别
// @description  跳过学习通人脸识别
// @version      v2.2.0
// @license      Aierwd312
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @match        https://mooc1-1.chaoxing.com/mooc-ans/visit/stucoursemiddle?courseid=*
// @match        https://mooc2-ans.chaoxing.com/mycourse/studentcourse?courseid=*
// @match        https://mooc1.chaoxing.com/mycourse/studentstudy?chapterId=*
// @run-at       document-end
// ==/UserScript==
// 获取当前网址链接
var currentURL = window.location.href;
// 关键词匹配
var keyword = "https://mooc1-1.chaoxing.com/mooc-ans/visit/stucoursemiddle?";
if (currentURL.includes(keyword)) {
  // 替换关键词
  var newURL = currentURL.replace(keyword, "https://mooc2-ans.chaoxing.com/mycourse/studentcourse?");
  // 刷新网页
  window.location.href = newURL;
}
// 点击第一章1.1
var element = document.querySelector('.catalog_sbar');
// 判断元素的文本内容是否为 "1.1"
if (element.textContent == "1.1") {
  // 触发点击事件
  element.click();
}