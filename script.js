		// Script pour gérer l'ouverture/fermeture du menu accessible
			document
				.getElementById("menuServices-toggle")
				.addEventListener("click", function () {
					let menu = document.getElementById("menuServices");
					let expanded = this.getAttribute("aria-expanded") === "true" || false;

					this.setAttribute("aria-expanded", !expanded);
					menu.hidden = expanded;
				});
				