<template>
  <div>
    <vue-flux
        :options="vfOptions"
        :images="vfImages"
        :transitions="vfTransitions"
        :captions="vfCaptions"
        ref="slider">

      <template v-slot:preloader>
        <flux-preloader/>
      </template>

      <template v-slot:caption>
        <flux-caption/>
      </template>

      <template v-slot:controls>
        <flux-controls/>
      </template>

      <template v-slot:pagination>
        <flux-pagination/>
      </template>

      <template v-slot:index>
        <flux-index/>
      </template>
    </vue-flux>

  </div>
</template>

<script>import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
} from 'vue-flux';

export default {
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader,
  },

  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: ["https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/07/31/21/15/dog-2561134_1280.jpg  ",
      "https://cdn.pixabay.com/photo/2019/06/18/11/32/cat-4282123_1280.jpg",
      "https://cdn.pixabay.com/photo/2021/01/02/23/55/dog-5883275_1280.jpg"
    ],
    vfTransitions: ['fade'],
    vfCaptions: [
      'Caption for image 1',
      'Caption for image 2',
      'Caption for image 3',
    ],
  }),
}
</script>
