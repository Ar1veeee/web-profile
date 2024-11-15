
        function checkVisibility() {
            const sections = document.querySelectorAll('.scroll-animation');
            
            sections.forEach(function(section) {
                const rect = section.getBoundingClientRect();                                
                if (rect.top >= 0 && rect.top <= window.innerHeight) {
                    section.classList.add('visible');  
                } else {
                    section.classList.remove('visible');  
                }
            });
        }
        window.addEventListener('scroll', checkVisibility);
        checkVisibility();