AFRAME.registerComponent('registerevents', {
	init: function () {
		var marker = this.el;
		marker.addEventListener('markerFound', function() {
			var markerId = marker.id;
			console.log('markerFound', markerId);
			// TODO: Add your own code here to react to the marker being found.
			this.markerVisible = true;
			v = document.querySelector('#flower');
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
		marker.addEventListener('markerFound', function() {
			var markerId = marker.id;
			console.log('markerFound', markerId);
			// TODO: Add your own code here to react to the marker being found.
			this.markerVisible = true;
			v = document.querySelector('#dish');
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