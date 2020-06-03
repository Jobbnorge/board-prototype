<template>
  <div class="boardlist">
    <div class="head">{{ name }}</div>
    <draggable :list="orderedItems" @change="$emit('draggableChanged', $event)" @start="log" :draggable="false">
      <JobseekerMiniCard v-for="item in orderedItems" v-bind:key="item.id" v-bind="item" />
    </draggable>
    <slot name="button" />
  </div>
</template>

<script>
import JobseekerMiniCard from "./JobseekerMiniCard";
import draggable from "../../node_modules/vuedraggable";

import _ from "lodash";

export default {
  name: "BoardList",
  components: {
    draggable,
    JobseekerMiniCard
  },
  props: {
    name: String,
    items: Array,
    orderby: String,
    direction: String,
    draggableGroup: {
      type: String,
      default: "candidates"
    },
    isDraggable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    orderedItems: function() {
      var vm = this;
      return _.orderBy(vm.items, vm.orderby, vm.direction);
    }
  },
  methods: {
    log(e){
      console.info(e)
    }
  }
};
</script>

<style scoped>
.boardlist {
  background-color: #eee;
  border-radius: 3px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 50px;
  row-gap: 1em;
  cursor: pointer;
}

.my-ghost-class {
  opacity: 0.5;
}

.head {
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  color: #1d764f;
  background-color: #d3f5df;
}
</style>
