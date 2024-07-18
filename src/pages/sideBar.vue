<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer permanent>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <template v-for="(item, index) in items" :key="index">
            <v-list-item
              v-if="item.action && !item.grouped"
              :value="item.title"
              :prepend-icon="item.action"
              :title="item.title"
              :to="item.route"
              link
            ></v-list-item>
            <v-list-item
              v-else-if="item.action && item.grouped"
              :value="item.title"
              :prepend-icon="item.action"
              :title="item.title"
            ></v-list-item>
            <v-divider v-else-if="item.divider"></v-divider>
            <v-list-subheader v-else-if="item.header">{{ item.header }}</v-list-subheader>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    action: 'mdi-inbox-arrow-down',
    title: 'Inbox',
    route: '/inbox'
  },
  {
    action: 'mdi-send',
    title: 'Sent',
    route: '/sent'
  },
  {
    action: 'mdi-delete',
    title: 'Trash',
    route: '/trash'
  },
  {
    action: 'mdi-alert-octagon',
    title: 'Spam',
    route: '/spam'
  },
  { divider: true },
  { header: 'Labels' },
  {
    action: 'mdi-label',
    title: 'Family',
    grouped: true
  },
  {
    action: 'mdi-label',
    title: 'Friends',
    grouped: true
  },
  {
    action: 'mdi-label',
    title: 'Work',
    grouped: true
  },
])
</script>
