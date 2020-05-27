<template>
  <div>
    <div class="hired" v-bind:class="{ active: hasHiredCandidate() }">
      <div class="head">Ansatt</div>
      <div class="candidates">
        <div v-if="globalState.candidates.hired.length === 0">Stillingen er ikke besatt</div>
        <JnJobseekerMiniCard
          class="candidate"
          v-for="item in globalState.candidates.hired"
          v-bind:key="item.key"
          v-bind="item"
        />
      </div>
    </div>

    <div class="sortButtons">
      <p>Sortering:</p>
      <ToggleButton
        class="toggleButton"
        v-for="button in ordering.buttons"
        v-bind:key="button.orderProperty"
        v-bind="button"
        :action="(dir) => setOrdering(button.orderProperty, dir)"
      >{{ button.text }}</ToggleButton>
    </div>

    <div class="board">
      <JnBoardList
        name="Til vurdering"
        :items="globalState.candidates.notAssessed"
        v-bind="ordering"
        :draggableGroup="boardGroup"
        @draggableChanged="listChanged($event, 'notAssessed')"
      >
        <template #button>
          <button
            v-if="globalState.candidates.notAssessed.length > 0"
            type="button"
            class="btn btn-secondary"
            @click="
              $router.push({
                name: 'assessment'
              })
            "
          >Til vurdering</button>
        </template>
      </JnBoardList>

      <JnBoardList
        name="Kvalifisert"
        :items="globalState.candidates.qualified"
        v-bind="ordering"
        :draggableGroup="boardGroup"
        @draggableChanged="listChanged($event, 'qualified')"
      >
        <template #button>
          <button
            v-if="globalState.candidates.qualified.length > 0"
            type="button"
            class="btn btn-secondary"
            @click="
              $router.push({
                name: 'interview'
              })
            "
          >Innkalle til intervju</button>
        </template>
      </JnBoardList>
      <JnBoardList
        name="Ikke Kvalifisert"
        :items="globalState.candidates.notQualified"
        v-bind="ordering"
        class="notqualified"
        :draggableGroup="boardGroup"
        @draggableChanged="listChanged($event, 'notQualified')"
      />
      <JnBoardList
        name="Intervju"
        :items="globalState.candidates.interview"
        v-bind="ordering"
        :draggableGroup="boardGroup"
        @draggableChanged="listChanged($event, 'interview')"
      />
      <JnBoardList
        name="Innstillinger"
        :items="globalState.candidates.nominated"
        v-bind="ordering"
        :draggableGroup="boardGroup"
        @draggableChanged="listChanged($event, 'nominated')"
      />
    </div>
    <button @click="openFluffModal">Trykk meg!</button>
    <JnDialogComponent v-bind="fluffData" @resolveModal="resolveModal">
      <template #body>
        <div>
          <p>hello jeg kan være en hvilken som helst komponente :P</p>
        </div>
      </template>
    </JnDialogComponent>
  </div>
</template>

<script>
import JnBoardList from "@jobbnorge/jn-components/src/ui_components/board/JnBoardList";
import JnJobseekerMiniCard from "@jobbnorge/jn-components/src/ui_components/board/JnJobseekerMiniCard";
import ToggleButton from "./ToggleButton";
import { store } from "../store";
import JnDialogComponent from "@jobbnorge/jn-components/src/ui_components/jn-dialog/JnDialogComponent";
//import {JnDialog} from "@jobbnorge/jn-components/jn_modules/jn-dialog/jn-dialog";

export default {
  name: "BoardComponent",
  components: {
    ToggleButton,
    JnBoardList,
    JnJobseekerMiniCard,
    JnDialogComponent
  },
  data: function() {
    return {
      boardGroup: "candidates",
      fluffData: {
        modalId: "fluffModal",
        display: false,
        modalTitle: "hei",
        modalBody: "fluff",
        size: "",
        rejectButton: {
          visible: false,
          text: ""
        },
        resolveButton: {
          visible: true,
          text: "Fluff OK"
        }
      },
      globalState: store.state,
      ordering: {
        direction: null,
        orderby: null,
        buttons: [
          {
            text: "Ingen",
            orderProperty: null,
            ascIcon: null,
            descIcon: null,
            isActive: true
          },
          {
            text: "Alfabetisk",
            orderProperty: "firstName"
          },
          {
            text: "Alder",
            orderProperty: "age",
            ascIcon: "sort-numeric-up",
            descIcon: "sort-numeric-down-alt"
          },
          {
            text: "Screening score",
            orderProperty: "points",
            defaultDirection: "desc",
            descIcon: "sort-numeric-down-alt",
            ascIcon: "sort-numeric-up"
          },
          {
            text: "Mottatt søknad",
            orderProperty: "applicationDate",
            defaultDirection: "desc",
            descIcon: "long-arrow-down",
            ascIcon: "long-arrow-up"
          }
        ]
      }
    };
  },
  methods: {
    hasHiredCandidate: function() {
      return (
        this.globalState.candidates.hired &&
        this.globalState.candidates.hired.length > 0
      );
    },
    setOrdering: function(orderby, direction) {
      this.ordering.buttons.forEach(
        b => (b.isActive = b.orderProperty === orderby ? true : false)
      );
      this.ordering.orderby = orderby;
      this.ordering.direction = direction;
    },
    setActive: function() {},
    listChanged(evt, listName) {
      console.info(evt)
      if (Object.prototype.hasOwnProperty.call(evt, "added")) {
        store.addCandidate(listName, evt.added.element);
      } else if (Object.prototype.hasOwnProperty.call(evt, "removed")) {
        store.removeCandidate(listName, evt.removed.element);
      } else if (Object.prototype.hasOwnProperty.call(evt, "moved")){
        store.moveCandidate(listName, evt.moved.oldIndex, evt.moved.newIndex);
      }
    },
    openFluffModal() {
      this.fluffData.display = true;
    },
    resolveModal() {
      this.fluffData.display = false;
    }
  
}}
</script>

<style scoped>
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 1rem;
}

.notqualified {
  grid-column-start: 2;
  grid-row-start: 3;
}

.hired {
  grid-column: 1 / span 4;
  grid-row-start: 1;
  border: 2px dotted #1d764f;
  padding: 0.5em;
}

.candidates {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
}

.hired .head {
  grid-row: 1 / span 4;
  font-size: 1.1rem;
}

.hired.active {
  background-color: #d3f5df;
}

.candidate {
  grid-row: span 1;
}

.sortButtons {
  display: flex;
  padding: 1em 0;
  vertical-align: middle;
}

.sortButtons p {
  margin: 0 1em 0 0;
  align-self: center;
}

.sortButtons .toggleButton {
  margin: 0 0.5em;
}
</style>
