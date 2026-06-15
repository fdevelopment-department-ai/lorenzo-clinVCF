document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        
        // Optionnel : Fermer les autres éléments ouverts
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
                item.querySelector('.faq-icon').textContent = '+';
            }
        });

        // Basculer l'état de l'élément cliqué
        currentItem.classList.toggle('active');
        
        const icon = button.querySelector('.faq-icon');
        if (currentItem.classList.contains('active')) {
            icon.textContent = '×';
        } else {
            icon.textContent = '+';
        }
    });
});