<template>
  <div>

    <b-container>
      <div class="carousel-wrapper">
        <Carousel/>
        <hr>
      </div>
      <div>
        <b-row align-v="center" align-h="center">
          <Card v-for="item of items" v-bind:item="item" :key="item.title"/>
        </b-row>
        <hr>
      </div>
      <div>
        <VideoComponent/>
      </div>
    </b-container>
  </div>


</template>

<script>
import Card from "@/components/Card";
import Carousel from "@/components/Carousel"
import VideoComponent from "@/components/VideoComponent"

export default {
  components: {
    Card,
    Carousel,
    VideoComponent
  },
  data() {
    return {
      items: [
        {
          title: 'Pets',
          content: 'Animals (also called Metazoa) are multicellular eukaryotic organisms that form the biological kingdom Animalia.' +
              'With few exceptions, animals consume organic material, breathe oxygen, are able to move, can reproduce sexually,' +
              'and grow from a hollow sphere of cells, the blastula, during embryonic development. '
        },
        {
          title: 'Cats',
          content: "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species" +
              "in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of" +
              "the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids" +
              "human contact."
        },
        {
          title: 'Dogs',
          content: 'The dog is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids,' +
              'and is the most widely abundant terrestrial carnivore. The dog was the first species to be domesticated, and has been selectively\n' +
              'bred over millennia for various behaviors, sensory capabilities, and physical attributes.'
        }
      ]

    }
  }
}
</script>

<style>
.carousel-wrapper {
  padding-bottom: 20px;
}


</style>