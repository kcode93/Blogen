ClassicEditor.create(document.querySelector('#editor')).catch((error) => {
	console.error(error);
});

//get current full year
$('#year').text(new Date().getFullYear());

