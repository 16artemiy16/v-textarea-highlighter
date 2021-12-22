<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'VTextareaHighlighter',
  data() {
    return {
      text: '',
      backdropStyle: {},
    };
  },
  computed: {
    lightedHtml() {
      return this.$data.text
          .replace(/\n$/g, '\n\n')
          .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
    },
  },
  methods: {
    getElTextarea(): Element {
      return this.$slots.default?.[0]?.elm as Element;
    },
    getElBackdrop(): Element {
      return this.$refs.backdrop as Element;
    },
    alignBackdropStyle() {
      const { padding, font, letterSpacing, border } = window.getComputedStyle(this.getElTextarea());
      this.backdropStyle = { padding, font, letterSpacing, border };
    },
    handleScroll() {
      this.getElBackdrop().scrollTop = this.getElTextarea().scrollTop;
      this.getElBackdrop().scrollLeft = this.getElTextarea().scrollLeft;
    },
    handleInput(e: any) {
      this.$data.text = e.target.value;
    }
  },
  mounted() {
    this.alignBackdropStyle();
    this.$data.text = (this.getElTextarea() as any).value;
    this.getElTextarea().addEventListener('scroll', this.handleScroll);
    this.getElTextarea().addEventListener('input', this.handleInput);
  },
  beforeDestroy() {
    this.getElTextarea().removeEventListener('scroll', this.handleScroll);
    this.getElTextarea().removeEventListener('input', this.handleInput);
  }
});
</script>

<template>
  <div class="container">
    <div class="backdrop" ref="backdrop" :style="backdropStyle">
      <div class="highlights" ref="highlights" v-html="lightedHtml"></div>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.container, .backdrop, textarea {
  width: 460px;
  height: 180px;
}

.container {
  display: block;
  margin: 0 auto;
}

.backdrop {
  position: absolute;
  z-index: 1;
  overflow: auto;
  pointer-events: none;
  transition: transform 1s;
}

.highlights {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
}

textarea {
  display: block;
  position: absolute;
  z-index: 2;
  margin: 0;
  border-radius: 0;
  background-color: transparent;
  overflow: auto;
  resize: none;
}

mark {
  border-radius: 3px;
  color: transparent;
  background-color: #b1d5e5;
}


</style>
