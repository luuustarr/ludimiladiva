const messageInput = document.getElementById('messageInput'); 
const sendButton = document.getElementById('sendButton'); 
const chatMessages = document.getElementById('chatMessages'); 
 
sendButton.addEventListener('click', sendMessage); 
messageInput.addEventListener('keypress', function(event) { 
    if (event.key === 'Enter') { 
        sendMessage(); 
    } 
}); 
 
function sendMessage() { 
    const messageText = messageInput.value.trim(); 
    if (messageText !== '') { 
        const newMessageDiv = document.createElement('div'); 
        newMessageDiv.classList.add('message', 'sent'); 
        newMessageDiv.textContent = messageText; 
        chatMessages.appendChild(newMessageDiv); 
         
        // Limpa o input 
        messageInput.value = ''; 
         
        // Rola para o final 
        chatMessages.scrollTop = chatMessages.scrollHeight; 
         
        // Simula uma resposta do outro contato 
        setTimeout(() => { 
            const receivedMessageDiv = document.createElement('div'); 
            receivedMessageDiv.classList.add('message', 'received'); 
            receivedMessageDiv.textContent = 'Minha internet acabou =( Depois a gente se fala'; 
            chatMessages.appendChild(receivedMessageDiv); 
            chatMessages.scrollTop = chatMessages.scrollHeight; 
        }, 1000); // Responde 1 segundo depois 
    } 
} 