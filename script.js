// Open Envelope Animation
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const invitationContent = document.getElementById('invitationContent');
    const envelopeSection = document.querySelector('.envelope-section');
    
    // Add opening animation
    envelope.style.animation = 'slideUp 0.8s ease forwards';
    
    // Add animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-100%);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Show invitation after envelope closes
    setTimeout(() => {
        envelopeSection.style.display = 'none';
        invitationContent.style.display = 'block';
    }, 800);
}

// RSVP Form Submission
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const attending = document.querySelector('input[name="attending"]:checked').value;
        const guests = document.getElementById('guests').value;
        const song = document.getElementById('song').value;
        
        // Validation
        if (!name.trim()) {
            alert('Please enter your name');
            return;
        }
        
        if (!guests) {
            alert('Please select number of guests');
            return;
        }
        
        // Prepare message
        let message = `RSVP Received!\n\nName: ${name}\nAttending: ${attending === 'yes' ? 'Yes, can\'t wait!' : 'Sadly, can\'t make it'}\nGuests: ${guests}`;
        if (song) {
            message += `\nKaraoke Song: ${song}`;
        }
        
        // For demo purposes, show confirmation
        alert(message + '\n\nThank you for RSVPing! See you on October 24th!');
        
        // Clear form
        rsvpForm.reset();
        
        // In a real application, you would send this data to a backend
        // Example:
        // fetch('/api/rsvp', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, attending, guests, song })
        // })
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlight
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Auto-open envelope on home page load
window.addEventListener('load', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '' || currentPage === 'index.html') {
        // Envelope is shown by default, user clicks to open
    }
});