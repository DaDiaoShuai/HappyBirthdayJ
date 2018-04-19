// 返回按钮
document.getElementById('back').addEventListener('click', function() {
    location.href = location.href.replace(/(.*)\/(static\/article)\/(\d+)\.html/, "$1" + "/index.html")
})