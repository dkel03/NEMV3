<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">get</h3>
            </div>
          </v-card-title>
		  <v-card-text>
		  	<v-textarea v-model="getMd">
			</v-textarea>
		  </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="getReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
		
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">post</h3>
            </div>
          </v-card-title>
		  <v-card-text>
		  	<v-textarea v-model="postMd">
			</v-textarea>
		  </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="postReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
		
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">put</h3>
            </div>
          </v-card-title>
		  <v-card-text>
		  	<v-textarea v-model="putMd">
			</v-textarea>
		  </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="putReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
		
      <v-flex xs12 sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">del</h3>
            </div>
          </v-card-title>
		  <v-card-text>
		  	<v-textarea v-model="delMd">
			</v-textarea>
		  </v-card-text>
          <v-card-actions>
            <v-btn flat color="orange" @click="delReq">submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      	users: [],
		getMd: '',
		postMd: '',
		putMd: '',
		delMd: ''
    }
  },
  mounted () {

  },
	methods: {
		getReq() {
			axios.get('https://nemv-stack.run.goorm.io/api/user',{
				user: 'getman'
			})
			.then((r) => {
				this.getMd = JSON.stringify(r.data)
			})
			.catch((e) => {
				console.error(e.message)
			}) 
		},
		postReq() {
			axios.post('https://nemv-stack.run.goorm.io/api/user', {
				user: 'postman'
			})
			.then((r) => {
				this.postMd = JSON.stringify(r.data)
			})
			.catch((e) => {
				console.error(e.message)
			}) 
		},
		putReq() {
			axios.put('https://nemv-stack.run.goorm.io/api/user', {
				user: 'putman'
			})
			.then((r) => {
				this.putMd = JSON.stringify(r.data)
			})
			.catch((e) => {
				console.error(e.message)
			}) 
		},
		delReq() {
			axios.delete('https://nemv-stack.run.goorm.io/api/user', {
				user: 'deleteman'
			})
			.then((r) => {
				this.delMd = JSON.stringify(r.data)
			})
			.catch((e) => {
				console.error(e.message)
			}) 
		},
		
	}
}
</script>
