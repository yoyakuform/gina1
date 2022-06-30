$(function () {
    // カレンダー
    $(function () {
        $('input[name="date01"]').datepicker({
            dateFormat: 'yy/mm/dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '-0:+1',
        });
    });
    
    // カレンダー
    $(function () {
        $('input[name="date02"]').datepicker({
            dateFormat: 'yy/mm/dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '-0:+1',
        });
    });
    
    // カレンダー
    $(function () {
        $('input[name="date03"]').datepicker({
            dateFormat: 'yy/mm/dd',
            changeMonth: true,
            changeYear: true,
            yearRange: '-0:+1',
        });
    });

    // 送信
    $('form').submit(function () {
        var date01 = $('input[name="date01"]').val();
        var time01 = $('input[name="time01"]').val();
        var date02 = $('input[name="date02"]').val();
        var time02 = $('input[name="time02"]').val();
        var date03 = $('input[name="date03"]').val();
        var time03 = $('input[name="time03"]').val();
        var text = $('input[name="text"]').val();

        var msg = `●第一希望日：${date01}\n∟希望時間：${time01}\n●第二希望日：${date02}\n∟希望時間：${time02}\n●第三希望日：${date03}\n∟希望時間：${time03}\n●備考：${text}`;
        sendText(msg);

        return false;
    });
});
