export interface Weather{
    place: string,
    description: string,
    icon: string
}

export interface WeatherServerProps{
name: string,
main: {
    temp:number
    },
    weather: [description: string, icon: string]
}