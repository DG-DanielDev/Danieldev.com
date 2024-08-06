document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var message = encodeURIComponent(document.getElementById('message').value);
    var phoneNumber = '5521974796849';
    var whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappURL, '_blank');
});