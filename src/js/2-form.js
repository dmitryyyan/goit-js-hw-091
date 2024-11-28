const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('feedback-form');
const textarea = form.querySelector('textarea');

form.addEventListener('input', () => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.value.trim();

    const data = {
        email: userEmail,
        message:userMessage,
    }
    saveToLs(STORAGE_KEY, data);
})
form.addEventListener('submit', e => {
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return alert('All form fields be dilled in');
    }
      const data = loadFromLs(STORAGE_KEY) || {};
    console.log(data);
    
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
}
)
function loadFromLs(key = 'empty') {
    const data = localStorage.getItem(key);

    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}

function saveToLs(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function restoreData() {
    const data = loadFromLs(STORAGE_KEY) || {};

    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}

restoreData();