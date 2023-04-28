import { archetypes } from '../../engine/data/archetypes/index.js'

/** @type import('sonolus-core').LevelData */
export const data = {
    bgmOffset: 0,
    entities: [
        {
            archetype: archetypes.Initialization.name,
            data: [],
        },
        {
            archetype: archetypes.Stage.name,
            data: [],
        },
    ],
}
