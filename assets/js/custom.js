/* 
  Add your custom JavaScript here.
  This file will be loaded after the theme's JavaScript.
*/

// Add RTL support for Arabic language
document.addEventListener('DOMContentLoaded', function() {
  if (document.documentElement.lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
  }
}); 