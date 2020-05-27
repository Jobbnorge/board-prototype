<template>
    <button class="btn" type="button" @click="filter" :class="{active: isActive}">
        <fa-icon size="lg" :icon="['fal', activeIcon]" v-if="activeIcon && placement ==='left'"></fa-icon>
        <slot></slot>
        <fa-icon size="lg" :icon="['fal', activeIcon]" v-if="activeIcon && placement === 'right'"></fa-icon>
    </button>    
</template>

<script>
export default {
    name: "JnToggleButton",
    props: {
        ascIcon: {
          type: String,
          default: "sort-alpha-up"
        },
        descIcon: {
            type: String, 
            default: "sort-alpha-down-alt"
        },
        placement: {
            type: String,
            default: "left"
            },
        action: Function,
        defaultDirection: {
            type: String,
            default: "asc"
        },
        isActive: Boolean    
        },
    data() {
        return {            
            activeIcon: this.defaultDirection === "asc" ? this.ascIcon : this.descIcon,
            direction: undefined
        }
    },
    methods: {
        filter() {
            if(!this.direction) {
                this.direction = this.defaultDirection;
            }
            else if(this.direction === "desc") { 
                this.direction = "asc";                
            } else {
                this.direction = "desc";                
            }

            this.activeIcon = this.direction === "asc" ? this.ascIcon : this.descIcon;
            
            this.action(this.direction);
        }
    }
}
</script>

<style scoped>
    .active {
        color: #D41472;
        font-weight: 600;
    }
    svg {
        margin: 0rem 0.5rem 0rem 0.5rem; 
    }
</style>