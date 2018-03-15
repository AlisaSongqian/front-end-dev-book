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
