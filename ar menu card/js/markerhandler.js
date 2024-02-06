AFRAME.registerComponent("markerhandler", {
    init: async function(){
        console.log("hi")

        this.el.addEventListener("markerFound", () => {
            console.log("Marker found")
            this.handleMarkerFound()
        })

        this.el.addEventListener("markerLost", () => {
            console.log("Marker lost")
            this.handleMarkerLost()
        })
    },

    handleMarkerFound: function () {
        // Changing the button div visibility
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex";

        var ratingbutton = document.getElementById("rating-button");
        var orderbutton = document.getElementById("order-button");

        ratingbutton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "rate dish",
                text: "work in progress",
            })
        })

        orderbutton.addEventListener("click", () => {
            swal({
                icon: "warning",
                title: "thanks for the order",
                text: "your order will be served soon",
            })
        })
    },

    handleMarkerLost: function () {
        var buttondiv = document.getElementById("button-div");
        buttondiv.style.display = "flex";
    },
})