// script.js
  document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.post-title');

    titles.forEach(function(title) {
      title.addEventListener('click', function() {
        const article = title.closest('article');
        const content = article.querySelector('.post-content');

        if (content) {
          const contentHeight = content.scrollHeight; // Gets the real height of the content

          if (content.style.maxHeight) {
            content.style.maxHeight = null; // Collapse the content
          } else {
            content.style.maxHeight = contentHeight + "px"; // Expand the content
          }
        }
      });
    });
  });
