import { pokeDto } from "../dtos/customerDTO";
import PokeRepository from "../repositories/PokeRepository";

type PokeDependencies = {
    pokeRepository: PokeRepository
}

export const PokeService = (dependencies: PokeDependencies) => {

    const findAll = () => dependencies.pokeRepository.findAll()
    
    const find = (id: number) => dependencies.pokeRepository.find(id)

    const addPoke = (poke: pokeDto) => dependencies.pokeRepository.addPoke(poke)


    return {
        findAll,
        find,
        addPoke
    }
}