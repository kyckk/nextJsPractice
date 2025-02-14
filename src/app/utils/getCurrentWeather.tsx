const API_KEY= process.env.NEXT_PUBLIC_API_KEY;

export const getCurrentWeather = async (loctaion:string): Promise<Response> =>{
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q={location}&aqi=no`)
  //console.log(res);

  if(!res.ok){
    if(!res.ok) throw new Error("날씨 정보를 가지고 올 수 없습니다 ")
  }
  return  res.json()
}


export interface Response {
    location: Location
    current: Current
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    vis_km: number
    vis_miles: number
    uv: number
    gust_mph: number
    gust_kph: number
  }
  
  export interface Condition {
    text: string
    icon: string
    code: number
  }
  