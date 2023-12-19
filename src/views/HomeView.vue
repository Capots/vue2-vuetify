<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">
    <SideBar />
    <Dashboard />
  </v-app>
</template>

<script>
  import SideBar from '../components/Sidebar'
  import Dashboard from '../components/Dashboard'

  export default {
    name: 'Home',

    components: {
      SideBar,
      Dashboard
      
    },
  }
</script>