function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    const calculateOrbitalPeriod = (avgAlt) => {
        const axisSemiMajor = earthRadius + avgAlt;
        const orbitalPeriodInSeconds = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axisSemiMajor, 3) / GM));
        return orbitalPeriodInSeconds;
    };

    return arr.map(({ name, avgAlt }) => ({
        name,
        orbitalPeriod: calculateOrbitalPeriod(avgAlt),
    }));
}

// Exemplo de uso
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
// Deve retornar [{ name: "sputnik", orbitalPeriod: 86400 }]