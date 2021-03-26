<template>
    <div>
        <div class="subject"
            v-for="nameTag in nameHachTag"
            :key="nameTag.subject"
            @click="clickCategory()"
        >
            {{nameTag.subject}}
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            clickCategory:Function
        },
        data: function(){
            return{
                nameHachTag:[
                    {
                        subject: 'Mathematics',
                    },
                    {
                        subject: 'English',
                    },
                    {
                        subject: 'Physics',
                    },
                    {
                        subject: 'Chemistry',
                    },
                    {
                        subject: 'Biology',
                    },
                    {
                        subject: 'Science',
                    },
                    {
                        subject: 'Computers',
                    },
                    {
                        subject: 'Geography',
                    },
                    {
                        subject: 'World Languages',
                    },
                    {
                        subject: 'History',
                    },
                    {
                        subject: 'Social Studies',
                    },
                    {
                        subject: 'Physical Ed',
                    },
                    {
                        subject: 'Arts',
                    },
                    {
                        subject: 'Fun',
                    },
                    {
                        subject: 'Architecture',
                    },
                    {
                        subject: 'Business',
                    },
                    {
                        subject: 'Design',
                    },
                    {
                        subject: 'Education',
                    },
                    {
                        subject: 'Instructional Technology',
                    },
                    {
                        subject: 'Journalism',
                    },
                    {
                        subject: 'Life Skills',
                    },
                    {
                        subject: 'Moral Science',
                    },
                    {
                        subject: 'Performing Arts',
                    },
                    {
                        subject: 'Philosophy',
                    },
                    {
                        subject: 'Religious Studies',
                    },
                    {
                        subject: 'Special Education',
                    },
                    {
                        subject: 'Specialty',
                    },
                    {
                        subject: 'Other',
                    }
                ]
            }
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
    &:hover
        background-color: #7c43bd
        color: #fff

</style>