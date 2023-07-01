export default {
    props: {
        pokemonName: {
            type: String,
            default: "",
        },
    },
    name: "pokemon-card",

    data: () => ({
        img: null,
        pokemonName: "",
    }),

    methods: {},
};
