AFRAME.registerComponent("game-play", {
	schema: {
		id: { type: "string", default: "fish1" },
	},
    isCollider: function (id) {
        const el = document.querySelector(`#${id}`);
        el.addEventListener("collide", (e) => {
            
			if (id.includes("coin")) {
				el.setAttribute("visible", false);
				console.log("colliosion with coin");
			}
			if (id.includes("fish")) {
				el.setAttribute("visible", false);
				console.log("colliosion with fish");
			}
		});
	},
	update: function () {
		this.isCollider(this.data.id);
	},
});
