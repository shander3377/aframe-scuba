AFRAME.registerComponent("coin", {
	init: function () {
		for (let i = 0; i < 10; i++) {
			var id = `coin${i}`;

			var pos = {
				x: Math.random() * 100 + -50,
				y: 24,
				z: Math.random() * 30 + -20,
			};

			this.makecoin(id, pos);
		}
	},

    makecoin: function (id, pos) {
		var el = document.querySelector("#coins");
		var coinEl = document.createElement("a-entity");
		coinEl.setAttribute("id", id);
		coinEl.setAttribute("position", pos);
		coinEl.setAttribute("static-body", { shape: "sphere", sphereRadius: 2 });
		coinEl.setAttribute("material", "color", "#ff9100");
        coinEl.setAttribute("geometry", { primitive: "circle", radius: 1 });
        coinEl.setAttribute("game-play", {id: id})
        
		coinEl.setAttribute("animation", {
			property: "rotation",
			to: "0 360 0",
			loop: "true",
			dur: 1000,
		});
		el.appendChild(coinEl);
	},
});
