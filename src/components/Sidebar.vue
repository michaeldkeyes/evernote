<template>
  <div class="sidebarContainer">
    <button
      class="newNoteBtn"
      color="#29487d"
      @click="newNoteBtnClick"
    >{{addingNote ? 'Cancel' : 'New Note'}}</button>
    <div v-if="addingNote">
      <input class="newNoteInput" placeholder="Enter Note Title" type="text" v-model="title" />
      <button class="newNoteSubmitBtn" width="100%" @click="newNote">Submit Note</button>
    </div>
    <div v-for="(note, index) in notes" :key="index">
      <SidebarItem
        :note="note"
        :index="index"
        :selectedNoteIndex="selectedNoteIndex"
        @selectNote="selectNote"
        @deleteNote="deleteNote"
      />
      <hr />
    </div>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";

export default {
  name: "Sidebar",
  components: {
    SidebarItem,
  },
  props: {
    notes: Array,
    selectedNoteIndex: Number,
  },
  data: function () {
    return {
      addingNote: false,
      title: null,
      dense: true,
    };
  },
  methods: {
    newNoteBtnClick: function () {
      this.title = null;
      this.addingNote = !this.addingNote;
    },
    newNote: function () {
      this.$emit("newNote", this.title);
      this.title = null;
      this.addingNote = false;
    },
    selectNote: function (note) {
      this.$emit("selectNote", { note: note.note, index: note.index });
    },
    deleteNote: function (note) {
      this.$emit("deleteNote", note);
    },
  },
};
</script>

<style scoped>
.sidebarContainer {
  background-color: #fff;
  height: 100%;
  width: 300px;
  box-shadow: 0px 0px 2px #000;
  position: absolute;
  left: 0;
}

.newNoteBtn {
  color: #fff;
  background-color: #29487d;
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #000;
  border-radius: 0px;
}

.newNoteBtn:hover {
  background-color: #88a2ce;
}

.newNoteInput {
  width: 100%;
  margin: 0px;
  height: 35px;
  outline: none;
  border: none;
  padding-left: 5px;
}

.newNoteInput:focus {
  outline: 2px solid rgba(81, 203, 238, 1);
}

.newNoteSubmitBtn {
  border-radius: 0px;
  background-color: #297d5e;
  color: #fff;
  height: 35px;
  width: 100%;
}
</style>