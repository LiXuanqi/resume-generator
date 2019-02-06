const scrollAnimation = () => {
  var changedScrollY = 0;
  var left = document.querySelector('section.left');
  var rightHeight = document.querySelector('section.right').offsetHeight + 40;
  window.onscroll = function() {
      var scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      if (scrollY >= 20 && changedScrollY < 20) {
          changedScrollY = 20;
          document.getElementById('left-to-fix').className += ' fixed';
      } else if (scrollY < 20 && changedScrollY >= 20) {
          changedScrollY = 0;
          document.getElementById('left-to-fix').className = document.getElementById('left-to-fix').className.replace(' fixed', '');
      } else if (scrollY + window.innerHeight > rightHeight) {
          left.style.bottom = scrollY + window.innerHeight - rightHeight + 'px';
      }
  }
  ;
  var imgList = document.querySelectorAll('img[data-src]');
  Array.prototype.slice.call(imgList).forEach(function(item) {
      var dataSrc = item.getAttribute('data-src');
      var fullSrc = 'https://static.rexskz.info/resume/img/' + dataSrc + '.png';
      var previewSrc = 'https://static.rexskz.info/resume/img/' + dataSrc + '_preview.png';
      item.src = previewSrc;
      item.onclick = function() {
          window.open(fullSrc);
      }
      ;
  })
}

export {
  scrollAnimation
}