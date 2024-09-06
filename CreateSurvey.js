document.querySelector('#createServey').addEventListener('click',function () {
    let createCategoryOpenButton = document.querySelector('#createCategoryOpen');
    let createCategoryCloseButton = document.querySelector('#createCategoryClose');
    let visibleDiv = document.querySelector('.visible'); // Corregir la clase 'visibile' a 'visible'

    // Asegúrate de que los elementos existen
    if (createCategoryOpenButton && visibleDiv) {
        createCategoryOpenButton.addEventListener('click', function () {
            visibleDiv.style.display = 'block';
            console.log("Open Button Active");
        });
    }

    if (createCategoryCloseButton && visibleDiv) {
        createCategoryCloseButton.addEventListener('click', function () {
            visibleDiv.style.display = 'none';
            console.log("Close Button Active");
        });
    }
});
