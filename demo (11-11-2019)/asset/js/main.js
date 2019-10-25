window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
    let vrView = new VRView.Player('#vrview', {
        image: 'https://api.codetabs.com/v1/proxy?quest=https://refund-form-id-images.s3-ap-southeast-1.amazonaws.com/zalora-office/test_033.jpg',
        is_stereo: false,
        width: "500",
        height: "500"
    });
}