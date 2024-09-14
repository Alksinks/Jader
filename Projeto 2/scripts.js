document.addEventListener('DOMContentLoaded', () => {
    const googleLoginButton = document.getElementById('googleLogin');
    const sendButton = document.getElementById('send');
    const logoutButton = document.getElementById('logout');
    
    if (googleLoginButton) {
        googleLoginButton.addEventListener('click', () => {
            // Simulate Google login
            localStorage.setItem('loggedIn', 'true');
            window.location.href = 'send-message.html';
        });
    }
    
    if (sendButton) {
        sendButton.addEventListener('click', () => {
            const sender = document.getElementById('sender').value;
            const recipient = document.getElementById('recipient').value;
            const message = document.getElementById('message').value;
            if (sender && recipient && message) {
                let messages = JSON.parse(localStorage.getItem('messages')) || [];
                messages.push({ sender, recipient, message });
                localStorage.setItem('messages', JSON.stringify(messages));
                window.location.href = 'mural.html';
            } else {
                alert('Por favor, preencha todos os campos!');
            }
        });
    }
    
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });
    }
    
    if (window.location.pathname.includes('mural.html')) {
        const messageList = document.getElementById('messageList');
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.forEach(msg => {
            const div = document.createElement('div');
            div.textContent = De: ${msg.sender} - Para: ${msg.recipient} - Mensagem: ${msg.message};
            messageList.appendChild(div);
        });
    }
});