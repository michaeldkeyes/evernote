<template>
  <div class="d-flex" :class="[index === selectedNoteIndex ? 'selected' : '']" @click="selectNote">
    <div class="sidebarItem">
      <div>{{note.title}}</div>
      <div class="secondaryText">{{subNote}} ...</div>
    </div>
    <i class="fas fa-trash-alt deleteIcon" @click="deleteNote(note)"></i>
  </div>
</template>

<script>
import { removeHTMLTags } from "../helpers";

export default {
  name: "SidebarItem",
  props: {
    index: Number,
    note: Object,
    selectedNoteIndex: Number,
  },
  computed: {
    subNote: function () {
      return removeHTMLTags(this.note.body.substring(0, 30));
    },
  },
  methods: {
    deleteNote: function (note) {
      if (window.confirm(`Are you sure you want to delete: ${note.title}`)) {
        this.$emit("deleteNote", note);
      }
    },
    selectNote: function () {
      this.$emit("selectNote", { note: this.note, index: this.index });
    },
  },
};
</script>

<style scoped>
.d-flex {
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
}

.selected {
  background-color: #4f6996;
  color: #fff;
}

.sidebarItem {
  margin: 10px 0;
  text-align: center;
}

.secondaryText {
  color: #808080;
  font-size: 14px;
}

.listItem {
  cursor: pointer;
}

.textSection {
  max-width: 85%;
}

.deleteIcon {
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: calc(50% - 15px);
}

.deleteIcon:hover {
  color: red;
}
</style>