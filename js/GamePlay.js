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
				this.updateScore_Target();
			}
			if (id.includes("fish")) {
				this.gameOver();
			}
		});
    },
    
    gameOver: function () {
		console.log("works");
			var diverEl = document.querySelector("#scuba_diver");
			var gameOverEL = document.querySelector("#gameover");
			gameOverEL.setAttribute("visible", true);
			diverEl.setAttribute("dynamic-body", { mass: 1 });
    },

    updateScore_Target: function () {
		var scoreEl = document.querySelector("#score");
		var targetEl = document.querySelector("#target");
		var score = parseInt(scoreEl.getAttribute("text").value);
		var target = parseInt(targetEl.getAttribute("text").value);
		console.log(score);
		score += 50;
		target--;
		scoreEl.setAttribute("text", { value: score });
		targetEl.setAttribute("text", { value: target });
    },

	update: function () {
		this.isCollider(this.data.id);
	},

	
    
	
    
	init: function () {
		var time = 120;
		var timerEl = document.querySelector("#timer");
		this.startTimer(time, timerEl);
	},

	startTimer: function (d, t) {
		var mins;
		var secs;
		var timer = setInterval(()=>{
			if (d >= 0) {
				mins = parseInt(d / 60);
				secs = parseInt(d % 60);
				if (mins < 10) {
					mins = "0" + mins;
				}
				if (secs < 10) {
					secs = "0" + secs;
				}
				t.setAttribute("text", {
					value: mins + ":" + secs,
				});
				d -= 1;
			} else {
				clearInterval();
				this.gameOver();
			}
		}, 1000);
	

		
	},
});
