jQuery( '#tothetop' ).click( function() {
    var htmloffset = jQuery( 'html' ).offset();
    jQuery( 'html, body' ).animate( { scrollTop : htmloffset.top }, 1000 );
});