var $form=$('#formulario'),
	$titulo=$('#titulo'),
	$url=$('#url'),
	$button=$('#mostrar-form'),
	$list=$('#contenido'),
	$post=$('.item').first();

function mostarFormulario()
{
	$form.slideToggle();	
	return false;
}

function agregarPost(e)
{
	var url =$url.val(),
	    titulo=$titulo.val(),
	    $clone=$post.clone();

	    $clone.find('.titulo_item a').text(titulo).attr('href',url);
	    $clone.hide();
	    $list.prepend($clone);
	    $clone.fadeIn();

	return false;
}


	//Eventos

	$button.on('click',mostarFormulario);
	$form.on('submit',agregarPost);