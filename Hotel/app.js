// Function to toggle between sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'Active';
    setTimeout(() => selectedSection.classList.add('active'), 50);
}
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const room = document.getElementById('room').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    if (!name || !email || !room || !checkin || !checkout) {
        alert('Please fill in all fields!');
        return;
    }

    alert(`Booking confirmed for ${name} in a ${room} room from ${checkin} to ${checkout}.`);

    // Optionally, reset the form after submission
    document.getElementById('booking-form').reset();
});
