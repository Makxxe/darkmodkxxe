// Функция для загрузки CSS с GitHub и применения его как инлайн-стилей
function applyInlineCSS(cssText) {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(cssText));
    document.head.appendChild(style);
}

// Загружаем CSS с GitHub
const cssUrl = 'https://raw.githubusercontent.com/Makxxe/darkmodkxxe/main/mod.css?time=' + new Date().getTime();

fetch(cssUrl)
    .then(response => {
        if (response.ok) {
            return response.text();  // Возвращаем текст CSS
        } else {
            console.error('Не удалось загрузить CSS: ', response.status);
        }
    })
    .then(cssText => {
        if (cssText) {
            applyInlineCSS(cssText);  // Применяем стили инлайн
        }
    })
    .catch(error => console.error('Ошибка при загрузке CSS: ', error));
