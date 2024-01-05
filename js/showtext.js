
    document.addEventListener("DOMContentLoaded", function () {
        var blogItems = document.querySelectorAll('.blog-item');

        blogItems.forEach(function (item) {
            item.addEventListener('click', function () {
                // Toggle the 'active' class for the clicked item
                this.classList.toggle('active');
            });
        });
    });



