<script lang="ts">
import Vue from 'vue';
import VTextareaHighlighter from '@/v-textarea-highlighter.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VTextareaHighlighter
  },
  data() {
    return {
      rules: [
        ['limited', 'red', 50],
        ['capital', 'yellow'],
      ],
    };
  }
});
</script>

<template>
  <div id="app">
    <v-textarea-highlighter :rules="rules">
      <textarea>Hello! Welcome here!</textarea>
    </v-textarea-highlighter>
  </div>
</template>
