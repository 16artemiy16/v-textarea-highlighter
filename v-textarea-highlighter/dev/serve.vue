<script lang="ts">
import Vue from 'vue';
import VTextareaHighlighter from '@/v-textarea-highlighter.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    VTextareaHighlighter
  }
});
</script>

<template>
  <div id="app">
    <v-textarea-highlighter>
      <textarea style="background: lightblue">Hello! Welcome here!</textarea>
    </v-textarea-highlighter>
  </div>
</template>
