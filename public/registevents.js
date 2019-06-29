AFRAME.registerComponent('registerevents', {
	init: function () {
		var marker = this.el;
		var name = 'flower';
		localStorage.setItem(name, 0);
		marker.addEventListener('markerFound', function() {
			var markerId = marker.id;
			console.log('markerFound', markerId);
			// TODO: Add your own code here to react to the marker being found.
			this.markerVisible = true;
			v = document.querySelector('#'+name);
			localStorage.setItem(name, localStorage.getItem(name)++);
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

AFRAME.registerComponent('hiroevents', {
	init: function () {
		var marker = this.el;
		console.log(marker.id);
		var name = 'dish';
		localStorage.setItem(name, 0);
		marker.addEventListener('markerFound', function() {
			var markerId = marker.id;
			console.log('markerFound', markerId);
			// TODO: Add your own code here to react to the marker being found.
			this.markerVisible = true;
			v = document.querySelector('#'+name);
			localStorage.setItem(name, localStorage.getItem(name)++);
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