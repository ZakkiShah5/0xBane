const input = document.getElementById('input');
const terminalContent = document.querySelector('.terminal-content');

// Function to add prompt to terminal
function addPrompt(command) {
  const guestLine = document.createElement('div');
  guestLine.innerHTML = `<div class="prompt">guest<span class="highlight">@0xBane</span>:~$ ${command} </div>`;
  terminalContent.appendChild(guestLine);
}

// Handle 'Enter' key for commands
input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    input.value = ''; // Clear input after command execution

    if (command === 'clear') {
      terminalContent.innerHTML = ''; // Clear all content in the terminal
    } else if (command === 'about') {
      addPrompt(command);
      const lines = [
        `Hi, my name is James Ross.`,
        `I'm currently a cyber security major`,
        `I love programming, reverse engineering, and analyzing security systems.`,
        `If you would like more information, visit my social media!`,
        `Type:`,
        `'facebook'`,
        `'instagram'`,
        `'github'`,
        `'linkedin'`
      ];
      lines.forEach(line => {
        const newLine = document.createElement('span');
        newLine.textContent = line;
        newLine.style.display = 'block';
        terminalContent.appendChild(newLine);
      });
    } else if (command === 'ls') {
      addPrompt(command);
      const lines = [
        `Practical Malware Analysis Labs List`,
        `Type 'cat lab1-1' 'cat lab1-2' 'cat lab1-3' 'cat lab1-4'`,
        `'cat lab3-1' 'cat lab3-2' 'cat lab3-3' 'cat lab3-4'`,
        `'cat lab5-1'`
      ];
      lines.forEach(line => {
        const newLine = document.createElement('span');
        newLine.textContent = line;
        newLine.style.display = 'block';
        terminalContent.appendChild(newLine);
      });
    } else if (command === 'help') {
      addPrompt(command);
      const helpLines = [
        `The following commands are enabled:`,
        `about banner bing cat crackmes date discord`,
        `duckduckgo echo email facebook github google help`,
        `htb instagram introre linkedin ls quote readme`,
        `reddit repo resume whoami writeups`
      ];
      helpLines.forEach(line => {
        const newLine = document.createElement('span');
        newLine.textContent = line;
        newLine.style.display = 'block';
        terminalContent.appendChild(newLine);
      });

      const instructions = [
        `[tab]: trigger completion.`,
        `[ctrl+l]/clear: clear terminal.`
      ];
      instructions.forEach(inst => {
        const newLine = document.createElement('span');
        newLine.textContent = inst;
        newLine.style.display = 'block';
        terminalContent.appendChild(newLine);
      });
    } else if (command === 'facebook') {
        addPrompt(command);
        const newLine = document.createElement('span')
        newLine.textContent = `Opening Facebook...`
        terminalContent.appendChild(newLine)
        window.open('https://www.facebook.com', '_blank'); 
      } else if (command === 'instagram') {
        addPrompt(command);
        const newLine = document.createElement('span')
        newLine.textContent = `Opening Instagram...`
        terminalContent.appendChild(newLine)
        window.open('https://www.instagram.com', '_blank'); 
      } else if (command === 'github') {
        addPrompt(command);
        const newLine = document.createElement('span')
        newLine.textContent = `Opening Github...`
        terminalContent.appendChild(newLine)
        window.open('https://www.github.com', '_blank'); 
      } else if (command === 'linkedin') {
        addPrompt(command);
        const newLine = document.createElement('span')
        newLine.textContent = `Opening LinkedIn...`
        terminalContent.appendChild(newLine)
        window.open('https://www.linkedin.com', '_blank'); 
      } 
    else {
      addPrompt(command);
      const errorLine = document.createElement('div');
      errorLine.textContent = `shell: command not found: ${command}. Try 'help' to get started.`;
      terminalContent.appendChild(errorLine);
    }
  }
});

// Handle 'Ctrl + L' to clear terminal
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.key === 'l') {
    e.preventDefault(); // Prevent browser behavior
    terminalContent.innerHTML = ''; // Clear terminal
    input.focus(); // Ensure input remains focused
  }
});

// Keep input focused on page load
input.focus();
