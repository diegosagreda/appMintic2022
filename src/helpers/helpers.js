
export const GenerarId =()=>{
    const random=Math.random().toString(36).substr(2);
    const date=Date.now().toString(36);
    return random + date
}

export const FormatoMoneda=cantidad=>{
    return cantidad.toLocaleString('es-CO',{
        style: 'currency',
        currency:'COP',
        minimumFractionDigits:2
    })
}