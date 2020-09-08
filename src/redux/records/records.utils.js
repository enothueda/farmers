export const removePestDetection = (allDetections, detectionToRemove) => {
    const existingPestDetection = allDetections.find(detection => detection === detectionToRemove);

    if(existingPestDetection) {
        return allDetections.filter(detection => detection !== detectionToRemove)
    }

    return allDetections
}