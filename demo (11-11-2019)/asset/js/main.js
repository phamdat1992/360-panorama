window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
    let vrView = new VRView.Player('#vrview', {
        image: './asset/img/test_033.jpg',
        is_stereo: true,
        width: "500",
        height: "500"
    });
}