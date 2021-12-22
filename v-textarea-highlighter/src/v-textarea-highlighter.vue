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
    alignBackdropStyle() {
      const textarea = this.$refs.textarea as Element;
      const { padding, font, letterSpacing, border } = window.getComputedStyle(textarea);
      this.backdropStyle = { padding, font, letterSpacing, border };
    },
    handleScroll() {
      const area = this.$refs.textarea as HTMLElement;
      const backdrop = this.$refs.backdrop as HTMLElement;
      const scrollTop = area.scrollTop;
      const scrollLeft = area.scrollLeft;

      (backdrop as any).scrollTop = scrollTop;
      (backdrop as any).scrollLeft = scrollLeft;
    },
  },
  mounted() {
    this.alignBackdropStyle();
  },
});
</script>

<template>
  <div class="container">
    <div class="backdrop" ref="backdrop" :style="backdropStyle">
      <div class="highlights" ref="highlights" v-html="lightedHtml"></div>
    </div>
    <textarea ref="textarea" v-model="text" @scroll="handleScroll" />
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
