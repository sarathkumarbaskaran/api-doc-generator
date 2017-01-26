(function(global) {
    var toggle_visibility;

    global.toggle_visibility=toggle_visibility;

    function toggle_visibility(parent,classnames) {
        var escaped_classname = classnames.replace(".", "\\.");
        var elements = document.getElementsByClassName(escaped_classname);
        for(var i=0; i < elements.length; i++) {
          elements[i].classList.toggle('show');
        }
        if (parent.innerText === 'Show Attributes') {
          parent.innerText = 'Hide Attributes';
        } else {
          parent.innerText = 'Show Attributes';
        }
    }

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

    var navbar_toggler = document.getElementById('navbar-toggle');
    navbar_toggler.addEventListener('click', toggleNavbar, false);
 })(window);
