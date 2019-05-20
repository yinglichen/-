 
(function (designWidth, maxWidth) {
    var doc = document
    var win = window
    var docEl = doc.documentElement
    var remStyle = document.createElement('style')
    var tid
  
    function refreshRem () {
      var width = docEl.getBoundingClientRect().width
      maxWidth = maxWidth || 540
      width > maxWidth && (width = maxWidth)
      // var rem = width * 100 / designWidth
      var rem = width * 13 / designWidth
      remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'
    }
    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(remStyle)
    } else {
      var wrap = doc.createElement('div')
      wrap.appendChild(remStyle)
      doc.write(wrap.innerHTML)
      wrap = null
    }
    refreshRem()
    win.addEventListener('resize', function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    }, false)
    win.addEventListener('pageshow', function (e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    }, false)
    if (doc.readyState === 'complete') {
      doc.body.style.fontSize = '13px'
    } else {
      doc.addEventListener('DOMContentLoaded', function (e) {
        doc.body.style.fontSize = '13px'
      }, false)
    }
  })(window.screen.width, window.screen.width)
  