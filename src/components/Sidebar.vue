<template>
    <v-navigation-drawer v-model="drawer" app color="#0F0A1E" :mini-variant.sync="mini" permanent>

      <v-list-item class="px-2">
        <v-avatar class="d-block text-center mx-auto mt-4" size="45">
        <v-icon color="#C3F942" x-large>fa-solid fa-place-of-worship</v-icon>
      </v-avatar>
        <v-btn
            icon
            @click.stop="mini = !mini"
          >
            <v-icon color="#C3F942">mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      <v-list flat class="mt-16" dark>
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
            v-slot="{ active }"
            :ripple="false"
            link
          >
            <v-list-item-icon>
              <v-icon :color="active ? '#C3F942' : 'grey'">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    data: () => ({
      selectedItem: 0,
      drawer: null,
      items: [
        { title: 'Dashboard', icon: "fas fa-podcast" },
        { title: 'File Maintenance', icon: "mdi-view-dashboard" },
        { title: 'Reports', icon: "mdi-account-box" },
        { title: 'Utilities', icon: "mdi-gavel" },
      ],
      mini: true,
    }),
  };
  </script>
  
  <style>
  .border {
    text-decoration: none;
    text-shadow: 1px 1px 2px black, 0 0 15px #c3f942, 0 0 5px green;
  }
  .v-list-item-group .v-list-item--active {
    color: #c3f942 !important;
  }
  </style>