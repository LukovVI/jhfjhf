<template>
  <v-container>
    <div class="msg-container yellow elevation-3 rounded">
      <router-link :to="{name: 'topic', query: {id: topic.id}}"
                   class="my-title hover">{{ topic.title }}
      </router-link>

      {{ topic.text }}
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ViewTopicComponent",
  props: {
    topic: {
      required: true,
      type: Object,
      default() {
        return {
          id: Number,
          title: String,
          text: String
        }
      }
    }
  }
}
</script>

<style scoped>

</style>