<template>
    <button 
        class="create-quiz"
        @click="clickHandler(true)"
    >
        Create
    </button>
</template>
<script>
    export default ({
        props:{
            clickHandler:Function,
        }
    })
</script>


<style lang="sass" scoped>
    button
        cursor: pointer
        font-family: 'Quicksand', sans-serif
        border: 0
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        width: 168px
        padding: 8px
        background-color: #1fe7bd
        border-radius: 8px
        box-shadow: 0px 2px 0px #6c4298
        transform: translateY(0px)
        transition: all 0.14s ease-in-out
        color: #fff
        font-weight: 600
        font-size: 16px
</style>