<template>
  <paper :title="$t('common.blog_archived')" icon="mdi-folder-outline">
    <div>
      <v-list subheader two-line>
        <v-list-item v-for="(item, index) in periode" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon color="grey lighten-1">mdi-chevron-right</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-btn text block color="primary">
        {{ $t('common.btn_seeall') }}
      </v-btn>
    </div>
  </paper>
</template>

<script>
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      periode: [
        'May 2022',
        'November 2020',
        'February 2020',
        'December 2019',
        'June 2019',
        'April 2019',
        'March 2019',
        'January 2019',
        'December 2018',
        'May 2019',
      ]
    }
  }
}
</script>
