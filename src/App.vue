<template>
  <v-app>
    <Sidebar />
    <Editor />
  </v-app>
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

  data: () => ({
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null,
  }),
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
        console.log(notes);
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
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.quill {
  height: 100%;
  width: calc(100% - 300px);
  float: left;
}

.ql-container {
  height: calc(100% - 42px);
  overflow-y: scroll;
}

.ql-editor {
  cursor: text;
}

.MuiListIten-root.Mui-selected {
  background-color: #d4d8e8;
}

.no-note-selected {
  font-size: 48px;
  position: absolute;
  top: 50px;
  left: calc(50% - 165px);
}
</style>