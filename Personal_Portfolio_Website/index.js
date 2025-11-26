
document.getElementById('downloadBtn').addEventListener('click', function () {
    const a = document.createElement('a');
    a.href = 'resources/cv/lesedi_manganyi_curriculum_vitae.pdf'; 
    a.download = 'Lesedi_Manganyi_CV.pdf'; 
    a.target = '_blank'
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


document.getElementById('emailItem').addEventListener('click', function () {
    const email = 'lesedimanganyi2006@gmail.com';
    const emailText = document.getElementById('emailText');

    navigator.clipboard.writeText(email).then(() => {
        emailText.textContent = 'Copied!';

        setTimeout(() => {
            emailText.textContent = email;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
});


document.getElementById('emailItem2').addEventListener('click', function () {
    const email = 'lesedimanganyi2006@gmail.com';
    const emailText = document.getElementById('emailText2');

    navigator.clipboard.writeText(email).then(() => {
        emailText.textContent = 'Copied!';

        setTimeout(() => {
            emailText.textContent = email;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy email:', err);
    });
});


function updateJohannesburgTime() {
    const options = {
        timeZone: 'Africa/Johannesburg',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };

    const formatter = new Intl.DateTimeFormat('en-US', options);
    const timeString = formatter.format(new Date());

    document.getElementById('jhbTime').textContent = timeString;
}


updateJohannesburgTime();
setInterval(updateJohannesburgTime, 1000);


function handlePhoneClick(displayText, dialNumber) {
    const tempInput = document.createElement("textarea");
    tempInput.value = displayText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);


    console.log("Copied to clipboard: " + displayText);

    
    window.location.href = "tel:" + dialNumber;
}


const contactForm = document.getElementById('contactForm');
const formButton = document.getElementById('formButton');
const toastNotification = document.getElementById('toastNotification');
let failureCount = 0;


function showToast(message, type = 'success') {
    const toastIcon = toastNotification.querySelector('.toast-icon');
    const toastMessage = toastNotification.querySelector('.toast-message');

    
    if (type === 'success') {
        toastIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
        toastNotification.classList.remove('error');
        toastNotification.classList.add('success');
    } else {
        toastIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        toastNotification.classList.remove('success');
        toastNotification.classList.add('error');
    }

   
    toastMessage.textContent = message;

   
    toastNotification.classList.add('show');

    
    setTimeout(() => {
        toastNotification.classList.remove('show');
    }, 4000);
}


function resetButton() {
    formButton.textContent = 'Send Message';
    formButton.classList.remove('success', 'error');
    formButton.disabled = false;
}


contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    formButton.textContent = 'Sending...';
    formButton.disabled = true;

    
    const formData = new FormData(contactForm);

    try {
        
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
           
            failureCount = 0; 

            
            formButton.textContent = 'Successful';
            formButton.classList.add('success');

            
            showToast("Thank you for your submission. I'll reach out to you soon.", 'success');

            
            setTimeout(() => {
                contactForm.reset();
                resetButton();
            }, 2000);

        } else {
            throw new Error('Form submission failed');
        }

    } catch (error) {
        
        failureCount++;

        
        formButton.textContent = 'Failure';
        formButton.classList.add('error');

        
        if (failureCount <= 2) {
            showToast('Oh No! There seems to have been an issue. Try again.', 'error');
        } else {
            showToast('Apologies, the system seems to be down at the moment. Please try again later.', 'error');
            failureCount = 0; 
        }

        
        setTimeout(() => {
            resetButton();
        }, 3000);
    }
});

