function eliminar(id) {
	swal({
  title: "¿Estás seguro de Eliminar?",
  text: "Una vez borrado no se podrá recuperar el archivo!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
		$.ajax({
			url:"/eliminar/"+id,
			success: function(res) {
				console.log(res);
			},
		});
    swal("Archivo Borrado!", {
      icon: "success",
    }).then((ok)=>{
		if(ok){
			location.href="/listar";
		}
});
  } else {
    swal("Archivo a Salvo!");
  }
});	
}
