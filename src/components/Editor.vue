<template>
  <div class="editorContainer">
    <i class="fas fa-edit editIcon"></i>
    <input
      class="titleInput"
      placeholder="Note title..."
      type="text"
      :value="title"
      @change="updateTitle($event)"
    />
    <quill-editor :value="text" @change="updateBody($event)" />
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import debounce from "../helpers";
import { quillEditor } from "vue-quill-editor";

export default {
  name: "Editor",
  components: {
    quillEditor,
  },
  props: {
    selectedNote: Object,
  },
  data: function () {
    return {
      text: "",
      title: "",
      id: "",
    };
  },
  watch: {
    selectedNote: function () {
      if (this.selectedNote.id !== this.id) {
        this.text = this.selectedNote.body;
        this.title = this.selectedNote.title;
        this.id = this.selectedNote.id;
      }
    },
  },
  methods: {
    updateBody: function ({ html }) {
      this.text = html;
      this.debounce();
    },
    update: function () {
      this.$emit("noteUpdate", {
        id: this.id,
        title: this.title,
        body: this.text,
      });
    },
    updateTitle: function () {
      this.title = event.target.value;
      this.debounce();
    },
  },
  created: function () {
    this.debounce = debounce(this.update, 1500);
  },
  mounted: function () {
    this.text = this.selectedNote.body;
    this.title = this.selectedNote.title;
    this.id = this.selectedNote.id;
  },
};
</script>

<style scoped>
.editorContainer {
  margin-left: 300px;
  height: 100%;
}

.titleInput {
  height: 50px;
  border: none;
  padding: 5px;
  font-size: 24px;
  width: 100%;
  background-color: #44297d;
  color: #fff;
  padding-left: 50px;
}

.editIcon {
  position: absolute;
  left: 310px;
  top: 12px;
  color: #fff;
  width: 10px;
  height: 10px;
}

.quill-editor {
  height: 100%;
}
</style>