(function(){
var acc = document.getElementsByClassName('accordion');
var list = document.getElementsByClassName('item');
var content = document.getElementsByClassName('resource');
var i;

var toggleNavbar = function () {
  var navbar = document.getElementById('tocify-wrapper');
  var page_wrapper = document.getElementById('page-wrapper');
  if (navbar.style.display === 'block' ) {
    navbar.style.display = 'none';
    page_wrapper.style.left = 0;
    return;
  }
  navbar.style.display = 'block';
};

var scrollTo = function (id) {
  var element = document.getElementById(id);
  if (element !== null) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
};

var registerAccordionClick = function() {
  var activeAcc = document.querySelector('.accordion.active');
  var activeItem = document.querySelector('.item.active');

  if (activeAcc && activeAcc !== this) {
    activeAcc.classList.toggle('active');
    activeAcc.nextElementSibling.classList.toggle('show');
  }

  if (activeItem) {
    activeItem.classList.toggle('active');
  }
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('show');
  if (screen.width < 930) {
    toggleNavbar();
  }
  var id = this.children[0].attributes['data-uniq-element'].value;
  scrollTo(id);
};

var registerItemClick = function () {
  var activeItem = document.querySelector('.item.active');
  if (activeItem && activeItem !== this) {
    activeItem.classList.toggle('active');
  }
  if (activeItem === this) {
    return;
  }
  this.classList.toggle('active');
  if (screen.width < 930) {
    toggleNavbar();
  }
  var id = this.children[0].attributes['data-uniq-element'].value;
  scrollTo(id);
};

var elementInViewport = function(element) {
  var top = element.offsetTop;
  var height = element.offsetHeight;
  var boundingOffsetTop = element.getBoundingClientRect().top;

  while(element.offsetParent) {
    element = element.offsetParent;
    top += element.offsetTop;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    (top + height) > window.pageYOffset &&
    boundingOffsetTop < 50
  );
}

function makeAsActive(acc, item) {
  acc.classList.add('active');
  acc.nextElementSibling.classList.add('show');
  if (item) {
    item.classList.add('active');
  }
}

function makeAsInactive(acc, item) {
  acc.classList.remove('active');
  acc.nextElementSibling.classList.remove('show');
  if (item) {
    item.classList.remove('active');
  }
}

var registerTocifyScroll = function () {
  for (i = 0; i < content.length; i++) {
    if(elementInViewport(content[i])) {
      var visibleElement = document.querySelector(`[data-uniq-element=${content[i].nextElementSibling.id}]`).parentElement;
      var activeItem = document.querySelector('.item.active');
      var activeAcc = document.querySelector('.accordion.active');

      if (activeItem !== visibleElement && visibleElement !== activeAcc) {
        if (activeAcc) {
          makeAsInactive(activeAcc, activeItem);
        }
        var isHeader = visibleElement.classList.contains('accordion');
        var acc = isHeader ? visibleElement : visibleElement.parentElement.previousElementSibling;
        var item = isHeader ? null : visibleElement
        makeAsActive(acc, item);
        break;
      }
    }
  }
};

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', registerAccordionClick, false);
}

for (i = 0; i < list.length; i++) {
  list[i].addEventListener('click', registerItemClick, false);
}

window.addEventListener('scroll', registerTocifyScroll, false);

})();
