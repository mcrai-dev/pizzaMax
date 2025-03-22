

function plus_cmd(id_restoc, codeproduit, indic, qte_prod) {
     var   qte_prod = Number(qte_prod);
     var new_qteprod=Number(qte_prod+1);
	   $.get("qte_produit.php", {
	    new_qteprod: new_qteprod,
		indicep: indic, 
		codeproduit: codeproduit,
		rest: id_restoc
      }, function(response){
        $('#Cart').fadeOut();
        setTimeout("finishAjax('Cart', '"+escape(response)+"')", 500);
      });

}



function finishAjax(id, response) {
  $('#'+id).html(unescape(response));
  $('#'+id).fadeIn();

}





function DeleteProduct(x)

{

	var product_index = cart_products.indexOf(x);

	

	if (product_index > -1) 

	{

		cart_products.splice(product_index, 1);

		cart_quantities[x] = 0;

	}
}


