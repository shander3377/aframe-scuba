AFRAME.registerComponent("fish", {
	init: function () {
		for (let i = 0; i < 10; i++) {
			var id = `fish${i}`;

			var pos = {
				x: Math.random() * 100 + -50,
				y: 24,
				z: Math.random() * 30 + -20,
			};

			this.makeFish(id, pos);
		}
	},

	makeFish: function (id, pos) {
		var el = document.querySelector("#fishes");
		var fishEl = document.createElement("a-entity");
		fishEl.setAttribute("id", id);
		fishEl.setAttribute("position", pos);
        fishEl.setAttribute("static-body", { shape: "sphere", sphereRadius: 2 });
		fishEl.setAttribute("geometry", { primitive: "sphere", radius: 2 });
        
        el.appendChild(fishEl);
	},
});
