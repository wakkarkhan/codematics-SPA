<template>
  <footer class="footer">
    <v-container>
      <v-row class="py-5 py-md-0">
        <v-col sm="12" md="6" lg="6" cols="12">
          <div class="copyright">
            <p class="body-2 text-center text-md-start">
              Copyrights © 2022 <a href="/">Codematics Inc.</a> All Rights Reserved.
            </p>
          </div>
        </v-col>

        <v-col sm="12" md="6" lg="6" cols="12" class="text-center text-md-end">
          <v-btn icon class="icon" href="https://web.facebook.com/codematics?_rdc=1&_rdr">
            <i class="ion-logo-facebook" />
          </v-btn>
          <v-btn icon class="icon" href="https://twitter.com/Codematics_inc">
            <i class="ion-logo-twitter" />
          </v-btn>
          <v-btn icon class="icon" href="https://www.linkedin.com/company/codematics-software-company/mycompany/">
            <i class="ion-logo-linkedin" />
          </v-btn>
          <v-btn icon class="icon" href="https://www.youtube.com/channel/UCl52II-NzhnCMoPCS9F8CVg">
            <i class="ion-logo-youtube" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';

footer {
  background-color: #141618;
  color: #ffffff;
}

a {
  color: #ffffff !important;
  text-decoration: none !important;
}

a:hover {
  color: var(--v-primary-base) !important;
}
</style>

<script>
import brand from '~/static/text/brand'
import menu from '../Header/data/single'

export default {
  data: () => ({
    brand: brand,
    menu: menu
  })
}
</script>
