<template>
  <div>

    <b-container>
      <b-row class="row-body">
        <div class="" align="left">
          <h1>Cats</h1>
          <hr>
        </div>
      </b-row>
      <b-row align-h="between" align-v="center" align="justify" class="row-body">
        <b-col sm="8" class="p-3 content content-border">{{ content }}</b-col>
        <b-col sm="4" class="p-3 ">
          <img class="content-border" src="@/assets/pic4/big.jpg" style="width: 100%"
               srcset="@/assets/pic4/small.jpg 300w,
               @/assets/pic4/medium.jpg 400w,
               @/assets/pic4/big.jpg 720w"
               sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 300px"
          />
        </b-col>
      </b-row>
      <b-row align-h="between" align-v="center" align="justify" class="row-body">

        <b-col sm="4" class="p-3 ">
          <img class="content-border" src="@/assets/pic2/big.jpg" style="width: 100%"
               srcset="@/assets/pic2/small.jpg 300w,
               @/assets/pic2/medium.jpg 400w,
               @/assets/pic2/big.jpg 720w"
               sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 300px"
          />

        </b-col>
        <b-col sm="8" class="p-3 content content-border">{{ content1 }}</b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {

  data() {
    return {
      content: "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species" +
          "in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of" +
          "the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids" +
          "human contact. Domestic cats are valued by humans for companionship and their ability to hunt rodents. About " +
          "60 cat breeds are recognized by various cat registries. The cat is similar in anatomy to the other felid species: it has a strong flexible body, quick reflexes, sharp\n" +
          "teeth and retractable claws adapted to killing small prey. Its night vision and sense of smell are well" +
          "developed. Cat communication includes vocalizations like meowing, purring, trilling, hissing, growling and" +
          "grunting as well as cat-specific body language. A predator that is most active at dawn and dusk, the cat is a" +
          "solitary hunter but a social species. It can hear sounds too faint or too high in frequency for human ears," +
          "such as those made by mice and other small mammals.",

      content1: "It secretes and perceives pheromones.  Female domestic cats can have kittens from spring to late autumn, with litter sizes often ranging from two to" +
          "five kittens. Domestic cats are bred and shown at events as registered pedigreed cats, a hobby known as cat" +
          "fancy. Failure to control breeding of pet cats by spaying and neutering, as well as abandonment of pets," +
          "resulted in large numbers of feral cats worldwide, contributing to the extinction of entire bird, mammal, and" +
          "reptile species, and evoking population control. The domestic cat's hearing is most acute in the range of 500 Hz to 32 kHz.It can detect an extremely" +
          "broad range of frequencies ranging from 55 Hz to 79,000 Hz. It can hear a range of 10.5 octaves, while humans" +
          "and dogs can hear ranges of about 9 octaves. Its hearing sensitivity is enhanced by its large movable" +
          "outer ears, the pinnae, which amplify sounds and help detect the location of a noise. It can detect" +
          "ultrasound, which enables it to detect ultrasonic calls made by rodent prey."
    }

  }
}
</script>

<style scoped>
hr {
  width: 80vw;
}

.content {
  background-color: #f6f6f6;
  border: #17a2b8 1px double;
  font-family: ui-sans-serif, sans-serif;
  font-size: 16px;
}

.content-border {
  border-radius: 20px;
}

.row-body {
  padding: 10px;
}
</style>