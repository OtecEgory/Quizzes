<template>
    <div>
        <button class="next"
            @click="checkValue()"
        >
            {{BtnNext}}
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            checkValue:Function,
        },
        data:function(){
            return{
                BtnNext:'next'
            }
        }
    }
</script>

<style lang="sass" scoped>

button.next
    font-size: 14px
    font-family: 'Quicksand', sans-serif
    padding: 8px 16px
    border: none
    background: #1fe7bd
    cursor: pointer
    font-size: 16px
    color: #ffffff
    font-weight: 500
    border-radius: 4px
    text-align: center
    transition: all 0.1s ease-in-out

</style>