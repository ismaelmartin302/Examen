// Coge todas las flechas del documento y las mete en un array
const arrows = document.querySelectorAll('.arrow');

// Por cada flecha le añade un evento de click con una funcion
arrows.forEach(arrow => {
  arrow.addEventListener('click', function() {
    const subMenu = this.parentElement.nextElementSibling; 
    // parentElement --> Coge el elemento padre
    // nextElementSibling --> En este caso esta cogiendo el elemento siguiente del elemento padre


    subMenu.classList.toggle('show');
    // Añade la clase show si no la tiene, y si la tiene se la quita
    this.classList.toggle("rotate-arrow")
    // Añade la clase rotate-arrow al mismo elemento al que se le ha dado click
  });
});


