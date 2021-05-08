<template>
    <div>
        <div 
            v-for="item in nameHachTag"
            :key="item.subject"
            :class="`subject ${item.active ? 'active' : ''}`"
            @click="toggleState(item.subject)"
        >
            {{item.subject}}
        </div>
    </div>
</template>

<script>
    // Get mockup data
    import { hashtags } from "../mock"

    export default {
        data: function(){
            return{
                // TODO: Rename on Hachtags
                nameHachTag: [],
            }
        },
        // Load Data
        mounted() {
            this.nameHachTag = hashtags.map(item => {
                return {
                    subject: item,
                    active: false,
                }
            })
        },
        methods:{
            toggleState(subject){
                let filteredItems = this.nameHachTag.filter(item => item.active)
                let item = this.nameHachTag.find(item => item.subject === subject)
                let length = filteredItems.length

                if(length >= 3 && !item.active) {
                    return false

                } else {
                    item.active = !item.active
                }
            },
        }
    }
</script>

<style lang="sass" scoped>

div.subject
    display: flex
    font-size: 14px
    padding: 5px 12px
    color: #292A3A
    background-color: #f2f2f2
    display: inline-block
    border-radius: 28px
    margin-right: 4px
    margin-bottom: 8px
    cursor: pointer
    transition: 0.3s
    font-family: 'Quicksand', sans-serif

    &.active
        background-color: #7c43bd
        color: #fff

</style>