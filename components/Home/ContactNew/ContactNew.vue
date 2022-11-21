<template>
  <div class="footer">
    <!-- <decoration /> -->
    <v-container class="max-lg pt-8">
      <v-row>
        <v-col cols="12">
          <h2 class="title-primary mb-0">{{$t('contact.section_title')}}</h2>
        </v-col>
        
        <v-col cols="12"> 
          <h1>{{$t('contact.section_subtitle')}}</h1>
        </v-col>

        <v-col cols="12">
          <p>{{$t('contact.section_para')}}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="5" class="px-sm-12">
          <v-row class="socmed">
            <v-col cols="2">
              <v-btn icon class="margin">
                <i class="ion-ios-call-outline"></i>
              </v-btn>
            </v-col>

            <v-col cols="10" class="text-start">
              <h3 class="text-uppercase mb-0">Call Us</h3>
              <p class="mb-0">+92-992-526915</p>
            </v-col>
          </v-row>

          <v-row class="socmed">
            <v-col cols="2">
              <v-btn icon class="margin">
                <i class="ion-ios-navigate-outline"></i>
              </v-btn>
            </v-col>

            <v-col cols="10" class="text-start">
              <h3 class="text-uppercase mb-0">Pakistan Office</h3>
              <p class="mb-0">Office # 14, KPK IT Park, Mandian Abbottabad, Pakistan</p>
            </v-col>
          </v-row>

          <v-row class="socmed">
            <v-col cols="2">
              <v-btn icon class="margin">
                <i class="ion-ios-navigate-outline"></i>
              </v-btn>
            </v-col>

            <v-col cols="10" class="text-start">
              <h3 class="text-uppercase mb-0">Estonia Office</h3>
              <p class="mb-0">Tartu, Estonia</p>
            </v-col>
          </v-row>

          <v-row class="socmed">
            <v-col cols="2">
              <v-btn icon class="margin">
                <i class="ion-ios-mail-outline"></i>
              </v-btn>
            </v-col>

            <v-col cols="10" class="text-start">
              <h3 class="text-uppercase mb-0">Say Hello</h3>
              <p class="mb-0">contact@codematics.co</p>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="7">
          <div class="form-wrap">
            <v-snackbar
              v-model="openNotif"
              :timeout="4000"
              top
              right
            >
              Message Sent
            </v-snackbar>

            <v-card class="form-box">
              <v-row>
                <v-col lg="12" cols="12">
                  <div class="form">
                    <v-form ref="form" v-model="valid">
                      <v-row class="spacing6">
                        <v-col cols="12" sm="12" class="px-6 py-0">
                          <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :label="$t('common.form_name')"
                            class="input"
                            required
                          />
                        </v-col>
                        <v-col cols="12" sm="12" class="px-6 py-0">
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            :label="$t('common.form_email')"
                            class="input"
                            required
                          />
                        </v-col>
                        <v-col cols="12" class="px-6 py-0">
                          <v-textarea
                            v-model="message"
                            rows="3"
                            class="input"
                            :label="$t('common.form_message')"
                          />
                        </v-col>
                      </v-row>
                      <div class="btn-area">
                        <v-btn
                          color="primary"
                          large
                          @click="validate"
                          block
                        >
                          {{ $t('common.form_send') }}
                        </v-btn>
                      </div>
                    </v-form>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './contact-new-style..scss';
@import '../../Title/title-style.scss';

  .footer {
    background-color: #1B1D1F;
    color: #ffffff;
    border-top: 13px var(--v-primary-base) solid;
  }

  .title-primary {
    letter-spacing: .5em !important;
  }

  h1 {
    font-size: 35px;
  }

  .text-start > h3 {
    font-size: 12px !important;
  }

  .text-start > p {
    font-size: 15px !important;
  }

  p {
    font-size: 20px !important;
  }

  .theme--light.v-card {
    color: #ffffff !important;
  }
</style>

<script>
import Logo from '../../Logo'
import brand from '~/static/text/brand'
import Decoration from '../../Footer/Decoration'

export default {
  components: {
    Logo,
    Decoration
  },
  data: () => ({
    brand: brand,
    openNotif: false,
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    message: ''
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.openNotif = true
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
