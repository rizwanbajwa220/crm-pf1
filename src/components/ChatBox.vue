<template>
  <v-container>
    <v-navigation-drawer v-if="leftDrawerOpen" permanent location="left">
      <template v-slot:prepend>
        <v-list-item
          lines="two"
          prepend-avatar="@/assets/logo.svg"
          title="Chatbox"
        > 
    </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="(conversation, index) in conversations"
          :key="conversation.id"
          @click="setCurrentConversation(index)"
          lines="two"
          :prepend-avatar="conversation.avatar"
          :title="conversation.person"
          :subtitle="conversation.caption"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="success">
      <v-app-bar-nav-icon @click="toggleLeftDrawer"></v-app-bar-nav-icon>
      <v-avatar>
        <v-img :src="currentConversation.avatar"></v-img>
      </v-avatar>
      <span class="subtitle-1 pl-4">{{ currentConversation.person }}</span>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-attachment</v-icon></v-btn>
      <v-menu location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn dark v-bind="props">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app class="pa-0">
      <v-btn icon flat class="mb-4"><v-icon>mdi-emoticon</v-icon></v-btn>
      <v-text-field
      class="ma-0"
        rounded="xl"
        v-model="message"
        variant="solo"
        placeholder="Type a message"
      ></v-text-field>
      <v-btn class="mb-4 ml-3" icon flat><v-icon>mdi-send</v-icon></v-btn>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "WhatsappLayout",

  data() {
    return {
      leftDrawerOpen: true,
      search: "",
      message: "",
      currentConversationIndex: 0,

      items: [
        { title: "Contact data" },
        { title: "Select messages" },
        { title: "Silence" },
        { title: "Clear messages" },
        { title: "Erase messages" },
      ],

      conversations: [
        {
          id: 1,
          person: "Razvan Stoenescu",
          avatar: "https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",
          caption: "I'm working on Vue!",
          time: "15:00",
          sent: true,
          deleted: false,
        },
        {
          id: 2,
          person: "Dan Popescu",
          avatar: "https://cdn.quasar.dev/team/dan_popescu.jpg",
          caption: "I'm working on Vue!",
          time: "16:00",
          sent: true,
          deleted: false,
        },
        {
          id: 3,
          person: "Jeff Galbraith",
          avatar: "https://cdn.quasar.dev/team/jeff_galbraith.jpg",
          caption: "I'm working on Vue!",
          time: "18:00",
          sent: true,
          deleted: false,
        },
        {
          id: 4,
          person: "Allan Gaunt",
          avatar: "https://cdn.quasar.dev/team/allan_gaunt.png",
          caption: "I'm working on Vue!",
          time: "17:00",
          sent: true,
          deleted: false,
        },
      ],
    };
  },

  computed: {
    currentConversation() {
      return this.conversations[this.currentConversationIndex];
    },
  },

  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    setCurrentConversation(index) {
      this.currentConversationIndex = index;
    },
  },
};
</script>
