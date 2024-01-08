export async function getstaticprops() {
    const res = await fetch('http://localhost:4000/iphone/price')
    const price = await res.json()
    
    return {
      props: {
        price,
      },
    }
  }