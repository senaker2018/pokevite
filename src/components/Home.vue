<template>
  <div class="container">
    <div class="row mt-4 justify-content-center">
      <div v-if="showPokemon" class="col-sm-6 col-md-6 align-center">
        <div class="card" style="width: 300px; border: none; margin-top: 5em; align-items: center;">            
          <img
            style="max-width: 200px; max-height: 200px;"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${showPokemon.id}.svg`"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body" style="text-align: ;">
            <h5 class="card-title">{{ showPokemon.name }}</h5>
            
          </div>
        </div>
      </div>
      <div v-if="!showPokemon" class="col-sm-6 col-md-6 align-center">
        <div class="card" style="width: 300px; border: none; margin-top: 15px; text-align: center;">
          <img
            src="https://i.pinimg.com/originals/d6/10/fe/d610fe1558ba1f7e7fe1406a295ba229.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Escolha o pokemon</h5>
            
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="card" style="border: none">
          <div class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm"
              >Pesquisar</span
            >
            
            <input
              v-model="fieldPokemon"     
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        
          <div v-if="fieldPokemon" class="card-body row">
            <ListPokemon
              @click="setPokemonByName(item.name)"
              v-for="(item, index) in p.filter(x => x.name.includes(fieldPokemon))"
              :key="index"
              :id="item.url.split('/')[6]"
              :name="item.name"
            />
          </div>
          <div v-if="!fieldPokemon" class="card-body row">
            <ListPokemon
              @click="setPokemonByName(item.name)"
              v-for="(item, index) in pokemons"
              :key="index"
              :id="index + 1"
              :name="item.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref,computed, toRaw } from "vue";
import { usePokeStore } from "../stores/pokeStore.js";
import ListPokemon from './ListPokemon.vue'
const { pokemons, pokeImg, showPokemon, setPokemonByName } = usePokeStore();
let fieldPokemon = ref('')
let p = reactive([])

onMounted(() => {
    p = pokemons    
   
})


</script>

<style scoped></style>