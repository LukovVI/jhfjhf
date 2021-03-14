<template>
  <div id="navbar">
    <v-app-bar absolute color="yellow">
      <router-link :to="{name: 'home'}" class="text-decoration-none hover">
        <v-btn color="success" v-on="on">
        На главную
        </v-btn>
      </router-link>

      <v-spacer/>

      <div class="text-center">
        <v-menu v-if="isAuthorized" offset-y>
          <template v-slot:activator="{on}">
            <v-btn color="success" v-on="on">
              Профиль
            </v-btn>
          </template>

          <v-list color="yellow">
            <v-list-item :to="{name: 'profile'}">
              <v-list-item-title>Профиль</v-list-item-title>
            </v-list-item>

            <v-list-item link>
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-list-item-title v-on="on" style="color: red; width: 120px">
                    Выйти
                  </v-list-item-title>
                </template>

                <v-card>
                  <v-card-title class="headline yellow lighten-2">Выход</v-card-title>
                  <v-card-text class="mt-4">
                    Вы действительно хотите выйти?
                  </v-card-text>
                  <v-divider/>
                  <v-card-actions>
                    <v-spacer/>
                    <v-btn color="red" text @click="dialog = false">Нет</v-btn>
                    <v-btn color="success" text @click="logoutClick" :to="{name: 'home'}">Да</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-list-item>
          </v-list>
        </v-menu>

        <div v-else>
          <v-btn elevation="5" dark color="success"
                 :to="{name: 'login'}">Войти
          </v-btn>

          <v-btn elevation="5" dark color="success"
                 :to="{name: 'registration'}">Регистрация
          </v-btn>
        </div>
      </div>
    </v-app-bar>


  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      dialog: false,
    }
  },
  computed: {
    isAuthorized() {
      return this.$cookies.isKey('Token')
    }
  },
  methods: {
    logoutClick() {
      this.$cookies.remove('Token')
      this.dialog = false
    }
  },
}
</script>

<style scoped>

</style>