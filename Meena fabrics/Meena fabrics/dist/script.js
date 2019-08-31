function language() {  
var lang = $('select').val();
  if(lang == 'es'){
	$("*:lang(es)").show();
	$("*:lang(en)").hide();
  } else {
	$("*:lang(en)").show();
	$("*:lang(es)").hide();
	}
};