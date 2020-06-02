<template>
  <div class="boardlist">
    <div class="head">{{ name }}</div>
    <draggable
      :list="orderedItems"
      :group="draggableGroup"
      @change="draggableChanged"
      ghost-class="my-ghost-class"
      easing="cubic-bezier(1, 0, 0, 1)"
      animation="150"
    >
      <JobseekerMiniCard
        v-for="item in orderedItems"
        v-bind:key="item.id"
        v-bind="item"
        @miniCardClicked="$emit('draggableItemClicked', $event)"
      />
    </draggable>
    <slot name="button" />
  </div>
</template>

<script>
import JobseekerMiniCard from "./JobseekerMiniCard";
import draggable from "vuedraggable";

import _ from "lodash";

export default {
  name: "BoardList",
  components: {
    JobseekerMiniCard,
    draggable
  },
  props: {
    name: String,
    items: Array,
    orderby: String,
    direction: String,
    draggableGroup: String,
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
    draggableChanged(evt) {
      this.$emit("draggableChanged", evt);
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
