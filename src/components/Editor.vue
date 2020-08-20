<template>
  <quill-editor @change="updateBody($event)" />
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
  data: function () {
    return {
      text: "",
      title: "",
      id: "",
    };
  },
  methods: {
    updateBody: function ({ text }) {
      this.text = text;
      console.log(this.text);
      this.update();
    },
    update: debounce(function () {
      console.log("Updating database");
    }, 1500),
  },
};
</script>

<style scoped>
.root {
  height: calc(100% - 35px);
  position: absolute;
  left: 0;
  width: 300px;
  box-shadow: 0px 0px 2px #000;
}

.titleInput {
  height: 50px;
  border: none;
  padding: 5px;
  font-size: 24px;
  width: calc(100% - 300px);
  background-color: #29487d;
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