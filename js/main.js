(function(window, document) {
	var i=0;
	var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam error suscipit quia mollitia optio consequuntur officiis aperiam tenetur distinctio nisi quam iste deserunt eaque, explicabo reiciendis quibusdam est fuga temporibus.';
	var speed = 40;

	function write() {
		if(i < txt.length) {
			document.getElementById('show').innerHTML += txt.charAt(i);
			i++;
			setTimeout(write, speed);
		}
	}

	document.getElementById('write').addEventListener('click', write);
})(window, document);