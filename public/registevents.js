var name_list = [
	{
		event_name: 'ep01_events',
		name: 'ep01'
	},{
		event_name: 'ep02_events',
		name: 'ep02'
	},{
		event_name: 'greeting_events',
		name: 'greeting'
	},{
		event_name: 'greeting_a_events',
		name: 'greeting_A'
	},{
		event_name: 'greeting_b_events',
		name: 'greeting_B'
	},{
		event_name: 'greeting_c_events',
		name: 'greeting_C'
	},{
		event_name: 'greeting_d_events',
		name: 'greeting_D'
	},{
		event_name: 'greeting_e_events',
		name: 'greeting_E'
	},{
		event_name: 'greeting_f_events',
		name: 'greeting_F'
	},{
		event_name: 'greeting_g_events',
		name: 'greeting_G'
	},{
		event_name: 'greeting_h_events',
		name: 'greeting_H'
	},{
		event_name: 'math_quiz_events',
		name: 'mathQuiz'
	},{
		event_name: 'one_q_one_a_events',
		name: 'oneQoneA'
	},{
		event_name: 'maedori_events',
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