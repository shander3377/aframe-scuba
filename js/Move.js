AFRAME.registerComponent("move", {
	schema: {
		beingPressed: { type: "boolean", default: false },
	},
	init: function () {
		var pos = this.el.getAttribute("position");
		var rot = this.el.getAttribute("rotation");
		window.addEventListener("keydown", (e) => {
			if (e.key === "ArrowUp") {
				this.data.beingPressed = true;

				if (pos.z > -10) {
					pos.z -= 0.05;
				}
				if (rot.x > -14.5) {
					rot.x -= 0.5;
				}
				this.el.setAttribute("position", pos);
				this.el.setAttribute("rotation", rot);
			}

			if (e.key === "ArrowDown") {
				this.data.beingPressed = true;

				if (pos.z < 30) {
					pos.z += 0.05;
				}
				if (rot.x < 14.5) {
					rot.x += 0.5;
				}
				this.el.setAttribute("position", pos);
				this.el.setAttribute("rotation", rot);
			}

			if (e.key === "ArrowRight") {
				this.data.beingPressed = true;

				if (pos.x < 30) {
					pos.x += 0.05;
				}
				if (rot.z > -14.5) {
					rot.z -= 0.5;
				}
				this.el.setAttribute("position", pos);
				this.el.setAttribute("rotation", rot);
			}

			if (e.key === "ArrowLeft") {
				this.data.beingPressed = true;

				if (pos.x > -30) {
					pos.x -= 0.05;
				}
				if (rot.z < 14.5) {
					rot.z += 0.5;
				}
				this.el.setAttribute("position", pos);
				this.el.setAttribute("rotation", rot);
			}
		});
		window.addEventListener("keyup", (e) => {
			this.data.beingPressed = false;
		});
	},
	// tick: function () {
	// 	var beingPressed = this.data.beingPressed;
	// 	if (!beingPressed) {
	// 		var rot = this.el.getAttribute("rotation");

	// 		if (rot.x !== 0 && rot.x > 0) {
	// 			for (let i = rot.x; i > 0; i -= 0.003) {
	// 				rot.x = i;
	// 				this.el.setAttribute("rotation", rot);
	// 				console.log(rot.x);
	// 			}
	//         }

	//         if (rot.x !== 0 && rot.x < 0) {
	// 			for (let i = rot.x; i < 0; i += 0.003) {
	// 				rot.x = i;
	// 				this.el.setAttribute("rotation", rot);
	// 				console.log(rot.x);
	// 			}
	// 		}

	//         if (rot.x !== 0 && rot.x < 0) {
	// 			for (let i = rot.x; i < 0; i += 0.003) {
	// 				rot.x = i;
	// 				this.el.setAttribute("rotation", rot);
	// 				console.log(rot.x);
	// 			}
	//         }

	//         if (rot.z !== 0 && rot.z > 0) {
	// 			for (let i = rot.z; i > 0; i -= 0.003) {
	// 				rot.z = i;
	// 				this.el.setAttribute("rotation", rot);
	// 				console.log(rot.z);
	// 			}
	//         }

	//         if (rot.z !== 0 && rot.z < 0) {
	// 			for (let i = rot.z; i < 0; i += 0.003) {
	// 				rot.z = i;
	// 				this.el.setAttribute("rotation", rot);
	// 				console.log(rot.z);
	// 			}
	// 		}
	// 	}
	// },
});
