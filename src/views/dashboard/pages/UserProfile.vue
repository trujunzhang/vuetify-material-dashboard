<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <left-panel />
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <right-panel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LeftPanel from '@/components/page/userprofile/leftPanel'
import RightPanel from '@/components/page/userprofile/rightPanel'
  export default {
    name: 'UserProfile',
    components: {
      LeftPanel,
      RightPanel
    }
  }
</script>
