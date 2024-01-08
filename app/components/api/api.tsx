export async function AllPrice() {
    const res = await fetch('http://localhost:4000/device/price',  {cache: 'no-cache'})
    const getdata = res.json()
    return getdata
  }
  

  export async function PriceByType(type: string) {
    const res = await fetch(`http://localhost:4000/device/price/${type}`,  {cache: 'no-cache'})
    const getdata = res.json()
    return getdata
  }
  

