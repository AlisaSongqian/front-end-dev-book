/**
1.获取所有的缩略图。
2.监控每个缩略图的点击事件。
3.如果发生了点击，根据缩略图的信息更新大图。
<1>从缩略图的数据属性中获取图像的url；
<2>从缩略图的数据属性中获取标题文本；
<3>将图像和标题设置到大图上。
**/
var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);
  detailTitle.textContent = titleText;
};

function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
};

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
};

function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
};

function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  })
};

function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);  //将返回的节点列表转换成一个数组
  return thumbnailArray;
};

function hideDetails(){
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
};

function showDetails(){
  'use strict';
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
};

function addKeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup',function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if( event.keyCode === ESC_KEY ){
      hideDetails();
    };
  })
};

function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
};

initializeEvents();
