<template>
  <div>
    <b-col>
      <b-card :title="item.title" class="mb-2 content">
        <b-card-text align="justify">
          {{ item.content }}
        </b-card-text>
        <b-button class="button-style" variant="primary" :to="item.title">Show more</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.content {
  background-color: #f6f6f6;
  max-width: 21rem;
  border: #17a2b8 1px double;
  padding: 5px;
  font-family: ui-sans-serif, sans-serif;
  font-size: 16px;
}

.button-style {
  border: white 1px solid;
  background-color: #17a2b8;
}
</style>