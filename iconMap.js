export const ICON_MAP = new Map()

addMapping([0, 1], "soleil")
addMapping([2], "soleil et nuages")
addMapping([3], "nuageux")
addMapping([45, 48], "brouillard")
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "quelques averses")
addMapping([71, 73, 75, 77, 85, 86], "neige")
addMapping([95, 96, 99], "orages")

function addMapping(values, icon) {
    values.forEach(value => {
        ICON_MAP.set(value, icon)
    })
}