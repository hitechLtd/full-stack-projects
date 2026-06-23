

    async function generateOTP() {
            const email = document.getElementById('email').value;
            console.log(email);
            const response = await fetch('http://localhost:3000/generate-otp', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({email})
            });
            const result = await response.text();
            document.getElementById('response').innerText = result;
            
        }
        async function verifyOTP() {
            const email = document.getElementById('email').value;
            const boxes = document.querySelectorAll('.boxes');
            const otp = 
                  boxes[0].value +
                  boxes[1].value +
                  boxes[2].value +
                  boxes[3].value;

                
            const response = await fetch('http://localhost:3000/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({email, otp})
            });
            const result = await response.text();
            document.getElementById('response').innerText = result;
        }