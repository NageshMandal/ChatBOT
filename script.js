const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

function sendMessage() {
  const userMessage = userInput.value;
  
  // Display user message
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-message user';
  userDiv.innerText = `You: ${userMessage}`;
  chatBox.appendChild(userDiv);
  
  // Process user message and generate bot response
  const botResponse = getBotResponse(userMessage);
  
  // Display bot response
  const botDiv = document.createElement('div');
  botDiv.className = 'chat-message bot';
  botDiv.innerText = `Bot: ${botResponse}`;
  chatBox.appendChild(botDiv);
  
  // Clear user input
  userInput.value = '';
}

function getBotResponse(userMessage) {
    const responses = {
        'SciAstra': 'SciAstra is a leading science and technology company based in Bhubaneswar, Odisha. We are dedicated to advancing scientific research and education.',
        'Address': 'SciAstra Education Pvt Ltd, Bhubaneswar, Odisha',
        'Courses': 'We offer a range of courses including Vikram 2.0, HOMI, ISI & CMI Course, and more. Each course is designed to provide comprehensive preparation.',
        'Selections': 'With over 1000+ selections, SciAstra has a proven track record of success in various competitive exams.',
        'Team': 'Our team consists of dedicated professionals committed to making science education accessible and engaging.',
        'Resources': 'We provide live and recorded classes, practice tests, interaction sessions, doubt classes, and more, all in one app.',
        'Contact Us': 'You can contact us at support@sciastra.com or visit us at our Bhubaneswar address.',
        'Login': 'Please visit our website to login and access your account.',
        'IIT Madras': 'IIT Madras now accepts admissions through IAT for BS in Medical Science and Engineering.',
        'NEST Exam': 'The application portal for the NEST Exam is now open. Make sure to apply before the deadline.'
    };

    const keys = Object.keys(responses);
    const matches = stringSimilarity.findBestMatch(userMessage, keys);
    const bestMatch = matches.bestMatch;

    if (bestMatch.rating >= 0.5) {
        return responses[bestMatch.target];
    } else {
        return 'I apologize, but I did not understand your question. Please try again or visit our website for more information.';
    }
}
