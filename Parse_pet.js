const url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Проблемы с подключением: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Проблема с запросом:', error);
    });