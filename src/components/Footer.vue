<template>
  <div class="footer-body">
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous">
    <mdb-footer class="page-footer font-small lighten-5 pt-0 background-class">
      <div class="a">

        <mdb-container class="text-left">
          <mdb-row class="py-4 d-flex align-items-center">
            <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
              <h5 class="text-uppercase font-weight-bold">Share on social networks!</h5>
            </mdb-col>
            <mdb-col md="6" lg="7" class="text-center text-md-right">

              <ShareNetwork class="fab fa-facebook social-icon"
                            network="facebook"
                            url="https://news.vuejs.org/issues/180"
                            title="Project BBIU"
                            description="Web page created by Yevhenii Nokhrin"
                            quote="Something"
                            hashtags="vuejs,vite"
                            :style="{color: '#000000'}"
              />


              <ShareNetwork class="fab fa-twitter social-icon"
                            network="twitter"
                            url="https://news.vuejs.org/issues/180"
                            title="Project BBIU"
                            description="Web page created by Yevhenii Nokhrin"
                            quote="Something"
                            hashtags="vuejs,vite"
                            :style="{color:  '#000000'}"
              />

              <ShareNetwork class="fab fa-telegram social-icon"
                            network="telegram"
                            url="https://news.vuejs.org/issues/180"
                            title="Project BBIU"
                            description="Web page created by Yevhenii Nokhrin"
                            quote="Something"
                            hashtags="vuejs,vite"
                            :style="{color:  '#000000'}"
              />

            </mdb-col>
          </mdb-row>
        </mdb-container>
      </div>
      <mdb-container class="mt-5 mb-4 text-center text-md-left ">
        <mdb-row class="mt-3 justify-content-between">

          <mdb-col md="2" lg="2" xl="2" class="mb-4 dark-grey-text">
            <h6 class="text-uppercase font-weight-bold"><strong>Used libraries</strong></h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto a" style="width: 60px"/>
            <mdb-row class="mt-3 justify-content-between">
              <mdb-col>

                <p><a href="https://github.com/ragnarlotus/vue-flux">Vue Flux</a></p>
                <p><a href="https://fontawesome.com/icons/align-justify?style=solid">Font Awesome</a></p>
                <p><a href="https://github.com/nicolasbeauvais/vue-social-sharing#readme">Vue social sharing</a></p>

              </mdb-col>

              <mdb-col md="3" lg="2" xl="2" class="mb-4 dark-grey-text">

                <p><a href="https://vue-chartjs.org/guide/#introduction">Vue chart</a></p>
                <p><a href="https://bootstrap-vue.org">BootstrapVue</a></p>
                <p><a href="https://github.com/andrewvasilchuk/vue-lazy-youtube-video">Lazy YouTube Video</a></p>

              </mdb-col>
            </mdb-row>
          </mdb-col>
          <mdb-col md="3" lg="4" xl="3" class="mb-4 dark-grey-text">
            <h6 class="text-uppercase font-weight-bold"><strong>Author</strong></h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto a" style="width: 60px"/>
            <p class="font-weight-bold">Yevhenii Nokhrin</p>
            <p class="font-weight-bold">233315</p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">

      </div>
    </mdb-footer>
  </div>

</template>


<script>
import {mdbFooter, mdbContainer, mdbRow, mdbCol} from 'mdbvue';

export default {
  name: 'FooterPage',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>
.a {
  background-color: #17a2b8
}

.background-class {
  background-color: #f6f6f6;
}

.footer-body {

}

.social-icon {
  padding: 10px;
  font-size: 2rem;

}
</style>