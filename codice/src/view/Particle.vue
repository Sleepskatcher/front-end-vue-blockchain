<template>
  <v-container
    id="particles-js"
    fill-height
    fluid
  />
</template>

<script>
// `import particles.js` if you'd rather bundle it up than CDN!

export default {

  name: 'ParticlesBackground',

  created() {
 
    // disable scrolling
    document.querySelector('html').style.overflow = 'hidden'
    
    // create script elem
    const elem = document.createElement('script')
    elem.src = this.$options.particleConfig.cdnUrl
    elem.async = true
    
    // lock it down!
    elem.integrity = this.$options.particleConfig.sriHash
    elem.crossOrigin = 'anonymous'
    
    document.head.appendChild(elem)
    
    // timeout after half a second if the script's slow to load or we're offline
    elem.onload = () =>
      Promise.race([
        window.particlesJS('particles-js', this.$options.particleConfig),
        new Promise(resolve => setTimeout(resolve, 500)),
      ])
        .catch(console.error.bind(console))
        .finally(() => (window.renderComplete = true)) // for Rendertron pre-rendering
  },
  beforeDestroy() {
  
    // reset Rendertron indicator... useful for testing
    window.renderComplete = false
    
    // unlock scrolling
    document.querySelector('html').style.overflow = 'auto'
 
  },
  
  particleConfig: {
 
    cdnUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js',
      
    sriHash: 'sha256-+u54FaX9J+k40eAcg5K2YzICSQjrEYBI9gju5nE3HfY=', // via bash: `cat <Path-To-Some-Script> | openssl dgst -sha256 -binary | openssl enc -base64 -A`
    
    // See docs for config here at https://github.com/VincentGarreau/particles.js/
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 7,
        },
        image: {},
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 300,
        color: '#ffffff',
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: false,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 800,
          size: 80,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 400,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  },
}
</script>

<style>

  body {
    background-color: #111111
  }

  #particles-js {
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    height: 100VH !important;
    left: 0;
    position: absolute;
    top: 0;
    width: 100VW !important;
    }

</style>