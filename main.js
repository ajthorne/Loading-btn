var input = $('input');

  input.on('click', function(evt) {
    // $(this).defaultValue = 'Loading...';
    //use the function val() to target defaultValue
    $(this).val('Loading...');
    console.log(evt.target.defaultValue);
    console.log(evt);

    //sets val() back to Submit after 4 seconds
    setInterval(function() {
      $(input).val('Submit');
    }, 4000);
});
