var THREE = require('three');
module.exports = {
    what: function() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Text --- 
        var loader = new THREE.FontLoader();

        loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
            var geometry = new THREE.TextGeometry('Chasen Chamberlain', {
                font: font,
                size: 50,
                height: 5, 
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5
            });
        });
        // --- 
        var geometry = new THREE.BoxGeometry(1, 4, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 10;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.03;
            cube.rotation.y += 0.03;

            renderer.render(scene, camera);
        };

        animate();
    },

    text: function(){
        var loader = new THREE.FontLoader();

        loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {
            var geometry = new THREE.TextGeometry('Chasen Chamberlain', {
                font: font,
                size: 50,
                height: 5, 
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 10,
                bevelSize: 8,
                bevelOffset: 0,
                bevelSegments: 5
            });
        });
    }
}