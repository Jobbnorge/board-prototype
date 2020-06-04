<template>
  <div class="grid-wrapper" @click="openModal">
    <Avatar class="avatar" :firstName="firstName" :lastName="lastName" :id="id" />
    <div class="info">
      <p class="name">{{ firstName }} {{lastName}}</p>
      <p class="title">{{ title }}, {{ age }}</p>
    </div>
    <div class="details">
      <div v-if="points" class="points">
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
import CandidateDetails from "./CandidateDetails"; 

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
    label: String,
    applicationDate: String,
    email: String,
    birthday: String,
    phone: String,
  },
  data() {
      return {
          cleanDate: ""
      }
  },
  created() {
        //cleaning the applicationDate 
        const regex = /(\d{4}-\d{2}-\d{2})/g
        const matchToDate = new Date(this.applicationDate.match(regex));
        this.cleanDate = matchToDate.toLocaleDateString()   
        
  },
  methods: {
     openModal() {
        var vm = this;

        jnDialog.richInfo({size: "large"}, {
        header: {
            node: Vue.component("modal-header", {
            render: function(createElement) {
                return createElement("div", { domProps: { className: "candidate-modal-header" } }, [
                    createElement("p", { domProps: {className: "test", innerHTML: "Søker id: " + vm.id } }),
                    createElement("p", { domProps: { innerHTML: "Søknad mottatt: " + vm.cleanDate } })
                ]);
            }
            })
        },
        body: {
            node: CandidateDetails,
            data: {
                props: {
                    candidate: this
                }
            }
        }
        });
    }
  }
}        
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
.modal-header-right {
    display: grid; 
    justify-items: end;
}
.modal-header-right > p {
  margin-bottom: 0.3rem; 
}
</style>
