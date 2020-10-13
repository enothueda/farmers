
export const removeSector = (selectedSectors, sectorToRemove) => {
    const existingSectors = selectedSectors.find(sector => sector === sectorToRemove);
    console.log(existingSectors)
    if(existingSectors) {
        return selectedSectors.filter(sector => sector !== sectorToRemove);
    }

    return selectedSectors;
}