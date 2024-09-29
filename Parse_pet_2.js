var url = 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available';
fetch(url)
    .then(function (response) {
    if (!response.ok) {
        throw new Error('Проблемы с подключением: ' + response.statusText);
    }
    return response.json();
})
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error('Проблема с запросом::', error);
});
