<template>
  <div class="rotate-container">
    <img :src="window_pic" alt="a window"
         :class="{'rorateWindow-left': opened && isLeft, 'rorateWindow-right': opened && (!isLeft)}"
         class="window" ref="window">
  </div>
</template>

<script>
// import window_p from '@/assets/window.png';
import window_pic from '@/assets/window.png';
import conf from '@/wiki_config'

export default {
  name: "window",
  data() {
    return {
      isLeft: this.window_side.toLowerCase() === 'left',
      window_pic: conf.isDev ? window_pic : 'https://2021.igem.org/wiki/images/0/0f/T--BNUZ-China--window.9449fa31.png',
    }
  },
  mounted() {
    this.$refs.window.addEventListener('animationstart', this.emitOpenWindowEnd);

  },
  methods: {
    emitOpenWindowEnd: function (event) {
      event.stopPropagation();
      this.$emit('window-open-end' ,'')
    }
  },
  props: {
    opened: {
      type: Boolean,
      default: function () {
        return false
      }
    },
    /**
     * 必须是left或right
     */
    window_side: {
      type: String,
      validator: function (value) {
        return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
      }
    }
  }
}
</script>

<style scoped>
.rorateWindow-left {
  animation: rotateWindowLeft 3s;
  transform-origin: left;
}

@keyframes rotateWindowLeft {
  0% {

  }
  100% {
    transform: rotateY(80deg);
  }
}

.rorateWindow-right {
  animation: rotateWindowRight 3s;
  transform-origin: right;
}

@keyframes rotateWindowRight {
  0% {

  }
  100% {
    transform: rotateY(-80deg);
  }
}

.window {
  animation-fill-mode: forwards;
  height: 80vh;
}

.rotate-container {
  perspective: 2100px;
  z-index: 800;
}
</style>