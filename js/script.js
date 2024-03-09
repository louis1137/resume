document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.toggle').addEventListener('click', e => {
		if(document.body.classList[0] == 'dark') {
			document.body.removeAttribute('class');
		} else {
			document.body.className = 'dark';
		}
	});
});