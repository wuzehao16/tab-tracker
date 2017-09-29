<template>
  <v-layout >
    <v-flex xs4>
      <panel title='CreateSong'>
        <v-text-field label="Enter title" v-model="song.title"></v-text-field>
        <v-text-field label="Enter artist" v-model="song.artist"></v-text-field>
        <v-text-field label="Enter genre" v-model="song.genre"></v-text-field>
        <v-text-field label="Enter album" v-model="song.album"></v-text-field>
        <v-text-field label="Enter albumImageUrl" v-model="song.albumImageUrl"></v-text-field>
        <v-text-field label="Enter youtubeId" v-model="song.youtubeId"></v-text-field>      
      </panel>
    </v-flex>
    <v-flex xs8 class="ml-2 pl-4">
      <panel title='CreateSong'>
        <v-text-field label="Enter lyrics" v-model="song.lyrics" multi-line></v-text-field>
        <v-text-field label="Enter tab" v-model="song.tab" multi-line></v-text-field> 
      </panel>
      <div v-html="error" class="error--text"></div>
        <v-btn class="cyan lighten-3" @click="create">
          Create song
        </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      error: null,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async create () {
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'Songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style>

</style>
