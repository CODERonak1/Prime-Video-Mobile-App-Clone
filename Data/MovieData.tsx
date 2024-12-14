interface Movies {
    id: number,
    name: string,
    img: string
}

const MovieData: Movies[] = ([
    {
        id: 1,
        name: 'Kanguva',
        img: 'https://i.ytimg.com/vi/YB4Kgb5fd5Y/maxresdefault.jpg'
    },

    {
        id: 2,
        name: 'Singham Again',
        img: 'https://images.moneycontrol.com/static-mcnews/2024/11/20241102020438_singhamagainboxoffice.jpg?impolicy=website&width=770&height=431'
    },

    {
        id: 3,
        name: 'Bandish Bandits',
        img: 'https://images.hindustantimes.com/tech/img/2024/11/14/960x540/GcPPBLuXAAA9fYl_1731582990997_1731583222937.jpeg'
    },
])

export default MovieData