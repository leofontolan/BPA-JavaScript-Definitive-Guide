'use strict';

function variaveisNaoDeclaradas() {
    var result = a + b;
    console.log(result);

    var a = 1;
    var b = 2;

}

variaveisNaoDeclaradas();