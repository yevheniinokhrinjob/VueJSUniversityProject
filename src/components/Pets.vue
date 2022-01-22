<template>
  <div>

    <b-container>
      <b-row class="row-body">
        <div class="" align="left">
          <h1>Pets</h1>
          <hr>
        </div>
      </b-row>
      <b-row align-h="center" align-v="center" align="justify" class="row-body">
        <b-col class="p-3 content content-border">{{ content }}</b-col>

      </b-row>
      <b-row align-h="between" align-v="stretch" align="justify" class="row-body">
        <b-col sm="7" class="p-3 content content-border">{{ content1 }}</b-col>
        <b-col sm="4" class="p-3  content content-border">
          <div class="chart-title">
            Pets in Poland (in %)
            <ChartComponent/>

          </div>

        </b-col>

      </b-row>

    </b-container>

  </div>
</template>

<script>
import ChartComponent from "@/components/ChartComponent";


export default {
  components: {
    ChartComponent
  },
  data() {
    return {
      content: "A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than" +
          "as a working animal, livestock or a laboratory animal. Popular pets are often considered to have attractive" +
          "appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis (such" +
          "as a stray animal) and accepted by the owner regardless of these characteristics. Two of the most popular pets are dogs and cats; the technical term for a cat lover is an ailurophile and a dog" +
          "lover a cynophile. Other animals commonly kept include: rabbits; ferrets; pigs; rodents, such as gerbils," +
          "hamsters, chinchillas, rats, mice, and guinea pigs; avian pets, such as parrots, passerines and fowls; reptile" +
          "pets, such as turtles, alligators, crocodiles, lizards, and snakes; aquatic pets, such as fish, freshwater and" +
          "saltwater snails, amphibians like frogs and salamanders; and arthropod pets, such as tarantulas and hermit" +
          "crabs. Small pets may be grouped together as pocket pets, while the equine and bovine group include the largest" +
          "companion animals.",

      content1: "Pets provide their owners (or \"guardians\") both physical and emotional benefits. Walking a dog can provide" +
          "both the human and the dog with exercise, fresh air and social interaction. Pets can give companionship to" +
          "people who are living alone or elderly adults who do not have adequate social interaction with other people." +
          "There is a medically approved class of therapy animals, mostly dogs or cats, that are brought to visit" +
          "confined humans, such as children in hospitals or elders in nursing homes. Pet therapy utilizes trained" +
          "animals and handlers to achieve specific physical, social, cognitive or emotional goals with patients." +
          "People most commonly get pets for companionship, to protect a home or property or because of the perceived beauty or " +
          "attractiveness of the animals. A 1994 Canadian study found that the most common reasons for not owning a pet were " +
          "lack of ability to care for the pet when traveling (34.6%), lack of time (28.6%) and lack of suitable housing (28.3%), " +
          "with dislike of pets being less common (19.6%)."
    }

  }
}
</script>

<style scoped>
hr {
  width: 80vw;
}

.content {
  margin-top: 16px;
  background-color: #f6f6f6;
  border: #17a2b8 1px double;
  padding: 5px;
  font-family: ui-sans-serif, sans-serif;
  font-size: 16px;
}

.content-border {
  border-radius: 20px;
}

.row-body {
  padding: 10px;
}

.chart-title {

  display: flex;
  flex-direction: column;
  font-weight: bold;
  text-align: center;

}
</style>