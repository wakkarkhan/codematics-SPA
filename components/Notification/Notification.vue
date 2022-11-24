<template>
  <v-snackbar :timeout="-1" v-model="snackbar" class="notification">
    <div class="action">
      {{ $t('common.notif_msg') }}
    </div>
    <v-btn outlined color="white" class="button" @click="writeCookie">
      {{ $t('common.accept') }}
    </v-btn>

    <!-- <v-btn outlined color="white" class="button ml-2">
      {{ $t('common.customize') }}
    </v-btn> -->
  </v-snackbar>
</template>

<style lang="scss" scoped>
@import './notification-style.scss';
</style>

<script>
export default {
  data() {
    return {
      snackbar: true
    }
  },
  methods: {
    writeCookie() {
      this.snackbar = false;
      console.log(this.snackbar == false)
      if (this.snackbar == false) {
        document.cookie = "accept=true; secure";
      } else {
        document.cookie = "accept=false; secure";
      }
    }
  },
  mounted() {
    let cookieValue = document.cookie;

    function getCookie(name) {
      var re = new RegExp(name + "=([^;]+)");
      var value = re.exec(document.cookie);
      return (value != null) ? unescape(value[1]) : null;
    }

    cookieValue = getCookie("accept");
    if (cookieValue == "true") {
      this.snackbar = false;
    } else {
      this.snackbar = true;
    }
  }
}
</script>
