var xhr = new XMLHttpRequest();
var doc;


//monitorar o estado do objeto
//readyState 4 - request completada e response completada
//status 200 - request bem sucedida
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr);
        console.log(xhr.responseText);

        //converter o texto em JSON
        doc = xhr.response;
        console.log(JSON.parse(doc));
    }
};

//abrir a conexão com método GET
// Passar a URL do JsonPlaceHolder e se a requisição é assíncrona
xhr.open("GET", "http://jsonplaceholder.typicode.com/posts/1", true);

//enviar a requisição
xhr.send();