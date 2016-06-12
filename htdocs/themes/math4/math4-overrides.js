/* This is the override file for math4.js.  If you copy 
 * math4-overrides.js.dist to math4-overrides.js you can edit the
 * values contained in this file and they will override the css values 
 * normally used for math4.  This includes anything you can accomplish with
 * jQuery and provides a lot of flexibility.  
 *
 * If you upgrade your machine this file will not be overwritten, however, the 
 * math4.js and math4-overrides.js.dist file may change.  If this happens it
 * may cause problems with your theme until your reconcile the changes with 
 * your modifactions here.  (Similar to how localOverrides.conf works.) 
 */


$(function () {

/* This changes the WeBWorK Logo on the top left to a new image */
    $('.webwork_logo a img').attr('src','/webwork2_files/images/akademix-logo-small.png').css('height','1px');

/* This changes the MAA Logo on the top to a new image (ex HIB_logo.png) */
    $('.maa_logo a img').attr('src','/webwork2_files/images/akademix-logo-hvit.png').css('height','50px');


/* Change the welcome message */
/*    $('#site-links a:contains("Welcome to WeBWorK!")').html('Velkommen til AkademiXs WeBWorK-server');*/
});
