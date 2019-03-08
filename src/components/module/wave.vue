<template>
  <div id="keyframe" />
</template>
<script>
  import THREE from '../../assets/js/three.min.js'
  let SEPARATION = 100
  let AMOUNTX = 100
  let AMOUNTY = 70
  let container
  let camera, scene, renderer
  let particles = ''
  let particle = ''
  let count = 0
  let mouseX = 85
  let mouseY = -300
  let windowHalfX = window.innerWidth / 2
  let windowHalfY = window.innerHeight / 2
  export default {
    data () {
      return {
      }
    },
    methods: {
      init () {
        container = document.createElement('div')
        document.getElementById('keyframe').appendChild(container)
        camera = new THREE.THREE.PerspectiveCamera(
          120,
          window.innerWidth / window.innerHeight,
          1,
          3000
        )
        container.style.cssText = 'position:fixed;bottom:0;left:0;cursor:pointer;opacity:0.9;'
        camera.position.z = 1000
        scene = new THREE.THREE.Scene()
        particles = new Array()
        let PI2 = Math.PI * 2
        let material = new THREE.THREE.ParticleCanvasMaterial({
          color: 0xe1e1e1,
          program: function (context) {
            context.beginPath()
            context.arc(0, 0, 0.6, 0, PI2, true)
            context.fill()
          }
        })
        let i = 0
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++] = new THREE.THREE.Particle(material)
            particle.position.x = ix * SEPARATION - AMOUNTX * SEPARATION / 2
            particle.position.z = iy * SEPARATION - AMOUNTY * SEPARATION / 2
            scene.add(particle)
          }
        }
        renderer = new THREE.THREE.CanvasRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        container.appendChild(renderer.domElement)
        document.addEventListener("mousemove", this.onDocumentMouseMove, false);
        document.addEventListener('touchstart', this.onDocumentTouchStart, false)
        document.addEventListener('touchmove', this.onDocumentTouchMove, false)
        window.addEventListener('resize', this.onWindowResize, false)
      },
      onWindowResize () {
        windowHalfX = window.innerWidth / 2
        windowHalfY = window.innerHeight / 2
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      },
      onDocumentMouseMove (event) {
        mouseX = event.clientX - windowHalfX
        mouseY = event.clientY - windowHalfY
      },
      onDocumentTouchStart (event) {
        if (event.touches.length === 1) {
          event.preventDefault()
          mouseX = event.touches[0].pageX - windowHalfX
          mouseY = event.touches[0].pageY - windowHalfY
        }
      },
      onDocumentTouchMove (event) {
        if (event.touches.length === 1) {
          event.preventDefault()
          mouseX = event.touches[0].pageX - windowHalfX
          mouseY = event.touches[0].pageY - windowHalfY
        }
      },
      animate () {
        requestAnimationFrame(this.animate)
        this.render()
      },
      render () {
        camera.position.x += (mouseX - camera.position.x) * 0.05
        camera.position.y += (-mouseY - camera.position.y) * 0.05
        // camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position)
        let i = 0
        for (let ix = 0; ix < AMOUNTX; ix++) {
          for (let iy = 0; iy < AMOUNTY; iy++) {
            particle = particles[i++]
            particle.position.y =
              Math.sin((ix + count) * 0.3) * 50 +
              Math.sin((iy + count) * 0.5) * 50
            particle.scale.x = particle.scale.y =
              (Math.sin((ix + count) * 0.3) + 1) * 2 +
              (Math.sin((iy + count) * 0.5) + 1) * 2
          }
        }

        renderer.render(scene, camera)

        count += 0.2
      }
    },
    mounted () {
      // this.getImgCode();
      this.init()
      this.animate()
    }
  }
</script>
<style scoped>
  #keyframe {
    width: 100%;
    height:100%;
    display: flex;
    filter: progid: DXImageTransform.Microsoft.gradient(gradientType=1, startColorstr='#003073', endColorstr='#029797');
    text-align: center;
    margin: 0px;
    overflow: hidden;
    background-color: #193c6d;
    background-image: url(//img.alicdn.com/tps/TB1d.u8MXXXXXXuXFXXXXXXXXXX-1900-790.jpg);
    background-size: 100%;
    background-image: -webkit-gradient(linear, 0 0, 100% 100%, color-stop(0, #003073), color-stop(100%, #029797));
    background-image: -webkit-linear-gradient(135deg, #003073, #029797);
    background-image: -moz-linear-gradient(45deg, #003073, #029797);
    background-image: -ms-linear-gradient(45deg, #003073 0, #029797 100%);
    background-image: -o-linear-gradient(45deg, #003073, #029797);
    background-image: linear-gradient(135deg, #003073, #029797);
  }
</style>
