<template>
    <div class="single-question mt-2">
        <div class="container">
            <h1>{{ question.content }}</h1>
            <p class="mb-0">Posted by:
                <span class="author-name">{{ question.author }}</span>
            </p>
            <p>{{ question.created_at }}</p>
        <hr>
        </div>
        <div class="container">
            <AnswerComponent
                v-for="(answer, index) in answers"
                :answer="answer"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
import { apiService } from "@/common/api.service.js";
import AnswerComponent from "@/components/Answer.vue";
export default {

    name: "Question",
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    components: {
        AnswerComponent
    },
    data() {
        return {
            question: {},
            answers: []
        }
    },
    methods: {
        getQuestionData() {
            let endpoint = `/api/questions/${this.slug}/`;
            apiService(endpoint)
                .then(data => {
                    this.question = data;
                })
        },
        getQuestionsAnswers() {
            let endpoint = `/api/questions/${this.slug}/answers/`;
            apiService(endpoint)
                .then(data => {
                    this.answers = data.results;
                })
        },
    },
    created() {
        this.getQuestionData();
        this.getQuestionsAnswers();
    }
}
</script>

<style scoped>
.author-name {
    font-weight: bold;
    color: #DC3545;
}

</style>