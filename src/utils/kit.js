
export {
  formatNumber,
  formatTime,
  filterEmoj,
  isEmpty,
  debounce,
  throttle,
  applyIf,
  applyExists,
  stringFormat,
  getGUID,
  formatFileSize,
  getByteLength,
  formatDate,
  photoCompress,
  canvasDataURL,
  rotateImg,
  convertBase64UrlToBlob,
  resetImgOrientation,
  getOrientation,
  resetOrientation,
  errorToast,
}

function errorToast (err) {
  wx.showToast({
    title: err.message || err || '',
    icon: 'none',
    duration: 2000
  })
}

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

function filterEmoj (jsonData) {
  for (var key in jsonData) {
    if (typeof jsonData[key] === "string") {
      if (jsonData[key].match(/[^\u4e00-\u9fa5\{\}\[\]\/="'#<>《》【】()（）·●,.!?@\-_，。！？、……a-zA-Z\d]+/g)) {
        jsonData[key] = jsonData[key].replace(/[^\u4e00-\u9fa5\{\}\[\]\/="'#<>《》【】()（）·●,.!?@\-_，。！？、……a-zA-Z\d]+/g, "");
      }
    }
  }
  return jsonData;
}

function isEmpty (value) {
  return typeof value === 'undefined' || value == null;
}

function debounce (func, wait, immediate) {

  var timeout, args, context, timestamp, result;

  var later = function () {
    var last = +new Date() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function () {
    context = this;
    args = arguments;
    timestamp = +new Date();
    var callNow = immediate && !timeout;

    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

function throttle (func, wait, options) {
  /* options的默认值
   *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
   *  options.leading = true;
   * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
   *  options.trailing = true; 
   * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
   */
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function () {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = +new Date();
    if (!previous && options.leading === false) previous = now;
    // 计算剩余时间
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    // 当到达wait指定的时间间隔，则调用func函数
    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
    if (remaining <= 0 || remaining > wait) {
      // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      // options.trailing=true时，延时执行func函数
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

//if target object didn't  have properties of source, set it
function applyIf (target, source) {
  for (var key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

//if target object  have properties of source, set it
function applyExists (target, source) {
  for (var key in source) {
    if (target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}

function stringFormat (string, args) {
  var result = string;
  if (arguments.length > 0) {
    if (arguments.length == 2 && typeof (args) == "object") {
      for (var key in args) {
        if (args[key] != undefined) {
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    } else {
      for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg = new RegExp("({)" + (i - 1) + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
}

function getGUID () {
  var guid = '';
  for (var i = 1; i <= 32; i++) {
    var n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
      guid += '-';
  }
  return guid;
}

function formatFileSize (size, decimalPoint) {
  if (!size || size <= 0) return "0 Bytes";
  let k = 1024,
    dm = decimalPoint || 2,
    sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}


function getByteLength (text, fontSize = '1.7rem', fontFamily = 'Arial, "Microsoft Yahei"') {
  var span = document.getElementById('_textContent')
  if (span == null) {
    span = document.createElement("span");
    span.id = '_textContent';
    span.style.visibility = "hidden";
    span.style.fontSize = fontSize;
    span.style.fontFamily = fontFamily;
    span.style.display = "inline-block";
    span.style.position = "absolute";
    span.style.top = "0";
    span.style.left = "0";
    document.body.appendChild(span);
  }
  var result = {};
  result.width = 0;
  result.height = 0;

  if (typeof span.textContent != "undefined") {
    span.textContent = text;
  } else {
    span.innerText = text;
  }
  result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
  result.height = parseFloat(window.getComputedStyle(span).height) - result.height;
  return result.width + 12;
}

function formatDate (date, separator, ) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

//图片压缩
/*
       三个参数
       file：一个是文件(类型是图片格式)，
       w：一个是文件压缩的后宽度，宽度越小，字节越小
       objDiv：一个是容器或者回调函数
       photoCompress()
        */
function photoCompress (file, w, callback) {
  var fr = new FileReader();
  /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
  fr.readAsDataURL(file);
  fr.onload = function () {
    var re = this.result;
    canvasDataURL(re, w, callback)
  }
}


function canvasDataURL (path, obj, callback) {
  var img = new Image();
  img.src = path;
  img.onload = function () {
    var that = this;
    // 默认按比例压缩
    var w = that.width,
      h = that.height,
      scale = w / h;
    w = obj.width || w;
    h = obj.height || (w / scale);
    var quality = 0.7; // 默认图片质量为0.7
    //生成canvas
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    // 创建属性节点
    var anw = document.createAttribute("width");
    anw.nodeValue = w;
    var anh = document.createAttribute("height");
    anh.nodeValue = h;
    canvas.setAttributeNode(anw);
    canvas.setAttributeNode(anh);
    ctx.drawImage(that, 0, 0, w, h);
    //解决iphone 旋转
    if (obj.orientation != '' && obj.orientation != 1) {
      switch (obj.orientation) {
        case 6: //需要顺时针（向左）90度旋转
          rotateImg(img, 'left', canvas);
          break;
        case 8: //需要逆时针（向右）90度旋转
          rotateImg(img, 'right', canvas);
          break;
        case 3: //需要180度旋转
          rotateImg(img, 'right', canvas); //转两次
          rotateImg(img, 'right', canvas);
          break;
      }
    }
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }
    // quality值越小，所绘制出的图像越模糊
    var base64 = canvas.toDataURL('image/jpeg', quality);
    // 回调函数返回base64的值
    callback(base64);
  }
}


//对图片旋转处理 added by lzk
function rotateImg (img, direction, canvas) {
  //alert(img);
  //最小与最大旋转方向，图片旋转4次后回到原方向  
  var min_step = 0;
  var max_step = 3;
  //var img = document.getElementById(pid);  
  if (img == null) return;
  //img的高度和宽度不能在img元素隐藏后获取，否则会出错  
  var height = img.height;
  var width = img.width;
  //var step = img.getAttribute('step');  
  var step = 2;
  if (step == null) {
    step = min_step;
  }
  if (direction == 'right') {
    step++;
    //旋转到原位置，即超过最大值  
    step > max_step && (step = min_step);
  } else {
    step--;
    step < min_step && (step = max_step);
  }
  //img.setAttribute('step', step);  
  /*var canvas = document.getElementById('pic_' + pid);  
  if (canvas == null) {  
      img.style.display = 'none';  
      canvas = document.createElement('canvas');  
      canvas.setAttribute('id', 'pic_' + pid);  
      img.parentNode.appendChild(canvas);  
  }  */
  //旋转角度以弧度值为参数  
  var degree = step * 90 * Math.PI / 180;
  var ctx = canvas.getContext('2d');
  switch (step) {
    case 0:
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0);
      break;
    case 1:
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(degree);
      ctx.drawImage(img, 0, -height);
      break;
    case 2:
      canvas.width = width;
      canvas.height = height;
      ctx.rotate(degree);
      ctx.drawImage(img, -width, -height);
      break;
    case 3:
      canvas.width = height;
      canvas.height = width;
      ctx.rotate(degree);
      ctx.drawImage(img, -width, 0);
      break;
  }
}
/**
 * 将以base64的图片url数据转换为Blob
 * @param urlData
 *            用url方式表示的base64图片数据
 */
function convertBase64UrlToBlob (urlData) {
  var arr = urlData.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * 将图片旋转到正确的角度
 * （解决移动端上传的图片角度不正确的问题）
 * （旋转后返回的是base64，可以参照本目录下的convertBase64ToBlob.js，将base64还原为file input读取得到的文件对象）
 * @param {Dom Object} $fileInput 文件上传输入框
 * @param {Function} callback 旋转完成后的回调函数
 */
function resetImgOrientation (fileObj, callback) {
  getOrientation(fileObj, function (orientation) {
    var reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = function (evt) {
      var base64 = evt.target.result;
      // 将图片旋转到正确的角度
      resetOrientation(base64, orientation, function (resultBase64) {
        callback(resultBase64);
      });
    }
  });
}

// 获取图片旋转的角度
function getOrientation (file, callback) {
  var reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = function (e) {
    var view = new DataView(e.target.result);
    if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
    var length = view.byteLength,
      offset = 2;
    while (offset < length) {
      var marker = view.getUint16(offset, false);
      offset += 2;
      if (marker == 0xFFE1) {
        if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
        var little = view.getUint16(offset += 6, false) == 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;
        for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
            return callback(view.getUint16(offset + (i * 12) + 8, little));
      } else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
    }
    return callback(-1);
  };
}
// 将图片旋转到正确的角度
function resetOrientation (srcBase64, srcOrientation, callback) {
  var img = new Image();
  img.onload = function () {
    var width = img.width,
      height = img.height,
      canvas = document.createElement('canvas'),
      ctx = canvas.getContext("2d");
    // set proper canvas dimensions before transform & export
    if ([5, 6, 7, 8].indexOf(srcOrientation) > -1) {
      canvas.width = height;
      canvas.height = width;
    } else {
      canvas.width = width;
      canvas.height = height;
    }
    // transform context before drawing image
    switch (srcOrientation) {
      case 2:
        ctx.transform(-1, 0, 0, 1, width, 0);
        break;
      case 3:
        ctx.transform(-1, 0, 0, -1, width, height);
        break;
      case 4:
        ctx.transform(1, 0, 0, -1, 0, height);
        break;
      case 5:
        ctx.transform(0, 1, 1, 0, 0, 0);
        break;
      case 6:
        ctx.transform(0, 1, -1, 0, height, 0);
        break;
      case 7:
        ctx.transform(0, -1, -1, 0, height, width);
        break;
      case 8:
        ctx.transform(0, -1, 1, 0, 0, width);
        break;
      default:
        ctx.transform(1, 0, 0, 1, 0, 0);
    }
    // draw image
    ctx.drawImage(img, 0, 0);
    // export base64
    callback(canvas.toDataURL('image/jpeg'));
  };
  img.src = srcBase64;
}
