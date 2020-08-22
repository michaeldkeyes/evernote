<template>
  <div id="app">
    <Sidebar
      :notes="notes"
      :selectedNoteIndex="selectedNoteIndex"
      @deleteNote="deleteNote"
      @selectNote="selectNote"
      @newNote="newNote"
    />
    <div style="width: 100%;">
      <Editor
        v-if="selectedNote != null"
        :selectedNote="selectedNote"
        :selectedNoteIndex="selectedNoteIndex"
        :notes="notes"
        @noteUpdate="noteUpdate"
      />
    </div>
  </div>
</template>

<script>
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";

const firebase = require("firebase");

export default {
  name: "App",

  components: {
    Editor,
    Sidebar,
  },

  data: function () {
    return {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    };
  },
  methods: {
    deleteNote: function (note) {
      const noteIndex = this.notes.indexOf(note);
      if (this.selectedNoteIndex === noteIndex) {
        this.selectedNoteIndex = null;
        this.selectedNote = null;
      } else {
        this.notes.length > 1
          ? this.selectNote({
              note: this.notes[this.selectedNoteIndex - 1],
              index: this.selectedNoteIndex - 1,
            })
          : (this.selectedNoteIndex = null),
          (this.selectedNote = null);
      }

      firebase.firestore().collection("notes").doc(note.id).delete();
    },
    selectNote: function (note) {
      this.selectedNoteIndex = note.index;
      this.selectedNote = note.note;
    },
    newNote: async function (title) {
      const note = {
        title: title,
        body: "",
      };

      const newFromDB = await firebase.firestore().collection("notes").add({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      const newID = newFromDB.id;
      this.notes = [...this.notes, note];
      const newNoteIndex = this.notes.indexOf(
        this.notes.filter((note) => note.id === newID)[0]
      );
      this.selectedNote = this.notes[newNoteIndex];
      this.selectedNoteIndex = newNoteIndex;
    },
    noteUpdate: function (note) {
      firebase.firestore().collection("notes").doc(note.id).update({
        title: note.title,
        body: note.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    },
  },
  mounted: function () {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        this.notes = notes;
      });
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  display: flex;
  height: 100vh;
}

.MuiListIten-root.Mui-selected {
  background-color: #d4d8e8;
}
</style>