<template>
  <div>

    <b-container>
      <b-row class="row-body">
        <div class="" align="left">
          <h1>Dogs</h1>
          <hr>
        </div>
      </b-row>
      <b-row align-h="between" align-v="center" align="justify" class="row-body">
        <b-col sm="8" class="p-3 content content-border">{{ content }}</b-col>
        <b-col sm="4" class="p-3 ">
          <img class="content-border" src="@/assets/pic1/big.jpg" style="width: 100%"
               srcset="@/assets/pic1/small.jpg 300w,
               @/assets/pic1/medium.jpg 400w,
               @/assets/pic1/big.jpg 720w"
               sizes="(max-width: 400px) 100vw, (max-width: 700px) 50vw, (max-width: 900px) 33vw, 300px"
          />
        </b-col>
      </b-row>
      <b-row align-h="between" align-v="center" align="justify" class="row-body">

        <b-col sm="4" class="p-3 ">
          <img class="content-border" src="@/assets/pic3/big.jpg" style="width: 100%"
               srcset="@/assets/pic3/small.jpg 300w,
               @/assets/pic3/medium.jpg 400w,
               @/assets/pic3/big.jpg 720w"
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
      content: "The dog (Canis familiaris when considered a distinct species or Canis lupus familiaris when considered a" +
          "subspecies of the wolf) is a domesticated carnivore of the family Canidae. It is part of the wolf-like canids," +
          "and is the most widely abundant terrestrial carnivore. The dog and the extant gray wolf are sister taxa as" +
          "modern wolves are not closely related to the wolves that were first domesticated, which implies that the" +
          "direct  ancestor of the dog is extinct. The dog was the first species to be domesticated, and has been selectively" +
          "bred over millennia for various behaviors, sensory capabilities, and physical attributes.  Their long association with humans has led dogs to be uniquely attuned to human behavior, and they can thrive" +
          "on a starch-rich diet that would be inadequate for other canids. Dogs vary widely in shape, size, and colors." +
          "They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and" +
          "military, companionship, and, more recently, aiding disabled people, and therapeutic roles. This influence on" +
          "human society has given them the sobriquet of \"man's best friend.",

      content1: "  Dog intelligence is the dog's ability to perceive information and retain it as knowledge for applying to solve" +
          "problems. Studies of two dogs suggest that dogs can learn by inference and have advanced memory skills. A" +
          "study with Rico, a border collie, showed that he knew the labels of over 200 different items. He inferred the" +
          "names of novel things by exclusion learning and correctly retrieved those new items immediately and four weeks" +
          "after the initial exposure. A study of another border collie, \"Chaser,\" documented his learning and memory" +
          "capabilities. He had learned the names and could associate by verbal command over 1,000 words. Dogs can" +
          "read and react appropriately to human body language such as gesturing and pointing and human voice commands.    A 2018 study on canine cognitive abilities found that dogs' capabilities are no more exceptional than those of" +
          "other animals, such as horses, chimpanzees, or cats. Various animals, including pigs, pigeons, and" +
          "chimpanzees, can remember the \"what, where, and when\" of an event, which dogs cannot do."
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