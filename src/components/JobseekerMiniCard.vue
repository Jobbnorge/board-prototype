<template>
  <div class="grid-wrapper" @click="openModal">
    <Avatar class="avatar" :firstName="firstName" :lastName="lastName" :id="id" />
    <div class="info">
      <p class="name">{{ firstName }} {{lastName}}</p>
      <p class="title">{{ title }}, {{ age }}</p>
    </div>
    <div class="details">
      <div class="points">
        <i class="icon">
          <fa-icon :icon="['fas', 'bullseye']" size="sm" />
        </i>
        {{points}} poeng
      </div>
      <div class="label">{{ label }}</div>
    </div>
  </div>
</template>

<script>
import Avatar from "@jobbnorge/jn-components/src/ui_components/misc/Avatar";
import { jnDialog } from "@jobbnorge/jn-components/src/ui_components/jn-dialog/jn-dialog";
import CandidateDetails from './CandidateDetails';

export default {
  name: "JobseekerMiniCard",
  components: {
    Avatar
  },
  props: {
    firstName: String,
    lastName: String,
    title: String,
    points: Number,
    id: Number,
    age: Number,
    label: String
  },
  methods: {
    openModal() {
      var vm = this;
      jnDialog.richInfo(null, {
        header: {
          node: Vue.component("modal-header", {
            render: function(createElement) {
              return createElement("div", null, [
                createElement("p", { domProps: { innerHTML: "Header" } }),
                createElement("p", { domProps: { innerHTML: vm.id } })
              ]);
            }
          })
        },
        body: {
          node: CandidateDetails,
          componentProps: {
            candidate: {
              firstName: this.firstName,
              lastName: this.lastName,
              title: this.title,
              points: this.points,
              id: this.id,
              age: this.age,
              label: this.label
            }
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.grid-wrapper {
  background-color: #fff;
  margin: 0.5rem;
  border-radius: 3px;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: auto 2fr 1fr;
  align-items: baseline;
  color: #44303c;
}

.title {
  margin-bottom: 0.5rem;
  color: #72616c;
}

.name {
  color: #44303c;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem 0;
}

.info {
  align-self: center;
}

.avatar {
  margin: 0 0.75rem;
  align-self: center;
}

.details {
  display: grid;
}

.points {
  text-align: right;
  font-size: 0.725rem;
  color: #1d764f;
}

.label {
  background: #ffeef6;
  color: #d41472;
  border-radius: 16px;
  width: auto;
  padding: 0 0.5em;
  justify-self: end;
}
</style>
