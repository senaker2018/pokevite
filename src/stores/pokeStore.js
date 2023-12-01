
import { defineStore } from 'pinia';
import { computed, onMounted, reactive, ref } from 'vue';

export const usePokeStore = defineStore('pokeStore', () => {
    let pokesDb = reactive(ref())
    let pokeImg = ref('../src/assets/imgs/pokeball.png')
    let pokemon = reactive(ref())
    

    async function  setPokemonByName(nome) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
            .then(res => res.json())
            .then(res => {
                pokemon.value = res
                
            })
    } 

    onMounted(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(res => res.json())
            .then(res => {
                pokesDb.value = res.results
            })
    })

    const showPokemon = computed(() => pokemon)
    const pokemons = computed(() => pokesDb) 
    const searchPokeC= computed(()=> searchPoke) 
  
    return {
        pokemons, pokeImg, showPokemon, setPokemonByName, pokesDb
    }
});
