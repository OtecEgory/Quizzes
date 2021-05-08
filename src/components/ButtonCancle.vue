<template>
    <div>
        <button 
            class="cancle"
            @click="clickHandler(false)"
        >
            {{BtnCancle}}
        </button>
    </div>
</template>

<script>
    export default {
        props:{
            clickHandler:Function,
        },
        data:function(){
            return{
                BtnCancle:'cancle'
            }
        }
    }
</script>

<style lang="sass" scoped>

button.cancle
    font-size: 14px
    font-family: 'Quicksand', sans-serif
    padding: 8px 16px
    border: none
    margin-right: 20px
    background-color: #fbc02d
    cursor: pointer
    font-size: 16px
    color: #ffffff
    font-weight: 500
    border-radius: 4px
    text-align: center
    transition: all 0.1s ease-in-out

</style>