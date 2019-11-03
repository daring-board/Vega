var name_list = [
	{
		event_name: 'maedorievents',
		name: 'maedori'
	}
]

name_list.forEach(obj => {
	AFRAME.registerComponent(obj.event_name, {
		init: function () {
			var marker = this.el;
			var name = obj.name;
			localStorage.setItem(name, 0);
			marker.addEventListener('markerFound', function() {
				var markerId = marker.id;
				console.log('markerFound', markerId);
				// TODO: Add your own code here to react to the marker being found.
				this.markerVisible = true;
				v = document.querySelector('#'+name);
				var count = localStorage.getItem(name);
				localStorage.setItem(name, ++count);
				console.log(count);
			});
			marker.addEventListener('markerLost', function() {
				var markerId = marker.id;
				console.log('markerLost', markerId);
				// TODO: Add your own code here to react to the marker being lost.
				this.markerVisible = false;
				v.pause();
				v = null;
			});
		}
	});
});