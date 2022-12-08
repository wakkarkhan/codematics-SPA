<template>
  <paper :title="$t('common.blog_about')"
    subtitle="We deliver projects worldwide. Our core clients are from North America, Europe and Australia. Feel free to connect."
    icon="mdi-account-circle">
    <div>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-phone
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $t('common.blog_phone') }}</v-list-item-title>
            <v-list-item-subtitle>+92-992-526915</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-mail
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ $t('common.blog_mail') }}</v-list-item-title>
            <v-list-item-subtitle>contact@codematics.co</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-google-maps
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Pakistan Office</v-list-item-title>
            <v-list-item-subtitle>Office # 14, KPK IT Park, Mandian Abbottabad, Pakistan</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-avatar>
            <v-icon class="grey lighten-3" color="primary">
              mdi-google-maps
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Estonia (EU) Office</v-list-item-title>
            <v-list-item-subtitle>Tartu, Estonia</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  }
}
</script>
