/*
 * @Description: 
 * @Version: 1.0
 * @Autor: hehaishen
 * @LastEditors: hehaishen
 * @Date: 2021-12-07 10:47:30
 * @LastEditTime: 2021-12-07 10:59:33
 */
<script type="text/javascript">
    // 动态添加script标签 es5 语法
    function creatScriptTag(src) {
        if(src && src.trim() !== '') {
          console.warn('无效的链接，或src为空');
        } else {
            var scriptTag =  document.createElement("script");
            scriptTag.setAttribute("type",src);
            document.body.appendChild(scriptTag)
        }
    }
    // 页面加载时运行
    window.onload = function(){
        creatScriptTag("http://ajax.googleapis.com/ajax/services/lsearch/web?v=1.0&q=apple&callback=getResultData")
    }
    // 定义数据返回回调函数
    function getResultData(data){
        console.log(data.responseData)
    }
</script>