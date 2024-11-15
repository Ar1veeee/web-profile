const text = "Hello I'm AL ";
        let index = 0;
        const speed = 100; 

        function typeText() {
            if (index < text.length) {
                document.getElementById("typing-text").innerHTML += text.charAt(index);
                index++;
                setTimeout(typeText, speed); 
            }
        }
        window.onload = typeText;
