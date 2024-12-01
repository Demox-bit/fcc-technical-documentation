
    document.addEventListener('DOMContentLoaded', function() {

        const span = document.getElementById('toggle-hidden');

        

        span.addEventListener('click', function() {

            const hiddenSection = document.getElementById('Hidden_place');

            hiddenSection.style.display = hiddenSection.style.display === 'none' ? 'block' : 'none';

            hiddenSection.scrollIntoView({ behavior: 'smooth' });

        });

    });
