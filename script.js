$(document).ready(function name(params) {
    console.log("Script file is running");
    // Global variables
    var i = 1;
    var table = $('#subscriber_list');
    // Subscribe event
    // Click event on subscribe button
    $('#subscribe').click(function(){
        var name = $('#name').val();
        var number = $('#number').val();
        var unsubscribe_button = '<button class="unsubscribe '+i+'">Unsubscribe</button>';
        // Inserting into the list
        var tableData = '<tr id="'+i+'"><td>'+name+'</td><td>'+number+'</td><td>'+unsubscribe_button+'</td></tr>';
        table.append(tableData);
        i++;
    });
    // UnSubscribe event
    // Click event on unsubscribe button
    $(document).on('click','.unsubscribe',function(){
        var row_id = $(this).prop('class').split(' ')[1];
        // Removing the row from the table
        $('#'+row_id).remove();
    });
});
