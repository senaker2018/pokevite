<template>
  <div class="col-sm-12 col-md-6 justify-content-center">
    <div
      class="card mb-3 cardListPokemon"
      @click="setPokemonByName(pokes.name)"
    >
      <p class="text-center">{{ pokes.name }}</p>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokes.id}.svg`"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { usePokeStore } from "../stores/pokeStore";

const pokes = defineProps(["id", "name"]);

const { setPokemonByName } = usePokeStore();
</script>

<style scoped>
.cardListPokemon {
  padding: 30px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  cursor: pointer;

}

img {
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
  max-height: 100px;
}
</style>