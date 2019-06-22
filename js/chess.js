$(function () {
    let box = $('.box');
    let flag = true;
    let black={}, white={};
    for (let i=0;i<15;i++){
        for (let j=0;j<15;j++){
            $('<div>').addClass('chess').attr('id',i+'_'+j).appendTo(box);
        }
    }
    // $('<div>').addClass('window').appendTo(box);

    box.on('click','.chess',function () {
        if ($(this).hasClass('black')||$(this).hasClass('white')) {
            return ;
        }
        flag = !flag;
        let coords = $(this).attr('id');
        if (!flag) {
            black[coords] = true;
            $(this).addClass('black');
        } else {
            white[coords] = true;
            $(this).addClass('white');
        }
        if(isSuccess(black, coords)) {
            alert('恭喜黑棋赢了');
            box.off('click');
            return ;
        }
        if(isSuccess(white, coords)) {
            alert('恭喜白棋赢了');
            box.off('click');
            return ;
        }

    })


    function isSuccess(obj,coords) {
        let sp=1, cz=1, zx=1, yx=1;
        let [x, y]=coords.split('_');
        let i=x*1, j=y*1;

        while (obj[i+'_'+(++j)]){
            sp++;
        }
        j=y*1;
        while (obj[i+'_'+(--j)]){
            sp++;
        }
        j=y*1;


        while (obj[++i+'_'+j]){
            cz++;
        }
        i=x*1;
        while (obj[--i+'_'+j]){
            cz++;
        }
        i=x*1;


        while (obj[++i+'_'+(++j)]){
            zx++;
        }
        i=x*1;
        j=y*1;
        while (obj[--i+'_'+(--j)]){
            zx++;
        }
        i=x*1;
        j=y*1;

        while (obj[++i+'_'+(--j)]){
            yx++;
        }
        i=x*1;
        j=y*1;
        while (obj[--i+'_'+(++j)]){
            yx++;
        }

        if(sp==5 ||cz==5 ||zx==5||yx==5){
            return true;
        }
    }


})