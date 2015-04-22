function send(row, col){
    var urlTweet = 'http://localhost:8080/analizarTablero/' + row + '/' + col;

    $.ajax({ url: urlTweet, type: 'GET', dataType: "json", 
    success: function(resultData) {
        document.getElementById("txt-resultado").innerHTML = resultData;
    },
    error: function(xhr, status, error){
        console.log(xhr);
        console.log(status);
        console.log(error);
        console.log('Error send request');
    }
  });
}

$(document).ready(function(){
    $('#btn-send').click(function (event) {
        var row = $("#row").val();
        var col = $("#col").val();
        send(row, col)
    });
});